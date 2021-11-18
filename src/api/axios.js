import axios from 'axios';
export const HTTP = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 5000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
})