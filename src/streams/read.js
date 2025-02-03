import fs from "fs";

const read = async () => {
    const readableStream = fs.createReadStream('./files/fileToRead.txt', {
        encoding: 'utf8'
    });

    readableStream.pipe(process.stdout);

    readableStream.on('error', (error) => {
        console.error('Ошибка при чтении файла:', error);
    });

    return new Promise((resolve, reject) => {
        readableStream.on('end', resolve);
        readableStream.on('error', reject);
    });
};

await read();