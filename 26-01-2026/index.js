console.log("End of the program");
document.createElement("h1");
document.createTextNode("Hello World");


function main(fname,Callback){
    console.log(fname);
    Callback();

}

function innerFunction(){
    console.log("Mahesani");
}
main("Nelson", innerFunction);

function calculate(a,b, Callback){
   return  Callback(a,b);
}

function sum(p,q){
    return p+q;
}
function subTract(p,q){
    return p-q;
}
function multiPly(p,q){
    return p*q;
}

calculate(5,10, sum);
calculate(5,10, subTract);
calculate(5,10, multiPly);
console.log(calculate(5,10, sum));
console.log(calculate(5,10,subTract));
console.log(calculate(5,10,multiPly,));


var arr = [1,2,3,4,5,];

var mapArr = arr.map(function(number){
    return number * 3 + 1;
});

console.log(mapArr);

// fetch("https://dummyjson.com/products")
//     .then(response => response.json())
//     .then(data => console.log(data));


// Reduce function
var numbers = [1, 2, 3, 4, 5];
var toTal = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,);

console.log(toTal);

var find = numbers.find((number) => number%2 === 0 );
console.log(find);

var some = numbers.some((number) => number >= 4 );
console.log(some);