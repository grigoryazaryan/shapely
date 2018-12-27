const storage = require("uxp").storage;
const fs = storage.localFileSystem;

/**
 * Entries in Path
 * @param path
 * @returns {Promise.<Array.<Entry>>}
 */
async function getLocalFiles(path) {
    console.log(Date.now())
    const pluginFolder = await fs.getPluginFolder();
    const imagesFolder = await pluginFolder.getEntry(path);
    console.log(Date.now())
    return imagesFolder.getEntries();

};


module.exports.getLocalFiles = getLocalFiles;