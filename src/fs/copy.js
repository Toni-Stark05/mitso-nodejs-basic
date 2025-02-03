import fs from 'fs';

const copy = async () => {
    const drtPath = './files'
    const copyDrtPath = './files_copy'

    if (fs.existsSync(copyDrtPath)) {
        throw new Error(`FS operation failed`);
    }

    try {
        await fs.mkdirSync(copyDrtPath);

        const files = fs.readdirSync(drtPath);
        for (const file of files) {
            fs.copyFileSync(`${drtPath}/${file}`, `${copyDrtPath}/${file}`);
        }
    } catch (e) {
        console.error(e);
    }
};

await copy();
