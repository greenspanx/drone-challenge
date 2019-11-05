// start server independently here to decouple from app.js 
var app = require('./app');
app.listen(4001, function () { return console.log("Api started at http://localhost:4001"); });
