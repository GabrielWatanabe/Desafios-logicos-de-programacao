var readlineSync = require('readline-sync');

const num = parseInt(readlineSync.question("Digite um numero: " ));
const x = 3;
const z = 5;
var res = 0;


for (var i = 0; i < num; i++) {
    if (i % x == 0 || i % z == 0)  {
        res += i;
    }
}

console.log("A soma dos multiplos de 3 e 5 de " + num + " é: " + res)

