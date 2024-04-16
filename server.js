const express = require('express');
const bodyParser = require('body-parser');

function startServer() {
    const app = express();
    const port = 8000;

    app.use(bodyParser.json())

    const routes = require('./routes/routes');

    app.use('/', routes);

    app.listen(port, () => {
        console.log(`Back-end listening on port ${port}`)
    });
}

module.exports = {
    startServer,
};