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

