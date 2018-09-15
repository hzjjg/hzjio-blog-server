const path = require('path');

exports.resolve = (...args) =>{
    return path.join(__dirname, '..', ...args);
}
