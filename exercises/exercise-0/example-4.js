let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5(num) {
  return num * 5;
});

console.log(result);

// Console.logs the array multiplied by 5 - [ 5, 10, 15, 20, 25 ] - ignores the num = 10
