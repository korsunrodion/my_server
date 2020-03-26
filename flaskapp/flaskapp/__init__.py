from flask import Flask, Blueprint, render_template
from flaskapp.pomodoro import pomodoro_app

app = Flask(__name__)
app.config['SERVER_NAME'] = 'korsunrodion.com'
# app.config['TEMPLATES_AUTO_RELOAD'] = True

app.register_blueprint(pomodoro_app, subdomain='pomodoro')

@app.route('/')
def root():
    return render_template('index.html')


