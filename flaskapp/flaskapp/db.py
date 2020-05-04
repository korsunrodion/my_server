import sqlite3

import click
from flask import current_app, g

def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect(
            current_app.config['DATABASE'],
            detect_types=sqlite3.PARSE_DECLTYPES
        )
        g.db.row_factory = sqlite3.Row

    return g.db

# def get_db():
#     with current_app.app_context():
#         db = getattr(g, 'db', None)
#         if db is None:
#             db = g.db = sqlite3.connect(current_app.config['DATABASE'])
#         return db

def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv

def close_db(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()

# @with_appcontext
def init_db():
    db = get_db()
    current_app.teardown_appcontext(close_db)

    with current_app.open_resource('sql/schema.sql') as f:
        db.executescript(f.read().decode('utf8'))