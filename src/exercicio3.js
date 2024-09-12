/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, 
faça um programa, na linguagem que desejar, que calcule e retorne:

- O menor valor de faturamento ocorrido em um dia do mês;
- O maior valor de faturamento ocorrido em um dia do mês;
- O número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

**IMPORTANTE:**  
a) Usar o JSON ou XML disponível como fonte dos dados do faturamento mensal;  
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. 
Estes dias devem ser ignorados no cálculo da média.
*/

function achaValoresValidos(faturamento) {
  const valoresValidos = faturamento
    .filter((f) => f.valor > 0)
    .map((f) => f.valor);

  return valoresValidos;
}

function calculaMenorValor(faturamento) {
  const valoresValidos = achaValoresValidos(faturamento);
  
  return Math.min(...valoresValidos);
}

function calculaMaiorValor(faturamento) {
  const valoresValidos = achaValoresValidos(faturamento);

  return Math.max(...valoresValidos);
}

function achaValoresMaioresQueMedia(faturamento) {
  const valoresValidos = achaValoresValidos(faturamento);

  const media = valoresValidos.reduce((acc, curr) => acc + curr, 0) / valoresValidos.length;

  const diasComValoresMaioresQueMedia = faturamento.filter(f => f.valor > media);

  return `Média: ${media}
Valores acima da média: ${diasComValoresMaioresQueMedia.map(dia => dia.valor)}
  `;
}


const faturamento = [
  { dia: 1, valor: 1000 },
  { dia: 2, valor: 4000 },
  { dia: 3, valor: 0 },
  { dia: 4, valor: 2000 },
  { dia: 5, valor: -1000 },
  { dia: 6, valor: 0 },
  { dia: 7, valor: 5000 },
  { dia: 8, valor: 3000 },
  { dia: 9, valor: 0 },
];

console.log(calculaMenorValor(faturamento));
console.log(calculaMaiorValor(faturamento));
console.log(achaValoresMaioresQueMedia(faturamento));
