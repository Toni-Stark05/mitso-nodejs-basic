import fs from "fs";

const write = async () => {
    const writableStream = fs.createWriteStream('./files/fileToWrite.txt', {
        encoding: 'utf8'
    });

    process.stdin.pipe(writableStream);

    writableStream.on('error', (error) => {
        console.error('Ошибка при записи в файл:', error);
    });

    return new Promise((resolve, reject) => {
        writableStream.on('finish', resolve);
        writableStream.on('error', reject);

        process.stdin.on('end', () => {
            writableStream.end();
        });
    });
};

await write();