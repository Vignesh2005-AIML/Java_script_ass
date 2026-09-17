let elementid=document.getElementById("head")
console.log(elementid)

let para= document.querySelector(".paragraph")
console.log(para)

let paragraphs=document.querySelectorAll(".paragraph")
console.log(paragraphs)

let heading = document.getElementById("head");

heading.textContent = "Welcome to My DOM Practice!";
console.log(heading)

let button=document.getElementById("quote-bt")
let quote=document.getElementById("quote")

button.addEventListener('click',function(){
    quote.textContent="Success is the sum of small efforts repeated every day."
})