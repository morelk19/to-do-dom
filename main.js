/*
To-do List Dom notes
*Users have the ability to add new to-do items
-form
-text input box and submit (get input from the user and add it to the list when they click submit)
-document.createElement to create list items
-appendChild to add to our list

*Users have the abilty to view to-do items
-list to keep track of our to-do items
-querySelectorAll (or bubbling) can be utilized to access the array of the individual list items

HTML

-empty list
-form
-buttons
-text input

JS
-list items

*/

/*
Query Selectors
*/

let inputBox = document.querySelector("#toDoInput");
let toDoList = document.querySelector("#toDoList")
let clearButton = document.querySelector("#clearAll");
let toDoForm = document.querySelector("#toDoForm"); 
let toDoDiv = document.querySelector("#toDoListDiv");
let doneButton = document.querySelector("#clearDone");
let listItems = [];


/*
Action Listeners
*/

toDoForm.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(toDoList);
    let item = document.createElement('li');
    item.setAttribute("id", inputBox.value );
    item.innerText = inputBox.value;
    inputBox.value = '';
    item.addEventListener("click", function(){
        item.innerText += "-completed"
        item.style.textDecoration = 'line-through';
        item.classList.add("completed");
        console.log(item.classList);
    })
    toDoList.appendChild(item);
    listItems = document.querySelectorAll("#toDoList li");

})

clearButton.addEventListener("click", function(){
    removeAllChildNodes(toDoList);
    
})

doneButton.addEventListener("click", function(){
    for(let items of listItems){
        if(items.classList[0] === 'completed'){
            items.remove();
        }
    }
    
})

/*
functions
*/

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}




