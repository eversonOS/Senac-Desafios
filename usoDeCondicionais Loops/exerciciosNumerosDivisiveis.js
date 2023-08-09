function number(num) {
    if (num % 3 === 0) {
        console.log('Fizz');
    }else if (num % 5 === 0){
        console.log('Buzz');
    }else{
        console.log('FizzBuzz');
    }
    return
}

number(10);