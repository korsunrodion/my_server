from flask import Flask, Blueprint, render_template, current_app
from flaskapp.pomodoro import pomodoro_app
from flaskapp.cinema import cinema_app
from flaskapp import db

from flask_restful import Resource, Api
from flaskapp.resources.movie import Movie

app = Flask(__name__)
app.app_context().push()
app.config['SERVER_NAME'] = 'korsunrodion.com'
app.config['DATABASE'] = '/var/www/flaskapp/flaskapp/database.db'
# app.config['TEMPLATES_AUTO_RELOAD'] = True
# app.config['FLASK_APP'] = 'flaskapp.wsgi'

api = Api(app)

app.register_blueprint(pomodoro_app, subdomain='pomodoro')
app.register_blueprint(cinema_app, subdomain='tasks')

db.init_db()

@app.route('/')
def root():
    return render_template('index.html')

api.add_resource(Movie, '/Movie', '/Movie/<string:id>')