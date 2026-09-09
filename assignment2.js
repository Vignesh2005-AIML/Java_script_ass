// CALCULATOR
//NOTE:THIS PROGRAM WILL ONLY WORK IN BROWSER CONSOLE
// let call=prompt("what are you going to calculate type [add,sub,mul,div] ")
// let a=Number(prompt("enter a number A"))
// let b=Number(prompt("enter a number b"))
// if (call=='add'){
//     console.log(a+b)
// }else if(call=='sub'){
//     console.log(a-b)
// }else if(call=='mul'){
//     console.log(a*b)
// }else if(call=='div'){
//     console.log(a/b)
// }
// else{
//     console.log("invalid ")
// }

num='add'
let a = 10;
let b=20;
if (num=='add'){
    console.log(a+b)
}else if(num=='sub'){
    console.log(a-b)
}else if(num=='mul'){
    console.log(a*b)
}else if(num=='div'){
    console.log(a/b)
}
else{
    console.log("invalid ")
}

//Rewrite the grading script using a switch statement

let marks=70;

switch(true){
    case marks>=90:
        console.log('GRADE A')
        break
    case marks>=75:
        console.log("GRADE B")
        break
    case marks>=50:
        console.log("GRADE C")
        break
    default:
        console.log("GRADE D")
}