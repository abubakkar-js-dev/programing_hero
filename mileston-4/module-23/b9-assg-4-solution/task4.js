function password(obj){
    if(obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || obj.birthYear.toString().length !== 4){
        return 'Invalid';
    }


    let capitalizeSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    let passwordString = capitalizeSiteName + "#" + obj.name + "@" + obj.birthYear;

    return passwordString;
}

// testing problem
let sample1 = {name: "kolimuddin", birthYear: 1999, siteName: "google"};

console.log(password(sample1));
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));




