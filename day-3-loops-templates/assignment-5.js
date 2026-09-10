//Write a loop that prints numbers 1-20 and marks multiples of 3 as Fizz
for(i=1;i<=20;i++){
    if(i%3==0){
        console.log("FIZZ")
        continue
    }
    console.log(i)
}

//Print a multiplication table for a given number using nested loops
let table=5
for(i=1;i<=10;i++){
    console.log(`${table} x ${i}= ${table*i}`)
}

for(i=1;i<=5;i++){
    for(j=1;j<=10;j++){
        console.log(`${i} x ${j}= ${j*i}`)
    }
}