from cform import app
from cform.models import *
from config import Config
from flask import render_template, abort, send_from_directory, request, redirect
from validate_email import validate_email

import requests
from requests.models import PreparedRequest

@app.context_processor
def inject_processor():
    return dict(
        Config = Config
    )

@app.route('/f/<string:token>', methods = [ 'GET' ])
def form_get(token):
    f = Form.query.filter_by(token = token).first()
    if not f:
        return render_template('form_not_found.tpl', Token = token)

    return render_template('form_not_get.tpl', Token = token)

@app.route('/f/<string:token>', methods = [ 'POST' ])
def form(token):
    origin = None
    if 'Origin' in list(request.headers.keys()) and request.headers['Origin']:
        if request.headers['Origin'] != 'null':
            origin = request.headers['Origin']

    f = Form.query.filter_by(token = token).first()
    if not f:
        return render_template('form_not_found.tpl', Token = token)

    values = []
    for k in request.form.keys():
        if request.form[k]:
            values.append((k, request.form[k]))

    fs = Form_Submission()
    fs.form_id = f.id
    fs.origin = origin

    print("Origin:", fs.origin)

    db.session.add(fs)
    db.session.commit()

    return render_template('form_post.tpl',
        Values = values,
        Submission = fs
    )

@app.route('/submit/<string:token>', methods = [ 'POST' ])
def form_submit(token):
    if not ('g-recaptcha-response' in list(request.form.keys()) and request.form['g-recaptcha-response']):
        abort(500)

    fields = []
    for k in list(request.form.keys()):
        if k != 'g-recaptcha-response':
            fields.append({
                'name': k,
                'value': request.form[k]
            })

    fs = Form_Submission.query.filter_by(token = token, done = False).first()
    if not fs:
        return abort(404)

    r = requests.post(
        "https://www.google.com/recaptcha/api/siteverify",
        {
            "secret": Config.RECAPTCHA_SECRET_KEY,
            "response": request.form['g-recaptcha-response'],
            "remoteip": request.remote_addr
        }
    )

    if r.status_code != 200:
        abort(500)

    data = r.json()
    if not 'success' in list(data.keys()):
        abort(500)

    if not data['success']:
        abort(500)

    messages = []
    for e in fs.form.emails:
        if e.verified and not e.unsubscribed:
            messages.append({
                "From": {
                    "Email": str(Config.MJ_SENDER_EMAIL),
                    "Name": "ContactForm API"
                },
                "To": [
                    {
                        "Email": str(e.email),
                        "Name": "Name"
                    }
                ],
                "TemplateID": 3280063,
                "TemplateLanguage": True,
                "Subject": "Your form has been submitted !",
                "Variables": {
                    "fields": fields,
                    "unsubscribetoken": e.token
                },
                "TemplateErrorReporting": {
                    "Email": "admin@print-on.fr",
                    "Name": "Didelot Maurice-Michel"
                }
            })

    r = requests.post("https://api.mailjet.com/v3.1/send", json = {
        'Messages': messages
    }, auth = (Config.MJ_APIKEY_PUBLIC, Config.MJ_APIKEY_PRIVATE))

    fs.done = True
    db.session.commit()

    if fs.origin != None:
        req = PreparedRequest()
        req.prepare_url(fs.origin, { 'cform-success': 'true' })
        return redirect(req.url)
    else:
        return render_template("form_success.tpl", Token = token)

@app.route('/valid-email/<string:token>')
def valid_token(token):
    fe = Form_Email.query.filter_by(token = token, unsubscribed = False, verified = False).first()
    if not fe:
        return render_template('email_already_verified.tpl')

    fe.verified = True
    db.session.commit()

    return render_template('email_verified.tpl', Token = fe.form.token)

@app.route('/', methods = ['GET', 'POST'])
def index():
    return render_template('index.tpl')

@app.route('/new', methods = ['POST'])
def new():
    data = request.json

    if not (data and 'emails' in data and len(data['emails'])):
        return {
            'error': 'No emails'
        }

    valid = True
    for e in data['emails']:
        if not 'email' in e and e['email']:
            valid = False
            break
        elif not validate_email(e['email'], verify=True):
            valid = False
            break

    if not valid:
        return { 'error': 'Some emails here don\'t exist.'  }

    f = Form()
    db.session.add(f)
    db.session.commit()

    for e in data['emails']:
        if e and 'email' in e and e['email']:
            fe = Form_Email()
            fe.form_id = f.id
            fe.email = e['email']
            db.session.add(fe)
            db.session.commit()

    messages = []
    for e in f.emails:
        print("Email:", e.email)
        messages.append({
            "From": {
                "Email": str(Config.MJ_SENDER_EMAIL),
                "Name": "ContactForm API"
            },
            "To": [
                {
                    "Email": str(e.email),
                    "Name": "Name"
                }
            ],
            "TemplateID": 3360477,
            "TemplateLanguage": True,
            "Subject": "Someone added your email to a contact form",
            "Variables": {
                "token": e.token
            },
            "TemplateErrorReporting": {
                "Email": "admin@print-on.fr",
                "Name": "Didelot Maurice-Michel"
            }
        })

    r = requests.post("https://api.mailjet.com/v3.1/send", json = {
        'Messages': messages
    }, auth = (Config.MJ_APIKEY_PUBLIC, Config.MJ_APIKEY_PRIVATE))

    return {
        'token': f.token
    }

@app.route('/unsubscribe/<string:token>', methods = ['GET', 'POST'])
def unsubscribe(token):
    if 'valid' in request.form and request.form['valid']:
        e = Form_Email.query.filter_by(token = token).first()
        if not e:
            abort(404)

        e.unsubscribed = True
        db.session.commit()

        return render_template('unsubscribe_valid.tpl', Token = token)
    else:
        return render_template('unsubscribe.tpl', Token = token)

@app.route('/<path:path>')
def static_(path):
    return send_from_directory('static', path)

@app.errorhandler(404)
def error(e):
    return render_template("404.tpl")

@app.errorhandler(500)
def error(e):
    return render_template("500.tpl")
