
// Create a student object with nested address details; access and print with dot and bracket notation
// let student={
//     name:"vignesh",
//     class:'cse',
//     year:4,
//     address:{
//         state:"Tamil Nadu",
//         city:'chennai',
//     }
// }

// console.log(student.name)//dot
// console.log(student.address.state)

// console.log(student["name"])//bracket
// console.log(student["address"]["state"])

//Loop through an object using Object.keys() and print each property

let student={
    name:"vignesh",
    class:'cse',
    year:4,
}

Object.keys(student).forEach(function(name){
  
    console.log(name,':',student[name])
});

//Use destructuring to extract specific fields from an array of student objects

let students = [
    {name: "Vignesh", score: 92},
    {name: "Arun", score: 78},
    {name: "Priya", score: 65}
];

// Destructuring
students.forEach(({name, score}) => {
    console.log(`${name} scored ${score}`);
});

let [s1,s2,s3]=students
console.log(s1)

let [{name: name1, score: score1}, {name: name2, score: score2}] = students;

console.log(name1);
console.log(score1);
