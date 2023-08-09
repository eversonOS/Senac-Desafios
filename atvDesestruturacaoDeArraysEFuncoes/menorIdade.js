function menorIdade(idade) {
  const msg = idade < 18 ? "menor de idade." : "maior de idade";
  return msg;
}

console.log(menorIdade(18));
