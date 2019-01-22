import * as path from 'path';

const resolve = (...args) => {
    return path.join(__dirname, '..', ...args);
};

export default resolve;