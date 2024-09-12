/*1) Observe o trecho de código abaixo:

```c
int INDICE = 13, SOMA = 0, K = 0;
enquanto K < INDICE faça {
  K = K + 1;
  SOMA = SOMA + K;
}
imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?*/

const INDICE = 13;
let soma = 0;
let k = 0;

while (k < INDICE) {
  k = k + 1;
  soma = soma + k;
}

console.log(`A soma será ${soma}`);

//O RESULTADO SERÁ 91