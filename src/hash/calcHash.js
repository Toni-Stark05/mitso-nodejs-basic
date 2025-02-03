import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

const calculateHash = async () => {
    try {
        const fileContent = await readFile('./files/fileToCalculateHashFor.txt');

        const hash = createHash('sha256')
            .update(fileContent)
            .digest('hex');

        console.log(hash);
    } catch (e) {
        console.error(e);
    }
};

await calculateHash();
