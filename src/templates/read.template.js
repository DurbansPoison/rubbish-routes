const {{modelName}} = require('../models/{{modelName}}');

async function get{{modelName}}ById(id) {
    try {
        const {{modelNameLower}} = await {{modelName}}.findById(id);
        return {{modelNameLower}};
    } catch (error) {
        throw error;
    }
}

module.exports = get{{modelName}}ById;
