const authenticationMiddleware = function (req, res, next) {
	const userName = req.body.username;
	const password = req.body.password;

	if (userName === 'admin' && password === 'admin') {
		next();
	} else {
		res.status(401).send('Username or password incorrect !');
	}
}

module.exports = authenticationMiddleware;