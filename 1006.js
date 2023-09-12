var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split("\n");
let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift()); 
let average = (a*2 + b*3 + c*5) / 10;
console.log("MEDIA = " + average.toFixed(1));