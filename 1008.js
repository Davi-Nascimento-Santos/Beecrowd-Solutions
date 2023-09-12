//A function for calculate the salary of the employee's
function salary(hours, salaryForHour){
    return hours * salaryForHour;
}

var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split("\n");
let employees = parseInt(lines.shift());
let hours = parseInt(lines.shift());
let salaryForHour = parseFloat(lines.shift());
console.log("NUMBER = " + employees);
console.log("SALARY = U$ " + salary(hours, salaryForHour).toFixed(2) + "\n");