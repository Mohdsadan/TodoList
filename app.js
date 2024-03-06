 var listContainer = document.getElementById("list-container")
// defining input box
var inputBox = document.getElementById("input-box")


// funtion for add Todo 
function addTask() {
    if(inputBox.value == ''){
        alert('Please Enter your Task')
    }
    else{
        let list = document.createElement("li");
        list.textContent = inputBox.value;
        console.log(inputBox.value);
        listContainer.appendChild(list);
        
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        list.appendChild(span);
    }
    inputBox.value = '';
}


// Eventlistener for checked and remove
listContainer.addEventListener('click' , (e) => {
    if(e.target.tagName =="LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName =="SPAN"){
        e.target.parentElement.remove();
    }
})


// EventListerner for Enter 
inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("btn").click();
    }
});