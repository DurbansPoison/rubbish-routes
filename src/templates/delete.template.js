const {{modelName}} = require('../models/{{modelName}}');

async function delete{{modelName}}(id) {
    try {
        await {{modelName}}.findByIdAndDelete(id);
        return { message: '{{modelName}} successfully deleted' };
    } catch (error) {
        throw error;
    }
}

module.exports = delete{{modelName}};
