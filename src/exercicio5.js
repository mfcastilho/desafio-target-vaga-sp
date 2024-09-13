/*5. **Inversão de String**

   Escreva um programa que inverta os caracteres de uma string.

   **IMPORTANTE:**
   a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
   b) Evite usar funções prontas, como, por exemplo, `reverse`.*/


function reverseString(str) {
  let revsersedStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    revsersedStr += str[i];
  }

  return revsersedStr;
}

console.log(reverseString('Rosa'));
