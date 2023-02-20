const myDateModules = require('./4-create-modules-1.js');

const date = myDateModules.myDate.split("-").reverse().join("/");
console.log(date);