const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

// Function to read and compile a template with error handling
function compileTemplate(templateName) {
    try {
        const templatePath = path.join(__dirname, `../templates/${templateName}.template.js`);
        if (!fs.existsSync(templatePath)) {
            throw new Error(`Template file not found: ${templateName}.template.js`);
        }

        const templateSource = fs.readFileSync(templatePath, 'utf8');
        return handlebars.compile(templateSource);
    } catch (error) {
        throw new Error(`Error compiling template '${templateName}': ${error.message}`);
    }
}

// Function to write the compiled content to a file with error handling
function writeToFile(outputPath, content) {
    try {
        fs.writeFileSync(outputPath, content);
        console.log(`File generated at: ${outputPath}`);
    } catch (error) {
        throw new Error(`Error writing file at ${outputPath}: ${error.message}`);
    }
}

function generateAllCrudOperations(modelName, targetDir) {
    const templateNames = ['create', 'read', 'update', 'delete'];
    let allOperationsContent = '';

    for (const templateName of templateNames) {
        const template = compileTemplate(templateName);
        allOperationsContent += template({ modelName, modelNameLower: modelName.toLowerCase() }) + '\n\n';
    }

    const outputPath = path.join(targetDir, `${modelName.toLowerCase()}Controllers.js`);
    writeToFile(outputPath, allOperationsContent);
}

function generateCrudFiles(operationType, modelName, targetDir) {
    try {
        // Validate input parameters
        if (!operationType || !modelName || !targetDir) {
            throw new Error("Missing required parameters (operationType, modelName, targetDir)");
        }

        // Handle 'CRUD' type to generate all operations in one file
        if (operationType.toLowerCase() === 'crud') {
            generateAllCrudOperations(modelName, targetDir);
        } else {
            // Compile the template for the specified operation
            const template = compileTemplate(operationType);

            // Generate file content using the compiled template
            const content = template({
                modelName,
                modelNameLower: modelName.toLowerCase()
            });

            // Construct the output file path
            const fileName = `${operationType}${modelName.charAt(0).toUpperCase() + modelName.slice(1)}.js`;
            const outputPath = path.join(targetDir, fileName);

            // Write the content to the file
            writeToFile(outputPath, content);
        }
    } catch (error) {
        console.error(`Error generating ${operationType} file for ${modelName}: ${error.message}`);
    }
}

module.exports = generateCrudFiles;
