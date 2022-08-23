const axios = require('axios');

const server = axios.create({
    baseURL: "http://localhost:3001",
});

export default server;