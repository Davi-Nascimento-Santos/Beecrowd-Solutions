//Read data
var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split("\n");

//Main code
function caesarCipher(phrase, num){
    let string = "";
    for (let i=0; i < phrase.length; i++){
        let posi = phrase.charCodeAt(i);
        if (posi < 65 || posi > 90){
            posi = posi;
        }else if ((posi - num) >= 65){
            posi-=num;
        }else{
            let times = 90 - (num+64 - posi);
            posi = times;
        }
        string+= String.fromCharCode(posi);
    }
    return string;
}
let times = parseInt(lines.shift());
for (let i=0; i < times; i++){
    let phrase = lines.shift();
    let shift = parseInt(lines.shift());
    console.log(caesarCipher(phrase, shift));
}