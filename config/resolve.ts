import { join } from 'path';

export function resolve(...args) {
    return join(__dirname, '..', ...args);
}
