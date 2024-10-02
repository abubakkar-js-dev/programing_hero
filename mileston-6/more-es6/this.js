class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}

const kodom = new Person('Kodom Ali',22);
console.log(kodom);
kodom.sleep();

const rahim = new Person('Rahim Babu',21);
rahim.sleep();



const lazy = kodom.sleep;