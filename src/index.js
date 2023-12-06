const generateCrudFiles = require('./commands/generate');

function executeCommand(command, options) {
    switch (command) {
        case 'generate':
            generateCrudFiles(options.type, options.model, options.path);
            break;
        default:
            console.log('Command not recognized. Use "rubbishroutes --help" for a list of commands.');
    }
}

module.exports = {
    executeCommand,
};
