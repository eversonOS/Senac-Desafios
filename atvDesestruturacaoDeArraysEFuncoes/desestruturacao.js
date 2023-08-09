const pessoa = {
  nome: "Maria",
  idade: 25,
};

function frasePersonalizada({ nome, idade }) {
  return `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
}

const resultado = frasePersonalizada(pessoa);
console.log(resultado);
