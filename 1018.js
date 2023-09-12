//Read data
var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split("\n");

//Main code
let money = lines.shift();
let bankNotes = [100, 50, 20, 10, 5, 2, 1];
console.log(money);
for (let i=0; i < bankNotes.length; i++){
    let cont = 0;
    while (money >= bankNotes[i]){
        cont++;
        money -= bankNotes[i];
    }
    console.log(cont + " notas de R$ " + bankNotes[i] + ".00");
}
