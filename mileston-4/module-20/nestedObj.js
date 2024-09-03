const college = {
    name: "JP govt College",
    class: ["11","12"],
    events: ["science fair", "bijoy dibos", "Language day"],
    unique: {
        color: "Sky",
        result: {
            gpa: 5,
            merit: "Top",
        }
    }
}

// console.log(college.unique.color);
college.unique.result.merit = "Onek Onek Besi pay";
console.log(college.unique.result.merit);

college.events[1] = "16 December";
college.name = college.name.replace("JP","Joypurhat");
delete college.class;
console.log(college);
