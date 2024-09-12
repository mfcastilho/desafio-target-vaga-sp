/*2) Dada a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não à sequência.

**IMPORTANTE:**  
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código.*/

const calculateFibonacciSequence = (n) => {
  if (n === 1 || n === 0) {
    return true;
  }

  let a = 0;
  let b = 1;
  let currentSum = 0;

  while (currentSum < n) {
    currentSum = a + b;
    a = b;
    b = currentSum;
  }
  
  if (currentSum !== n) {
    return `O número ${n} NÂO PERTENCE a sequência de Fibonacci!`;;
  }
  return `O número ${n} PERTENCE a sequência de Fibonacci!`;
}

console.log(calculateFibonacciSequence(34));

module.exports = calculateFibonacciSequence;