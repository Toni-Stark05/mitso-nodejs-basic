import fs from "fs";

const remove = async () => {
    const filePath = 'files/fileToRemove.txt'

    if (!fs.existsSync(filePath)) {
        throw new Error(`FS operation failed`);
    }

    try {
        await fs.unlinkSync(filePath);
    } catch (e) {
        console.error(`FS operation failed`);
    }
};

await remove();
