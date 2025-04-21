const fs = require('fs');
const path = require('path');

// The main directory where all image folders are stored (safezone)
const baseDir = path.join(__dirname, '/project_cs/safezone');
const manifestFile = path.join(__dirname, '/project_cs/safezone/manifest.json');
const folderManifestFile = path.join(__dirname, '/project_cs/folder-manifest.json');

// Function to recursively get all .jpg files grouped by their folder names
function getJpgFilesGroupedByFolder(dir) {
  const manifest = {};
  const folders = fs.readdirSync(dir);

  folders.forEach(folder => {
    const fullFolderPath = path.join(dir, folder);
    const stat = fs.statSync(fullFolderPath);

    if (stat.isDirectory()) {
      const jpgFiles = fs.readdirSync(fullFolderPath).filter(file =>
        /\.(jpg|png)$/.test(file)
      );

      if (jpgFiles.length > 0) {
        manifest[folder] = jpgFiles;
      }
    }
  });

  return manifest;
}

// Function to get all folder names
function getFolderNames(dir) {
  const folderNames = [];
  const folders = fs.readdirSync(dir);

  folders.forEach(folder => {
    const fullFolderPath = path.join(dir, folder);
    const stat = fs.statSync(fullFolderPath);

    if (stat.isDirectory()) {
      folderNames.push(folder);
    }
  });

  return folderNames;
}

// Generate the image manifest
const jpgFilesByFolder = getJpgFilesGroupedByFolder(baseDir);
fs.writeFileSync(manifestFile, JSON.stringify(jpgFilesByFolder, null, 2));

// Generate the folder manifest
const folderNames = getFolderNames(baseDir);
fs.writeFileSync(folderManifestFile, JSON.stringify({ folders: folderNames }, null, 2));

console.log('manifest.json and folder-manifest.json updated successfully!');