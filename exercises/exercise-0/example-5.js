let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5() {
  return num * 5;
});

console.log(result);

// Console.logs 10 * 5 - [ 50, 50, 50, 50, 50 ] - ignores the numbers in the array
