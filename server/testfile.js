const pool = require('../db/index.js');

pool.connect()
.then(client => {
    return client.query('SELECT * FROM product_overview LIMIT 10')
    .then(res => {
        console.log(client.query)
        client.release();
        return (page, count);
    })
    .catch(err => {
        client.release();
        return err.stack;
    })
})
.catch(err => {
    console.log("Connection failed with error message: " + err)
    process.exit(-1)
}
);