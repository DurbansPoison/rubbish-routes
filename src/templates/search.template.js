const {{modelName}} = require('../models/{{modelName}}');

async function search{{modelName}}s(searchTerm) {
    try {
        const results = await {{modelName}}.find({ $text: { $search: searchTerm } });
        return results;
    } catch (error) {
        throw error;
    }
}

module.exports = search{{modelName}}s;
