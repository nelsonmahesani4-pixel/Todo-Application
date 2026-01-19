var obj2 = {}

obj2["userName"] = "NELSON";
obj2["fullName"] = "NELSON Mahesani";
console.table(obj2);

var uname ;
uname="Nelson";
var age = 20;
    age=20;

obj3 = {
    uname:"Nelson",
    age:20,
    speed : () => {
      return console.log(`my name is ${this.uname} and my age is ${this.age}`);
    },
};
obj3.speed();
// console.log(obj3.speed());

// arrow function does not bind its own this
// regular function binds its own this  
 

var funct = (a,b) => a + b 
function sum(a,b){
    return a + b
}
console.log(funct(10,3));


var obj4 = {

}

function student(name,age,rollNo){
    this.name = name;
    this.age = age;
    this.rollNo = rollNo;
    this.id = 150;
}
var student1 = new student("Nelson",20,101);
console.log(student1);
console.log(student1.id);

var obj6 = {
    name:"Nelson",
    age:20,
    rollNo:101,
    // id:150
};
obj6.funct = function(){
    return this.name + " " + this.age + " " + this.rollNo;
}
console.log(obj6.funct());