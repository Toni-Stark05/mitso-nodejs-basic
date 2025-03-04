import { Worker } from 'worker_threads';


const performCalculations = async () => {
    const workers = [];
    const results = [];

    const workerPromises = [];

    for (let i = 0; i < 8; i++) {
        const worker = new Worker('./worker.js');
        workers.push(worker);

        const numberToSend = 10 + i;

        const promise = new Promise((resolve) => {
            worker.on('message', (result) => {
                resolve(result);
            });
            worker.on('error', () => {
                resolve({
                    status: 'error',
                    data: null
                });
            });
        });

        workerPromises.push(promise);
        worker.postMessage(numberToSend);
    }

    try {
        const workerResults = await Promise.all(workerPromises);
        results.push(...workerResults);

        console.log(results);

        workers.forEach(worker => worker.terminate());

        return results;
    } catch (error) {
        console.error('Error in calculations:', error);
        return [];
    }
};

performCalculations();