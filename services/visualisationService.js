const database = require('../persistence').getDatabase();

const storeVisualisation = async (visualisation) => {
    const result = await database.collection('test_collection').insertOne(visualisation);

    return result;
};

const readVisualisations = async (filter = {}) => {
    const resultCursor = await database.collection('test_collection').find(filter);
    const result = await resultCursor.toArray();

    return result;
};

module.exports = {
    storeVisualisation,
    readVisualisations
};
