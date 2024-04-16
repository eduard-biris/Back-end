require('dotenv').config();

const { connectDB } = require('./persistence');
const { startServer } = require('./server');

async function start() {
    await connectDB();
    startServer();
}

start();