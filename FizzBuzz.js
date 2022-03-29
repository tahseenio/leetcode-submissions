function FizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let f = i % 3 === 0;
    let b = i % 5 === 0;
    if (f && b) {
      console.log('FizzBuzz');
    } else if (b) {
      console.log('Buzz');
    } else if (f) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
}

FizzBuzz();
