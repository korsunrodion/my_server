from flask import Flask, Blueprint, render_template

pomodoro_app = Blueprint('pomodoro_app', __name__, template_folder='vue/templates')

@pomodoro_app.route('/')
def index():
    return render_template('pomodoro.html')


