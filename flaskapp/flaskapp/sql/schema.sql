-- DROP TABLE IF EXISTS user;
-- DROP TABLE IF EXISTS admin;
-- DROP TABLE IF EXISTS post;


CREATE TABLE IF NOT EXISTS user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS admin (
  id INTEGER PRIMARY KEY,
  username TEXT UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS image (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    link VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS movie (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_added_id INTEGER NOT NULL,
  added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  images_ids VARCHAR(255),

  title TEXT NOT NULL,
  year INTEGER,
  genre VARCHAR(50),
  budget VARCHAR(50),
  maturity_rating VARCHAR(50),
  duration INTEGER,
  countries VARCHAR(255),
  composers VARCHAR(255),
  producers VARCHAR(255),
  directors VARCHAR(255),
  screenwriters VARCHAR(255),
  operators VARCHAR(255),

  FOREIGN KEY (user_added_id) REFERENCES admin(id)
);

-- INSERT INTO user VALUES('sloow_ua', '17101996')
-- INSERT INTO admin SELECT id, username FROM user

-- INSERT INTO movie VALUES (
--   SELECT id from user where username = 'sloow_ua',
--   NULL,
--   'The Movie'
-- )