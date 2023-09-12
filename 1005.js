var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split("\n");
var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
let average = (a*3.5 + b*7.5) / 11;
console.log("MEDIA = " + average.toFixed(5));