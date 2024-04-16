const express = require('express');
const router = express.Router();

const { storeVisualisation } = require('../services/visualisationService');

router.post('/timeline', async (req, res) => {
    const util = require('util');
    console.log('Got data: ', util.inspect(req.body, false, 30, true));

    const result = await storeVisualisation('timeline', req.body);

    res.send({
        success: true,
        dbResponse: result,
    });
});

module.exports = router;