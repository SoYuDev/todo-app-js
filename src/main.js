import { TaskPrototype } from "./model/TaskPrototype";
import { TaskClass } from "./model/TaskClass";

const taskArray = [];

const taskForm = document.querySelector("#form-create-task");
const taskList = document.querySelector("#task-list");
const btnToggleForm = document.getElementById("btn-toggle-form");

const formInputName = document.querySelector("#task-name");

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

  const taskName = formInputName.value;
  console.log(taskName);

  const newTaskObj = new TaskPrototype(taskName, "Default description");
  const taskHTMLElement = newTaskObj.toHTMLElement();
  console.log(taskHTMLElement);
  taskList.appendChild(taskHTMLElement);

  taskArray.push(newTaskObj);
  console.log(taskArray);

  // Cleans the form
  taskForm.reset();
}
