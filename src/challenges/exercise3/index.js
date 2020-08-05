var readlineSync = require('readline-sync');

const num = parseInt(readlineSync.question("Digite um numero: " ));
var fatorial = 1;
var explicaFator = '';

for (var x = 1; x <= num; x++)
{
    fatorial = fatorial * x;
    if (explicaFator !== '') {
      explicaFator += 'x';
    }
    explicaFator += x;
    
}
console.log(num + "! = " + explicaFator + " = " + fatorial);

