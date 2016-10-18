const createServer = require('./server.js')
const port = (process.env.PORT || 8080)

const app = createServer().listen(port);

console.log(`Listening at http://localhost:${port}`);