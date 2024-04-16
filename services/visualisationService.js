const database = require('../persistence').getDatabase();

const storeVisualisation = async (type, visualisationData) => {
    const result = await database.collection('test_collection').insertOne({
        type,
        ...visualisationData,
    });

    return result;
};

module.exports = {
    storeVisualisation,
};
