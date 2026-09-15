//Create an array of numbers and use map() to double each value

let numbers = [10, 20, 30, 40, 50];

let doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled);
//Use filter() to extract only even numbers from an array

let numb = [10, 15, 20, 25, 30, 35, 40];

let evenNumbers = numb.filter(num => num % 2 === 0);

console.log(evenNumbers);