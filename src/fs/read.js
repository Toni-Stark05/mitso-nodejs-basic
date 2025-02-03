import fs from "fs";

const read = async () => {
    const filePath = 'files/fileToRead.txt'

    if (!fs.existsSync(filePath)) {
        throw new Error(`FS operation failed`);
    }

    try {
        const data = (await fs.readFileSync(filePath)).toString();
        console.log(data);
    } catch (e) {
        console.error(e);
    }
};

await read();
