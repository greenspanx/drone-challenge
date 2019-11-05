"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}
exports.logErrors = logErrors;
;
function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.status(500).json({ error: 'Something failed!' });
    }
    else {
        next(err);
    }
}
exports.clientErrorHandler = clientErrorHandler;
;
function error404Handler(err, req, res, next) {
    let errMessage = new Error('Path or File Not Found!');
    errMessage.status = 404;
    next(errMessage);
}
exports.error404Handler = error404Handler;
;
function finalErrorHandler(err, req, res, next) {
    res.status(500);
    res.json({ error: err.message });
}
exports.finalErrorHandler = finalErrorHandler;
;
// export default {
// 	logErrors,
// 	clientErrorHandler,
// 	error404Handler,
// 	finalErrorHandler,
// };
//# sourceMappingURL=index.js.map