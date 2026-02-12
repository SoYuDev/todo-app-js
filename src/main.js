// ! If we don't put the file extension it might give the error:
// ! net::ERR_ABORTED 404 (Not Found)
import { TaskPrototype } from "./model/TaskPrototype.js";

const regex = /^.{3,}$/;

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

  if (regex.test(taskName)) {
    formInputName.style.backgroundColor = "white";
    const newTaskObj = new TaskPrototype(taskName, taskDescription);
    const taskHTMLElement = newTaskObj.toHTMLElement();

    const taskList = document.querySelector("#task-list");
    taskList.appendChild(taskHTMLElement);

    taskArray.push(newTaskObj);
    console.log(taskArray);

    // Cleans the form
    taskForm.reset();
  } else {
    alert("Task name must have at least 3 characters");
    formInputName.style.backgroundColor = "red";
  }
}