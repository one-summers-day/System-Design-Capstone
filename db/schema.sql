DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

\c products;

CREATE TABLE product_overview (
  id INTEGER PRIMARY KEY NOT NULL,
  "name" VARCHAR(100) NOT NULL,
  slogan TEXT,
  "description" TEXT,
  category VARCHAR(100),
  default_price INTEGER
);

CREATE TABLE related_products (
    id SERIAL PRIMARY KEY NOT NULL,
    primary_product INTEGER REFERENCES product_overview(id),
    related_product INTEGER 
);

CREATE TABLE features (
    id SERIAL PRIMARY KEY NOT NULL,
    product_id INTEGER REFERENCES product_overview(id),
    feature CHAR(100),
    value CHAR(100)
);

CREATE TABLE styles (
    style_id SERIAL PRIMARY KEY NOT NULL,
    product_id INTEGER REFERENCES product_overview(id),
    "name" CHAR(100) NOT NULL,
    sale_price INTEGER DEFAULT NULL,
    original_price INTEGER NOT NULL,
    "default?" BOOLEAN DEFAULT TRUE
);

CREATE TABLE photos(
    id SERIAL PRIMARY KEY NOT NULL,
    style_id INTEGER REFERENCES styles(style_id),
    "url" TEXT,
    thumbnail_url TEXT
);

CREATE TABLE skus(
    id SERIAL PRIMARY KEY NOT NULL,
    style_id INTEGER REFERENCES styles(style_id),
    size VARCHAR,
    quantity INTEGER DEFAULT 0
);

