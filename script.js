 // Select DOM Elements for To-Do List
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoListUL = document.getElementById('todoList');
const feedbackMessage = document.getElementById('feedbackMessage');

console.log("To-Do List script loaded. Elements selected.");

// Functions and event listeners will be added here
// more on events and project setup
//review:
//addEventListener("eventname",callbackFunction);
//removing event listeners-> Element.removeEventListener()

//input events->input,change
//event delegation
//project setup:To-Do list
//building the to-do list app
addButton.addEventListener('click', function(event) {
  console.log("add button clicked");
  addTask();
});
function addTask() {
  const taskText= todoInput.value.trim();//trim() removes whitespace from both ends of a string
  if(taskText === "") {
    feedbackMessage.textContent = "Please enter a task.";
    feedbackMessage.style.color = "red";
    return; //exit the function if input is empty
  }
  // Create a new list item
  const listItem=document.createElement('li');//create a new list item element
  //set the text content
  listItem.textContent = taskText;
  const deleteButton=document.createElement('button'); //create a delete button
  deleteButton.textContent ="Delete";
  deleteButton.classList.add("delete-btn")
  listItem.appendChild(deleteButton);
  
  
  //delete button working
  deleteButton.addEventListener('click', function() {
     listItem.remove(); //remove the list item when delete button is clicked
     feedbackMessage.textContent = "Task deleted successfully!";
  });


  //append complete button
  const completeButton = document.createElement('button'); //create a complete button
  completeButton.textContent = "Complete";      
  completeButton.classList.add("complete-btn");
  listItem.appendChild(completeButton);     
  todoListUL.appendChild(listItem); //add the new item to the list
  listItem.addEventListener('click', function() {
    listItem.classList.toggle('completed'); //toggle the completed class on click
    feedbackMessage.textContent = "Task marked as completed!";
    feedbackMessage.style.color = "green";
  });
}


todoInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') { //check if the Enter key was pressed
    console.log("Enter key pressed");
    addTask(); //call the addTask function
  }
});
//adding a delete button