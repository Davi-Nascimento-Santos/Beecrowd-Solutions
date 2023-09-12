var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");
let r = lines.shift();
let area = 3.14159 * (r*r);
console.log("A=" + area.toFixed(4));