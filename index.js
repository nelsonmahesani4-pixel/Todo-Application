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

var student = {
    "name":"Ali",
    "age":"WMA 10",
   "subjects": [ "Math", "English", "Science" ],
   "bio":function(){
    console.log("Hi i am inside object");
   },   

};
console.log(student);
console.log(student.name);
console.log(student.subjects);
console.log(student.bio());

