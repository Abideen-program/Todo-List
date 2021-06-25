var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul")

// To determine the length of the input value in the input field
function inputLength(){
    return input.value.length;
}

// Create list items
function createList(){
    var li = document.createElement("li");
    var spanLi = document.createElement("span");
    spanLi.appendChild(document.createTextNode(input.value));
    li.appendChild(spanLi);
    li.classList.add("li");
    ul.appendChild(li);
    input.value = "";

    // To make the newly added item on the top
    ul.insertBefore(li, ul.childNodes[0]);

    //To create button and append it to the list items
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"))
    btn.classList.add("del")
    li.appendChild(btn);
}

// To create list elements after click
function addListAfterClick(){
    if(inputLength() > 0){
        createList();
    }
}

// To create list elements after keypress
function addListAfterKeypress(event){
    if(inputLength() > 0 && event.keyCode === 13){
        createList()
    }
}

// To perform call back function to create list elements on click
button.addEventListener("click", addListAfterClick);

// To perform call back function to craete list elements on keypress
input.addEventListener("keypress", addListAfterKeypress);

// To toggle strike through and make 

ul.onclick = function(event){
    var target = event.target;
    if(target.tagName === "SPAN"){
        target.classList.toggle("done")
    }

    if(target.tagName === "BUTTON"){
        target.parentNode.parentNode.removeChild(target.parentNode);
    }
}