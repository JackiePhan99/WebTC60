/* . global object
* - global - moi noi deu co the truy cap dc
* - ko can khai bao, ko can import, ko can required van su dung dc
*/

console.log("dirname:", __dirname);

console.log("filename:", __filename);

function hello() {
	console.log("hello");
};

setTimeout(hello, 2000);

setInterval(hello, 1000);