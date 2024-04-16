const { MongoClient } = require("mongodb");

const CONNECTION_STRING = 'mongodb://localhost:27017';

let currentDB = null;

async function connectDB() {
    try {
        const client = new MongoClient(CONNECTION_STRING);

        await client.connect();
        console.log('Successfully connected to DB!');

        const db = client.db('test_DB');
        currentDB = db;
    } catch (err) {
        console.log(err.stack);
        throw err;
    }
}

function getDatabase() {
    if(!currentDB) {
        throw new Error('Database not connected!');
    }

    return currentDB;
}

module.exports = {
    connectDB,
    getDatabase
};
