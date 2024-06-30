import { randomBytes } from 'crypto';

const jwtSecret = randomBytes(32).toString('base64');

console.log(jwtSecret);
