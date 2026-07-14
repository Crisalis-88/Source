
let fetchAbortTimeout = {};
fetchAbortTimeout.signal = AbortSignal.timeout(5000);

export default fetchAbortTimeout;
