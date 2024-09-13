/*4. **Faturamento por Estado**

   Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

   - SP – R$67.836,43
   - RJ – R$36.678,66
   - MG – R$29.229,88
   - ES – R$27.165,48
   - Outros – R$19.849,53

   Escreva um programa na linguagem que desejar onde calcule o percentual de representação 
   que cada estado teve dentro do valor total mensal da distribuidora.*/



function calculaPercentualPorEstado(faturamentos) {
  let total = Object.values(faturamentos).reduce((acc, curr) => acc + curr, 0);
  
  const porcentagens = {};
  
  for (const key in faturamentos) {
    porcentagens[key] = {valor: faturamentos[key], percentual: Number(((faturamentos[key] / total) * 100).toFixed(2))};
  }
  
  return porcentagens;
}

const faturamentos = {
  'SP': 67836.43,
  'RJ': 36678.66,
  'MG': 29229.88,
  'ES': 27165.48,
  'Outros': 19849.53,
}

console.log(calculaPercentualPorEstado(faturamentos));
