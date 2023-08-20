DROP DATABASE IF EXISTS paintings_dev;
CREATE DATABASE paintings_dev;

\c paintings_dev;

CREATE TABLE paintings (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist_name TEXT,
 painting_year NUMERIC,
 is_painter_alive BOOLEAN,
 price NUMERIC,
 country_of_origin TEXT,
 image TEXT

);
