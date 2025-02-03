import fs from 'fs';

const rename = async () => {
    const filePath = 'files/wrongFilename.txt'
    const newFilePath = 'files/properFilename.md'

    if (fs.existsSync(newFilePath)) {
        throw new Error(`FS operation failed`);
    }

    try {
        await fs.renameSync(filePath, newFilePath);
    } catch (e) {
        console.error(e);
    }
};

await rename();
