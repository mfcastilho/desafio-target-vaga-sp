/*5. **Inversão de String**

   Escreva um programa que inverta os caracteres de uma string.

   **IMPORTANTE:**
   a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
   b) Evite usar funções prontas, como, por exemplo, `reverse`.*/


function reverseSmallString(str) {
  let revsersedStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    revsersedStr += str[i];
  }

  return revsersedStr;
}

function reverseBigString(str) {
  const arrStr = str.split('');

  let left = 0;
  let right = arrStr.length - 1;

  while (left < right) {
    [arrStr[left], arrStr[right]] = [arrStr[right], arrStr[left]];
    left++;
    right--;
  }

  return arrStr.join('');
}
console.log(reverseSmallString('hello')); 
console.log(reverseBigString('hello')); 

const longStr = 'Fla'.repeat(10000) + ' - O MELHOR DO MUNDO - ' + 'Mengo'.repeat(10000);
console.log(reverseBigString(longStr));