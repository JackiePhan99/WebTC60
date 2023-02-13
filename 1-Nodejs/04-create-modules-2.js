const createModules = require("./04-create-modules-1")

console.log("modules create 1");
console.log(createModules);

console.log("module 2");
console.log(module);

const MyDateTime = createModules.getMyDateTime();
const myDirName = createModules.getDirName();
const myAge = createModules.myAge;

console.log(MyDateTime);
console.log(myDirName);
console.log(myAge);