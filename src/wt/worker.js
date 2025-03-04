import { parentPort } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

parentPort.on('message', (n) => {
    try {
        const result = nthFibonacci(n);
        sendResult(result);
    } catch (error) {
        sendResult(null, error);
    }
});

const sendResult = (result, error = null) => {
    parentPort.postMessage({
        status: error ? 'error' : 'resolved',
        data: error ? null : result
    });
};