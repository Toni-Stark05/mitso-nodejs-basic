import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    const readStream = fs.createReadStream('archive.gz');
    const writeStream = fs.createWriteStream('fileToCompress.txt');
    const gunzip = zlib.createGunzip();

    readStream
        .pipe(gunzip)
        .pipe(writeStream);

    readStream.on('error', (error) => {
        console.error('Ошибка чтения архива:', error);
    });

    gunzip.on('error', (error) => {
        console.error('Ошибка распаковки:', error);
    });

    writeStream.on('error', (error) => {
        console.error('Ошибка записи файла:', error);
    });

   return new Promise((resolve, reject) => {
        writeStream.on('finish', () => {
            resolve();
        });
        writeStream.on('error', reject);
    });
};

await decompress();