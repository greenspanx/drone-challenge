function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
};

function clientErrorHandler (err, req, res, next) {
  if (req.xhr) {
    res.status(500).json({ error: 'Something failed!' })
  } else {
    next(err)
  }
};

function error404Handler (err, req, res, next) {
    let errMessage = new Error('Path or File Not Found!');
    errMessage.status = 404;
    next(errMessage);
};

function finalErrorHandler (err, req, res, next) {
  res.status(500)
  res.json({ error: err.message })
};

module.exports = {
	logErrors,
	clientErrorHandler,
	error404Handler,
	finalErrorHandler,
};
