#!/usr/bin/env node

const { program } = require('commander');
const { executeCommand } = require('../src/index');

program
    .name("rubbishroutes")
    .version('0.1.0')
    .description('RubbishRoutes: A CRUD generator with a twist');

program
    .command('generate')
    .alias('g')
    .description('Generate CRUD operation files')
    .option('-t, --type <type>', 'Type of CRUD operation (create, read, update, delete)')
    .option('-m, --model <model>', 'Model name for the CRUD operation')
    .option('-p, --path <path>', 'Path where files should be generated')
    .action((options) => {
        executeCommand('generate', options);
    });

program.parse(process.argv);
