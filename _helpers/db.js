const config = require('../config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    // create db if it doesn't already exist
    const { HOST, PORT, USER, PASSWORD, DBNAME, DIALECT } = config.database;
    const connection = await mysql.createConnection({
        "host": HOST,
        "port": PORT,
        "user": USER,
        "password": PASSWORD,
        "database": DBNAME
    });


    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DBNAME}\`;`);

    // connect to db
    const sequelize = new Sequelize(DBNAME, USER, PASSWORD, { host: HOST, dialect: DIALECT, });

    // init models and add them to the exported db object
    db.billData = require('../models/bill.model')(sequelize);

    // sync all models with database
    await sequelize.sync();
}