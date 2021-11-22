import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'

    SQLALCHEMY_DATABASE_URI = 'sqlite:///app.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    MJ_APIKEY_PUBLIC = os.environ.get('MJ_APIKEY_PUBLIC')
    MJ_APIKEY_PRIVATE = os.environ.get('MJ_APIKEY_PRIVATE')
    MJ_SENDER_EMAIL = os.environ.get('MJ_SENDER_EMAIL')

    RECAPTCHA_SITE_KEY = os.environ.get('RECAPTCHA_SITE_KEY')
    RECAPTCHA_SECRET_KEY = os.environ.get('RECAPTCHA_SECRET_KEY')

    MINIFY_HTML = True
