DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

\c products;

CREATE TABLE products (
  product_id INTEGER PRIMARY KEY NOT NULL,
  productName CHAR(100) NOT NULL,
  slogan CHAR(300),
  productDescription CHAR(300),
  category CHAR(100),
);

CREATE TABLE related_products (
    id SERIAL PRIMARY KEY NOT NULL,
    primary_product INTEGER REFERENCES products(product_id),
    related_product INTEGER REFERENCES products(product_id)
)

CREATE TABLE features (
    id SERIAL PRIMARY KEY NOT NULL,
    feature CHAR(100),
    feature_value CHAR(100)
    product_id INTEGER REFERENCES products(product_id),
)

{/* TODO: sale price > 0 and < original_price,
original_price > 0*/}
CREATE TABLE styles (
    id SERIAL PRIMARY KEY NOT NULL,
    style_name CHAR(100) NOT NULL,
    original_price INTEGER NOT NULL,
    sale_price INTEGER DEFAULT NULL ,
    defaultStyle BOOLEAN DEFAULT 0, 
    product_styles INTEGER REFERENCES products(product_id)
)

CREATE TABLE photos(
    id SERIAL PRIMARY KEY NOT NULL,
    thumbnail_url varchar(100),
    photo_url varchar(100),
    style_id INTEGER REFERENCES styles(id),
)

CREATE TABLE skus(
    id SERIAL PRIMARY KEY NOT NULL,
    quantity INTEGER DEFAULT 0,
    size VARCHAR
    style_id INTEGER REFERENCES styles(id)
)
