// Rewrite two earlier functions (Day 2/3) as arrow functions
const add = (a, b) => {
    return a + b;
};

console.log(`Result = ${add(2, 3)}`);

const even=(a)=>{
    if (a%2==0){
        return "its even"
    } else{
        return "its odd"
    }
}

console.log(even(3))

// Explore scope: create a variable inside and outside a function block and log both
let outside = `I am outside the function`;

function Scope() {
    let inside = `I am inside the function`;

    console.log(`${outside}`);
    console.log(`${inside}`);
}

Scope();