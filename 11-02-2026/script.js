// print even numbers from the array
var arr = [1,2,3,4,5,6,7];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}
// Write a program in which user can print userName and age from object using method  (userbio())
var obj = {
    uName : "ali",
    age : 30,
    userbio : function() {
       return "My name is " + this.uName + " and I am " + this.age + " years old.";
    }
}
console.log(obj.userbio());
// now create a li 
var todoList = document.getElementById("myList");

var li =document.createElement("li");
  li.textContent = "todoList Item";
  console.log("li", li); 
  todoList.appendChild(li);
// now store data in local storage and print it in console
function saveData(todoList) {
    // var todoData.push(value)
    var todoData = JSON.parse(localStorage.getItem("todoList")) || [];
    todoData.push(todoList);
    localStorage.setItem("todoList", JSON.stringify(todoData));
    console.log("Saved data:", todoData);
}
saveData(todoList);
saveData(todoInput.value);
// now print table of 5 in reverse order
for (var i = 10; i >=1; i--) {
    console.log(i * 5);
}

// callback function example
function test(callback){
   setTimeout(() => {
     console.log("This is a test function.");
   }, 2000);
    callback();
}
function callbackFunction(){
    console.log("This is a callback function.");
}
test(callbackFunction);
// function fetchData(handleData){
//     fetch('https://dummyjson.com/products')
//     .then(res => res.json()
//     .then(data => handleData(data))
// )
// }
// function handleData(data){
//     console.log("Fetched data:", data);
// }
// fetchData(handleData);

var arr =[1,2,3,4,5,6,7];       
arr.forEach(callback)
function callback(value){
    console.log(value + 2)
}


// call hell---nested
function funct1(callback){
    callback(funct1)
    console.log("This is function 1");
}
function funct2(callback){
    callback(funct1)
    console.log("This is function 2");
}
function funct3(callback){
    callback(funct1)
    console.log("This is function 3");
}

funct1(()=>{
    funct2(()=>{
        funct3(()=>{
            console.log("All functions executed");
        })  
    })
})

// when we use callback function--> simple API fetch 
// when we use promises function--> when code is nested and compex


// synchronous and asynchronous
console.log("This is synchronous code.");
setTimeout(()=>{
    console.log("This is asynchronous code.2"); 
}, 2000);
// asynchronous --> don't stop any  other functions it render all function then itself
// synchronous --> stop other functions until it is executed

 
console.log("This is synchronous code.");
console.log("This is synchronous code.");

function fetchData(handleData){
    fetch('https://dummyjson.com/products')
    .then(res => res.json()
    .then(data => handleData(data.products))    
)
}
function handleData(data){
    console.log("Fetched data:", data);
}
fetchData(handleData);