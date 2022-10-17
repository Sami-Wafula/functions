function FizzBuzz(num) {
    if (num <= 100) {
      if (num % 3 === 0 && num % 5 === 0) {
            console.log("FizzBuzz");
      } else if (num % 5 === 0) {
        console.log("Buzz");
      } else if (num % 3 === 0) {
        console.log("Fizz");
      } else {
        console.log(num);
      }
  
      FizzBuzz(num + 1);
    }
  }
  
  FizzBuzz(1);