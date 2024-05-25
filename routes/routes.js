const express = require('express');
const router = express.Router();

const { storeVisualisation, readVisualisations } = require('../services/visualisationService');

router.get('/visualisations', async (req, res) => {
    const filter = req.body?.filter ?? {};

    const result = await readVisualisations(filter);

   res.send({
    visualisations: result
   });
});

router.post('/visualization', async (req, res) => {
    const result = await storeVisualisation(req.body);
    res.send(result);
});

module.exports = router;