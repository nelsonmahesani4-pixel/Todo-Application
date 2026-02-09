var todoInput = document.getElementById("todoInput");
var todoBtn= document.getElementById("todoBtn");
var todoList = document.getElementById("todoList");

todoBtn.addEventListener("click", function() {
  var todoText = todoInput.value;
  console.log("todotext", todoText);
  var li =document.createElement("li");
  li.textContent = todoText;
  console.log("li", li); 
  todoList.appendChild(li);
});
function saveData(todoText) {
    var todoData = JSON.parse(localStorage.getItem("todo")) || [];
    
    todoData.push(todoText);
    
    console.log("todoData", todoData);
    
    localStorage.setItem("todo", JSON.stringify(todoData));
}

saveData(todoInput.value);


function getData() {
var todoData = localStorage.getItem("todo");
}
