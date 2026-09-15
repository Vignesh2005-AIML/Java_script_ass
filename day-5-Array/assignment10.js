//Use reduce() to calculate the sum and average of an array of numbers

// let numbers = [10, 20, 30, 40, 50];

// let sum = numbers.reduce((total, num) => {
//     return total + num;
// }, 0);

// console.log(sum);

// let numbers = [10, 20, 30, 40, 50];

// let sum = numbers.reduce((total, num) => total + num, 0);

// let average = sum / numbers.length;

// console.log(`Sum = ${sum}`);
// console.log(`Average = ${average}`);

//Use find() to locate the first number greater than 50 in an array

let numbers = [20, 35, 45, 60, 75, 90];

let result = numbers.find(num => num > 50);

console.log(result);