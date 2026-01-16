// var pargraph = document.getElementById("para");
// var text = document.createTextNode("This is text from JavaScript");
// pargraph.appendChild(text);

// var listParent = document.getElementById("ul");
// var lisItems= document.createElement("li");;
// var liText = document.createTextNode("This is list item from JavaScript");
// listParent.appendChild(lisItems);
// lisItems.appendChild(liText);

var btn= document.getElementById("btn");
btn.addEventListener("click", function () {
    var input = document.getElementById("input").value;
    // alert("value is:",input);

    var lisDiv = document.getElementById("div");


    var pargraph = document.createElement("p");
    var textPara = document.createTextNode(input);


    pargraph.appendChild(textPara);
    lisDiv.appendChild(pargraph);

    paraOnTop= lisDiv.firstChild;
    lisDiv.insertBefore(pargraph, paraOnTop);

    document.getElementById("input").value = "";

})

var deleteChild = document.getElementById("clearBtn");
deleteChild.addEventListener('click', function(){
    var lisDiv = document.getElementById("div");
    lisDiv.remove();
    // lisDiv.removeChild(lisDiv.lastChild);   

});


// Object notation in js//

// var arr = ["a", "b", 2, true]
// console.log(arr);
// var studentData = [10,20,"male", "ali"];
// console.log(studentData);

// var studentData = {
//     roll:10,
//     age:20,
//     gender:"male",
//     name:"ali",
// };

// frontendData= JSON.parse(studentData);
// console.log(frontendData);

// // console.log(studentData["name"]);
// // console.log(studentData["age"]);

// var student = {
//     "name":"Ali",
//     "age":"WMA 10",
//    "subjects": [ "Math", "English", "Science" ],
//    "bio":function(){
//     console.log("Hi i am inside object");
//    },   
// };
// console.log(student);
// console.log(student.name);
// console.log(student.subjects);
// console.log(student.bio());

var  Obj = new Object();
Obj.name = "Ali",
Obj.age = "WMA 10",
console.table(Obj);


var obj = {
   name:"ali",
    age:30,

};

obj.roll = 10;
//  delte obj.name;;
console.log("sub"in obj);
for (var keys in obj){
    console.log("key==>",obj[ keys]);
}
 var plan1 = { name: "Basic",
price: 3.99,
space: 100,
transfer: 1000,
pages: 10, discountMonths: [6, 7],
 calcAnnual: function(percentIfDisc) { var bestPrice = plan1.price;
 var currDate = new Date();
 var thisMo = currDate.getMonth();
 for (var i = 0; i < plan1.discountMonths.length; i++) {
 if (plan1.discountMonths[i] === thisMo) {
 bestPrice = plan1.price * percentIfDisc;
 break;
 }
 }
 return bestPrice * 12;
 }
 };
    console.log(plan1.calcAnnual(0.8));

