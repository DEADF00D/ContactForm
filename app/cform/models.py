from cform import db
import secrets

class Form_Email(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    form_id = db.Column(db.Integer, db.ForeignKey("form.id"))
    form = db.relationship("Form")

    token = db.Column(db.String(32))
    email = db.Column(db.String(255))
    verified = db.Column(db.Boolean)
    unsubscribed = db.Column(db.Boolean)

    def __init__(self):
        self.token = secrets.token_hex(16)
        self.verified = False
        self.unsubscribed = False

    def __repr__(self):
        return '<Form_Email (token = {}, email = {}, verified = {}, unsubscribed = {})'.format(self.token, self.email, self.verified, self.unsubscribed)

class Form_Submission(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    form_id = db.Column(db.Integer, db.ForeignKey("form.id"))
    form = db.relationship("Form")

    token = db.Column(db.String(32))
    origin = db.Column(db.String(255))
    done = db.Column(db.Boolean)

    def __init__(self):
        self.token = secrets.token_hex(16)
        self.done = False

    def __repr__(self):
        return '<Form_Submission (token = {}, origin = {}, done = {})'.format(self.token, self.origin, self.done)

class Form(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    token = db.Column(db.String(32))
    emails = db.relationship("Form_Email")
    submissions = db.relationship("Form_Submission")

    def __init__(self):
        self.token = secrets.token_hex(16)

    def __repr__(self):
        return '<Form {} ({} emails, {} submissions)>'.format(self.token, len(self.emails), len(self.submissions))
