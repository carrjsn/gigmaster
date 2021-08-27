
DROP DATABASE if exists mvp2;

CREATE DATABASE mvp2;

-- /Applications/Postgres.app/Contents/Versions/13/bin/psql -p5432 "postgres"

-- use mvp2 database
\c mvp2;

CREATE TABLE musicians(
  id serial PRIMARY KEY,
  name text,
  city text,
  state VARCHAR(2),
  zip VARCHAR(5),
  photo text,
  bio text,
  website text,
  max_travel int,
  min_pay int,
  phone varchar(10),
  email text
);

CREATE TABLE instruments(
  id serial PRIMARY KEY,
  name text
);

-- join table for many to many
CREATE TABLE instruments_musicians(
  id serial PRIMARY KEY,
  musician_id int NOT NULL,
  instrument_id int NOT NULL,
  FOREIGN KEY (musician_id)
    REFERENCES musicians(id),
  FOREIGN KEY (instrument_id)
    REFERENCES instruments(id)
);

CREATE TABLE genres(
  id serial PRIMARY KEY,
  name text
);

CREATE TABLE genres_musicians(
  id serial PRIMARY KEY,
  musician_id int NOT NULL,
  genre_id int NOT NULL,
  FOREIGN KEY (musician_id)
    REFERENCES musicians(id),
  FOREIGN KEY (genre_id)
    REFERENCES genres(id)

);

-- CREATE TABLE gigs(

--);


-- populate instruments
INSERT INTO instruments (name) VALUES ('bass');
INSERT INTO instruments (name) VALUES ('guitar');
INSERT INTO instruments (name) VALUES ('piano');
INSERT INTO instruments (name) VALUES ('drums');
INSERT INTO instruments (name) VALUES ('saxophone');
INSERT INTO instruments (name) VALUES ('trumpet');
INSERT INTO instruments (name) VALUES ('vocals');

-- populate genres
INSERT INTO genres (name) VALUES ('country');
INSERT INTO genres (name) VALUES ('jazz');
INSERT INTO genres (name) VALUES ('rock');
INSERT INTO genres (name) VALUES ('folk');
INSERT INTO genres (name) VALUES ('bluegrass');
INSERT INTO genres (name) VALUES ('classical');
INSERT INTO genres (name) VALUES ('soul');
INSERT INTO genres (name) VALUES ('metal');


