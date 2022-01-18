\c products;
\copy product_overview FROM './data/product.csv' WITH (FORMAT CSV, HEADER);
\copy related_products FROM './data/related.csv' WITH (FORMAT CSV, HEADER);
\copy features FROM './data/features.csv' WITH (FORMAT CSV, HEADER);
\copy styles FROM './data/styles.csv' WITH (FORMAT CSV, NULL 'null', HEADER);
\copy photos FROM './data/photos.csv' WITH (FORMAT CSV, HEADER);
\copy skus FROM './data/skus.csv' WITH (FORMAT CSV, HEADER);