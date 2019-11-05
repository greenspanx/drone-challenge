"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const fs_1 = __importDefault(require("fs"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const utils_1 = require("./utils");
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: false }));
// parse application/json
app.use(body_parser_1.default.json());
// log access data 
app.use(morgan_1.default(':date[clf] :remote-addr, :referrer, :url :response-time ms', {
    stream: fs_1.default.createWriteStream(path_1.default.join(__dirname, 'log/access.log'), { flags: 'a' })
}));
app.use(cors_1.default());
app.get('/', (req, res, next) => {
    res.json({ foo: 'bar' });
});
// part 1 and part 2
// app.post('/api/v1/drone', Controller);
// Error handler here
// Error handler from './utils'
app.use(utils_1.logErrors);
app.use(utils_1.clientErrorHandler);
app.use(utils_1.error404Handler);
app.use(utils_1.finalErrorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map