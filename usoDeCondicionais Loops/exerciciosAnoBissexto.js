function anoBissexto(ano) {
if (ano % 4 === 0 && ano % 400 === 0){
    console.log('O ano é Bissexto!');
}else if (ano % 4 && ano!= 0){
    console.log('O ano é Bissexto!');
}
else{

    ano = false
    console.log('O ano não é Bissexto!');
}
}
anoBissexto(2103);