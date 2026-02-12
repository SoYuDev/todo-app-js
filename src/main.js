// ! If we don't put the file extension it might give the error:
// ! net::ERR_ABORTED 404 (Not Found)
import { TaskPrototype } from "./model/TaskPrototype.js";
// import { TaskClass } from "./model/TaskClass.js";

const taskArray = [];

const taskForm = document.querySelector("#form-task");
const btnToggleForm = document.getElementById("btn-toggle-form");

// EVENTS
btnToggleForm.addEventListener("click", toggleForm);
taskForm.addEventListener("submit", submitTask);

// METHODS
function toggleForm() {
  const formBlock = document.querySelector("#form-section");
  console.log(formBlock.classList);
  // Toggles the specified class
  formBlock.classList.toggle("hidden");
}

function submitTask(event) {
  // Prevents the page to be refreshed
  event.preventDefault();

  const formInputName = document.querySelector("#form-task__input-name");
  const formInputDescription = document.querySelector("#form-task__input-desc");

  const taskName = formInputName.value;
  const taskDescription = formInputDescription.value;
  console.log(taskName);

  const newTaskObj = new TaskPrototype(taskName, taskDescription);
  const taskHTMLElement = newTaskObj.toHTMLElement();
  console.log(taskHTMLElement);
  
  const taskList = document.querySelector("#task-list");
  taskList.appendChild(taskHTMLElement);

  taskArray.push(newTaskObj);
  console.log(taskArray);

  // Cleans the form
  taskForm.reset();
}
