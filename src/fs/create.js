import fs from 'fs';

const create = async () => {
    const context = 'I am fresh and young'
    const filePath = 'files/fresh.txt'

    try {
        if (fs.existsSync(filePath)) {
            throw new Error(`The file exists, path: ${filePath}`);
        }
        await fs.writeFileSync(filePath, context)
    } catch (e) {
        console.error(e);
    }
};

await create();
