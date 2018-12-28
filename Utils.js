const storage = require("uxp").storage;
const fs = storage.localFileSystem;
const C = require("./Const");

let cache = {};

async function cacheAll() {
    for (let iconsType in C.ICON_TYPE) {

        cache[iconsType] = await module.exports.getLocalFiles(C.ICON_TYPE[iconsType].path);//getIcons(C.ICON_TYPE[iconsType]);

        cache[iconsType].forEach(res => { // adding custom field "iconType" to all entries
            res.iconType = C.ICON_TYPE[iconsType];
        });

    }
}

module.exports = {
    /**
     * Entries in Path
     * @param path
     * @returns {Promise.<Array.<Entry>>}
     */
    getLocalFiles: async function (path) {
        if (!path) path = "./";
        // console.log(Date.now())
        const pluginFolder = await fs.getPluginFolder();
        const imagesFolder = await pluginFolder.getEntry(path);
        // console.log(Date.now())
        return imagesFolder.getEntries();
    },

    // getIcons: async function (type) {
    //     if (!type || type.toLowerCase() == "all") {
    //         return (await this.getLocalFiles(C.ICON_TYPE.material.path))
    //         // .concat(await this.getLocalFiles(C.ICON_TYPE.open_iconic.path))
    //         // .concat(await this.getLocalFiles(C.ICON_TYPE.nova.path))
    //         // .concat(await this.getLocalFiles(C.ICON_TYPE.feather.path));
    //     }
    //
    //     return this.getLocalFiles(type.path);
    // },

    /**
     * Filtered entries
     * @param offset
     * @param limit
     * @param search
     * @param iconsType
     * @returns {Promise<void>}
     */
    loadIcons: async function (offset, limit, search, iconsType) {
        if (!offset) offset = 0;
        // if (cache.length == 0) await cacheAll();
        await cacheAll();

        let results = [];
        if (!iconsType) {
            results = Object.keys(cache).reduce((res, cur) => {
                return res.concat(cache[cur]);
            }, []);
        } else {
            results = cache[iconsType.type];
        }

        if (!!search && search.trim() != "") {
            results = results.filter(entry => entry.name.startsWith(search.trim()));
        }

        let res = results.slice(offset, offset + limit);
        // res.forEach(r => console.log(r.name, r.iconType.type));
        return res;
        // results.slice(limit * PAGE_SIZE, limit * (PAGE_SIZE + 1));
    }
};
