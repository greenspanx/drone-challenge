// start server independently here to decouple from app.js 

const app = require('./app');

app.listen(4001, () => console.log(`Api started at http://localhost:4001`));
