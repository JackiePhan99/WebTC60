const myDateModules = require('./4-create-modules.js');

const date = myDateModules.myDate.split("-").reverse().join("/");
console.log(date);