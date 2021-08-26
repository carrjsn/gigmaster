
-- CREATE DATABASE mvp2;

-- use mvp2 database
\c mvp2;

CREATE TABLE musicians(
  id serial PRIMARY KEY,
  name text,
  city text,
  state VARCHAR(2),
  zip VARCHAR(5),
  instrument text,
  genre text,
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
  name text,
  musician_id int NOT NULL,
  FOREIGN KEY (musician_id)
    REFERENCES musicians(id)
);

CREATE TABLE genres(
  id serial PRIMARY KEY,
  name text,
  musician_id int NOT NULL,
  FOREIGN KEY (musician_id)
    REFERENCES musicians(id)
);