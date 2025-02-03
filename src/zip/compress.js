import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    const readStream = fs.createReadStream('./files/fileToCompress.txt');
    const writeStream = fs.createWriteStream('archive.gz');
    const gzip = zlib.createGzip();

    readStream
        .pipe(gzip)
        .pipe(writeStream);

    readStream.on('error', (error) => {
        console.error('Ошибка чтения файла:', error);
    });

    gzip.on('error', (error) => {
        console.error('Ошибка сжатия:', error);
    });

    writeStream.on('error', (error) => {
        console.error('Ошибка записи:', error);
    });

    return new Promise((resolve, reject) => {
        writeStream.on('finish', () => {
            resolve();
        });
        writeStream.on('error', reject);
    });
};

await compress();