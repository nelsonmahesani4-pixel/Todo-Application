// // print even numbers from the array
// var arr = [1,2,3,4,5,6,7];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }
// // Write a program in which user can print userName and age from object using method  (userbio())
// var obj = {
//     uName : "ali",
//     age : 30,
//     userbio : function() {
//        return "My name is " + this.uName + " and I am " + this.age + " years old.";
//     }
// }
// console.log(obj.userbio());
// // now create a li 
// var todoList = document.getElementById("myList");

// var li =document.createElement("li");
//   li.textContent = "todoList Item";
//   console.log("li", li); 
//   todoList.appendChild(li);
// // now store data in local storage and print it in console
// function saveData(todoList) {
//     // var todoData.push(value)
//     var todoData = JSON.parse(localStorage.getItem("todoList")) || [];
//     todoData.push(todoList);
//     localStorage.setItem("todoList", JSON.stringify(todoData));
//     console.log("Saved data:", todoData);
// }
// saveData(todoList);
// saveData(todoInput.value);
// // now print table of 5 in reverse order
// for (var i = 10; i >=1; i--) {
//     console.log(i * 5);
// }

// // callback function example
// function test(callback){
//    setTimeout(() => {
//      console.log("This is a test function.");
//    }, 2000);
//     callback();
// }
// function callbackFunction(){
//     console.log("This is a callback function.");
// }
// test(callbackFunction);
// // function fetchData(handleData){
// //     fetch('https://dummyjson.com/products')
// //     .then(res => res.json()
// //     .then(data => handleData(data))
// // )
// // }
// // function handleData(data){
// //     console.log("Fetched data:", data);
// // }
// // fetchData(handleData);

// var arr =[1,2,3,4,5,6,7];       
// arr.forEach(callback)
// function callback(value){
//     console.log(value + 2)
// }


// // call hell---nested
// function funct1(callback){
//     callback(funct1)
//     console.log("This is function 1");
// }
// function funct2(callback){
//     callback(funct1)
//     console.log("This is function 2");
// }
// function funct3(callback){
//     callback(funct1)
//     console.log("This is function 3");
// }

// funct1(()=>{
//     funct2(()=>{
//         funct3(()=>{
//             console.log("All functions executed");
//         })  
//     })
// })

// // when we use callback function--> simple API fetch 
// // when we use promises function--> when code is nested and compex


// // synchronous and asynchronous
// console.log("This is synchronous code.");
// setTimeout(()=>{
//     console.log("This is asynchronous code.2"); 
// }, 2000);
// // asynchronous --> don't stop any  other functions it render all function then itself
// // synchronous --> stop other functions until it is executed

 
// console.log("This is synchronous code.");
// console.log("This is synchronous code.");

// function fetchData(handleData){
//     fetch('https://dummyjson.com/products')
//     .then(res => res.json()
//     .then(data => handleData(data.products))    
// )
// }
// function handleData(data){
//     console.log("Fetched data:", data);
// }
// fetchData(handleData);


// promise

// const promise = new Promise((resolve, reject) => {
//     console.log("This is a promise.");
//     // resolve("Promise resolved successfully");
// });
// console.log(promise);

// const promise = new Promise((resolve, reject) => {
//     a = 3;

//     if(a === 3){
//         resolve("condition is True")
//     }
//        else{
//         reject("condition is False")
//        }
// })
// promise.then((resolve)=>{
//     console.log(resolve);
// })
// promise.catch((reject)=>{
//     console.log(reject);
// })

// console.log(promise);

// Task 1
function names(name){
        setTimeout(()=>{
    console.log(name); 
}, 4000);

}
 
names("Nelson Rathore  Mahesani");

// Task 2

const promise = new Promise((resolve, reject) => {
    a = 4;

    if(a === 3){
        resolve("condition is True")
    }
       else{
        reject("condition is False")
       }
})
promise.then((resolve)=>{
    console.log(resolve);
})
promise.catch((reject)=>{
    console.log(reject);
})
try {
    throw new Error("This is an error.");
}   catch (error) {
    console.log("Caught an error:", error.message);
}
console.log(promise);


//  Task3
// now I have to fetch data from API and print it in console title and image 
function fetchData(handleData){
    fetch('https://dummyjson.com/products')
    .then(res => res.json()
    .then(data => handleData(data.products))    
)
}   
function handleData(data){
    data.forEach(product => {
        console.log("Title:", product.title);
        console.log("Image:", product.images[0]);
    });
    
}

fetchData(handleData);
