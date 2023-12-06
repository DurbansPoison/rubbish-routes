const {{modelName}} = require('../models/{{modelName}}');

async function list{{modelName}}s({ filter, pagination }) {
    try {
        const query = {{modelName}}.find(filter);
        // Add pagination logic here if necessary
        const {{modelNameLower}}s = await query.exec();
        return {{modelNameLower}}s;
    } catch (error) {
        throw error;
    }
}

module.exports = list{{modelName}}s;
