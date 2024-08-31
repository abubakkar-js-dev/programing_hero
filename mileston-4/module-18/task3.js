let mark = 90;
let grade;

grade = mark < 60 ? grade = "F":
        mark < 70 ? grade = "D":
        mark < 80 ? grade = "C":
        mark < 90 ? grade = "B":
        mark <= 100 ? grade = "A":
        grade = "not found.";

console.log(`Your Grade is ${grade}`);