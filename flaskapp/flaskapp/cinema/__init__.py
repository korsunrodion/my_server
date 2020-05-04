from flask import Flask, Blueprint, render_template

cinema_app = Blueprint('cinema_app', __name__, template_folder='react')

@cinema_app.route('/')
def index():
    return render_template('cinema.html')


