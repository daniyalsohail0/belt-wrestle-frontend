const fs = require('fs');
const path = require('path');

// Specify the directory path
const directoryPath = './'; // Change this to your directory path

// Function to get folder names
function getFolderNames(directoryPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
            if (err) {
                reject(err);
                return;
            }
            const folderNames = files
                .filter(file => file.isDirectory())
                .map(folder => folder.name);
            resolve(folderNames);
        });
    });
}

// Get folder names
getFolderNames(directoryPath)
    .then(folderNames => {
        // Convert folder names to JSON format
        const jsonData = JSON.stringify(folderNames, null, 2);

        // Write JSON data to a file
        const jsonFilePath = './folderNames.json'; // Change this to your desired file path
        fs.writeFile(jsonFilePath, jsonData, err => {
            if (err) {
                console.error('Error writing JSON file:', err);
                return;
            }
            console.log('JSON file has been created successfully:', jsonFilePath);
            console.log(jsonFilePath.length);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
