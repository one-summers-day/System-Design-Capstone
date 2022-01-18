DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

\c products;

CREATE TABLE product_overview (
  product_id INTEGER PRIMARY KEY NOT NULL,
  productName VARCHAR(100) NOT NULL,
  slogan TEXT,
  productDescription TEXT,
  category VARCHAR(100),
  default_price INTEGER
);

CREATE TABLE related_products (
    id SERIAL PRIMARY KEY NOT NULL,
    primary_product INTEGER REFERENCES product_overview(product_id),
    related_product INTEGER 
);

CREATE TABLE features (
    id SERIAL PRIMARY KEY NOT NULL,
    product_id INTEGER REFERENCES product_overview(product_id),
    feature CHAR(100),
    feature_value CHAR(100)
);

CREATE TABLE styles (
    id SERIAL PRIMARY KEY NOT NULL,
    product_id INTEGER REFERENCES product_overview(product_id),
    style_name CHAR(100) NOT NULL,
    sale_price INTEGER DEFAULT NULL,
    original_price INTEGER NOT NULL,
    default_style BOOLEAN DEFAULT TRUE
);

CREATE TABLE photos(
    id SERIAL PRIMARY KEY NOT NULL,
    style_id INTEGER REFERENCES styles(id),
    photo_url TEXT,
    thumbnail_url TEXT
);

CREATE TABLE skus(
    id SERIAL PRIMARY KEY NOT NULL,
    style_id INTEGER REFERENCES styles(id),
    size VARCHAR,
    quantity INTEGER DEFAULT 0
);
