// Use the spread operator to merge two objects and clone an array
let personalInfo = {
    name: "Vignesh",
    age: 21
};

let academicInfo = {
    department: "AI & ML",
    score: 92
};

let combinedStudent = {
    ...personalInfo,
    ...academicInfo
};

console.log(combinedStudent);

let numbers = [10, 20, 30, 40];

let clonedNumbers = [...numbers];

console.log(clonedNumbers);

//Build a Student Grade Calculator: array of student objects (name, score), calculate grade (A/B/C/F), print results using forEach()

let studentList = [
    {name: "Vignesh", score: 92},
    {name: "Arun", score: 78},
    {name: "Priya", score: 65},
    {name: "Karthik", score: 45}
];

function calculateGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 75) {
        return "B";
    } else if (score >= 50) {
        return "C";
    } else {
        return "F";
    }
}

studentList.forEach(({name, score}) => {
    let grade = calculateGrade(score);

    console.log(`${name} - Score: ${score} - Grade: ${grade}`);
});