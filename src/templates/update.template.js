const {{modelName}} = require('../models/{{modelName}}');

async function update{{modelName}}(id, updateData) {
    try {
        const updated{{modelName}} = await {{modelName}}.findByIdAndUpdate(id, updateData, { new: true });
        return updated{{modelName}};
    } catch (error) {
        throw error;
    }
}

module.exports = update{{modelName}};
