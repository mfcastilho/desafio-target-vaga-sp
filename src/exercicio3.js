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

function validateValueType(data) {
  if (!Array.isArray(data)) {
    return false;
  }

  return true;
}

function findValidateValues(revenues) {
  const validateValues = revenues.filter((f) => f.valor > 0).map((f) => f.valor);

  return validateValues;
}

function calculateSmallestValue(revenues) {
  if (!validateValueType(revenues)) {
    return 'Valor de entrada inválido!';
  }

  const validValues = findValidateValues(revenues);

  if (validValues.length === 0) {
    return 'Não há valores válidos para calcular o menor valor';
  }

  return Math.min(...validValues);
}

function calculateLargestValue(revenues) {
  if (!validateValueType(revenues)) {
    return 'Valor de entrada inválido!';
  }

  const validValues = findValidateValues(revenues);

  if (validValues.length === 0) {
    return 'Não há valores válidos para calcular o maior valor';
  }

  return Math.max(...validValues);
}

function findValuesGreaterThanAverage(revenues) {
  if (!validateValueType(revenues)) {
    return 'Valor de entrada inválido!';
  }

  const validValues = findValidateValues(revenues);

  if (validValues.length === 0) {
    return 'Não há dados válidos para calcular a média';
  }

  const average =
    validValues.reduce((acc, curr) => acc + curr, 0) / validValues.length;

  const daysWithValuesGreaterThanAverage = revenues.filter(
    (f) => f.valor > average
  );

  return `Média: ${average.toFixed(2)}
Tivemos no total ${daysWithValuesGreaterThanAverage.length} dias com valores acima da média.
Estes valores foram: ${daysWithValuesGreaterThanAverage.map(dia => `\n -${dia.valor}`)}
  `;
}

const revenues = [
  {
    dia: 1,
    valor: 22174.1664,
  },
  {
    dia: 2,
    valor: 24537.6698,
  },
  {
    dia: 3,
    valor: 26139.6134,
  },
  {
    dia: 4,
    valor: 0.0,
  },
  {
    dia: 5,
    valor: 0.0,
  },
  {
    dia: 6,
    valor: 26742.6612,
  },
  {
    dia: 7,
    valor: 0.0,
  },
  {
    dia: 8,
    valor: 42889.2258,
  },
  {
    dia: 9,
    valor: 46251.174,
  },
  {
    dia: 10,
    valor: 11191.4722,
  },
  {
    dia: 11,
    valor: 0.0,
  },
  {
    dia: 12,
    valor: 0.0,
  },
  {
    dia: 13,
    valor: 3847.4823,
  },
  {
    dia: 14,
    valor: 373.7838,
  },
  {
    dia: 15,
    valor: 2659.7563,
  },
  {
    dia: 16,
    valor: 48924.2448,
  },
  {
    dia: 17,
    valor: 18419.2614,
  },
  {
    dia: 18,
    valor: 0.0,
  },
  {
    dia: 19,
    valor: 0.0,
  },
  {
    dia: 20,
    valor: 35240.1826,
  },
  {
    dia: 21,
    valor: 43829.1667,
  },
  {
    dia: 22,
    valor: 18235.6852,
  },
  {
    dia: 23,
    valor: 4355.0662,
  },
  {
    dia: 24,
    valor: 13327.1025,
  },
  {
    dia: 25,
    valor: 0.0,
  },
  {
    dia: 26,
    valor: 0.0,
  },
  {
    dia: 27,
    valor: 25681.8318,
  },
  {
    dia: 28,
    valor: 1718.1221,
  },
  {
    dia: 29,
    valor: 13220.495,
  },
  {
    dia: 30,
    valor: 8414.61,
  },
];


console.log(calculateSmallestValue(revenues));
console.log(calculateLargestValue(revenues));
console.log(findValuesGreaterThanAverage(revenues));
