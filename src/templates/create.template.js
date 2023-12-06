const {{modelName}} = require('../models/{{modelName}}');

async function create{{modelName}}(data) {
    try {
        const new{{modelName}} = new {{modelName}}(data);
        await new{{modelName}}.save();
        return new{{modelName}};
    } catch (error) {
        throw error;
    }
}

module.exports = create{{modelName}};
