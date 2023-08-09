const dobrarNumeros = (array) => {
  const novoArray = [];
  array.forEach((numero) => {
    novoArray.push(numero * 2);
  });
  return novoArray;
};

console.log(dobrarNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
