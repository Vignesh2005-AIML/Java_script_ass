//Write a function that calculates the average of a list of numbers
function average(num){
    let sum=0
    total=num.length
    for(i=0;i<total;i++){
        sum+=num[i]
    }
    return sum/total
}
console.log(average([10,20,30,40,50]))

//Write a function with default parameters that greets a user
function greet(name = `User`) {
    return `Hello ${name}!`;
}

console.log(greet(`Vignesh`));
console.log(greet());