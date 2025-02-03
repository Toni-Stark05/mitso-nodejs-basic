import fs from "fs";

const list = async () => {
    const dirPath = './files'

    if (!fs.existsSync(dirPath)) {
        throw new Error(`FS operation failed`);
    }

    try {
        const files = fs.readdirSync(dirPath);
        console.log(files);
    } catch (e) {
        console.error(e);
    }
};

await list();
