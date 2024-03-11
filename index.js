function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
}
function countCharacters(str) {
    //i can also use a loop the iterates in each character of the string and put a counter but this is better and it wasn't mentioned what method to use :)
    return str.length;
}
function capitalizeWords(sentence) {
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}


function findMinMax(numbers) {
    let max = numbers[0];
    let min = numbers[0];
    for (let number of numbers) {
      if (number > max) {
        max = number;
      }
      if (number < min) {
        min = number;
      }
    }
    return {max, min};
}
function sumArray(numbers) {
    //again, i can  use a loop and count with it, but using .reduce is more efficent :)
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, );
}
function filterArray(array, condition) {
    //the condition can be an external function or can be an arrow one just like i did with the previous ones
    return array.filter(condition);
}
function factorial(number) {
    //recursive function are probably a better approach but unfortunately we didn't study them yet
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}
function isPrime(number) {
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
}
function fibonacci(n) {
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
      const nextTerm = a + b;
      a = b;
      b = nextTerm;
    }
    return b;
  }