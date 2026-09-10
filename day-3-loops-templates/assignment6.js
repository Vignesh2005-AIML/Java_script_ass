let secretnum = Math.floor(Math.random() * 10) + 1;
let guess=Number(prompt("ENTER THE NUMBER FROM 1 TO 100:"))

while(guess!=secretnum){
    if (secretnum > guess){
        console.log((`${guess} no  your guess too low`));
        
    }
    else if (secretnum< guess){
         console.log((`${guess} no guess too high`));
    }

    guess=Number(prompt("try again "))
    }    
    console.log(`${guess} is right congratulation`)