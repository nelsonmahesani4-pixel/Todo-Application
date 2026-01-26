// var openPage = window.open();

var content= "<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from agroup of friars<br>named the Order of Friars Minor Capuchin who wear<br>brownrobes with large hoods covering their heads.</p>";

// openPage.document.write(content);

// function checkForLastName() {
//  if (document.getElementById("lastNameField").value.length === 0) {
//  alert("Please enter your last name");
//  return false;
//  }
//  }

//  function checkForLastName() {
//  if (document.getElementById("lastNameField").value.length === 0) {
//  alert("Please enter your last name");
//  document.getElementById("lastNameField").focus();
//  return false;
//  }
//  }

//  function checkForSelection() {
//  if (document.getElementById("states").selectedIndex === 0) {
//  alert("Please select a state.");
//  return false;
//  }
//  }


//   function checkForSelection(selecID) {
//  var target = document.getElementById(selecID);
//  if (target.selectedIndex === 0) {
//  alert("Please select a state.");
//  return false;
//  }
//  }

// document.getElementById('showToastButton').addEventListener('click', function() {
//     Toastify({
//         text: "Toastify in js is working perfectly!",
//         duration: 3000, // Duration in milliseconds, -1 for permanent
//         gravity: "top", // Position: `top` or `bottom`
//         position: "right", // Position: `left`, `center` or `right`
//         backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Custom background color
//         stopOnFocus: true, // Prevents dismiss on hover
//         onClick: function(){
//             // Callback after click
//         }
//     }).showToast(); // Invokes the toast
// });

function main(name,Callback){
    console.log(`Hello ${name}`);
    Callback();
}
main("Nelson",highOFunction);
function highOFunction(){
    console.log("Mahesani");
}
console.log(main,highOFunction);
// outer(main);

var arr = [1,2,3,4,5];
var mapFunct = arr.map((num=> num * 2));
console.log(mapFunct);



