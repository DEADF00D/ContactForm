from flask import Flask, session
from config import Config

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_htmlmin import HTMLMIN
from flask_request_params import bind_request_params


app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
app.config['SESSION_SQLALCHEMY'] = db

migrate = Migrate(app, db)

htmlmin = HTMLMIN(app)

app.before_request(bind_request_params)

from cform import routes, models
