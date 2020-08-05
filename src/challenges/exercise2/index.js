const vetor = [5, 3, 2, 4, 7, 1, 0, 6]
const num = 8
var a, b, aux;

//laço de repetição decrescente
for (a = num - 1; a > 0; a--) {
    for (b = 0; b < a; b++) {
        if (vetor[b] > vetor[b + 1]) {
            aux = vetor[b];
            vetor[b] = vetor[b + 1];
            vetor[b + 1] = aux;
            console.log(aux, vetor[b], vetor[b + 1])
        }
    }
}

