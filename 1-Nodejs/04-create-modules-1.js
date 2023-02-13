/*
* co 2 cach tao 1 modules
* - su dung modules.exports
* - exports.
*/

// cach 1
module.exports.getMyDateTime = function () {
	return Date();
}

exports.getDirName = function () {
	return __dirname;
}

// export variale
const MY_AGE = 23;
exports.myAge = MY_AGE;

