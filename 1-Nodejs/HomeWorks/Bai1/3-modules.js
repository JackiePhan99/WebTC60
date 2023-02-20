const jsonData = require('/person.json');
const querystring = require('node:querystring');
const person = querystring.stringify(jsonData);

console.log(person);