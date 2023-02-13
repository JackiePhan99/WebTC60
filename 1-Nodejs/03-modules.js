/* 
* trong node js co 3 loai modules
* - core module (modules cua nodejs build)
* - local module (modules cura project - cac ban tao)
* - third party modules (modules do ben t3 cho)
*/

//build modules
const path = require("path");
console.log(path.sep);

const os = require("os");
const user = os.userInfo();
console.log(user);