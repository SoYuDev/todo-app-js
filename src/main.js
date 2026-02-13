// ! If we don't put the file extension (.js) it might give the error:
// ! net::ERR_ABORTED 404 (Not Found)
import { TaskPrototype } from "./model/TaskPrototype.js";

const regex = /^.{3,}$/;

const taskArray = [];

// DOM SELECTORS
const taskForm = document.querySelector("#form-task");
const btnToggleForm = document.querySelector("#btn-toggle-form");

const formBlock = document.querySelector("#form-section");

//submitTask Selectors
const formInputName = document.querySelector("#form-task__input-name");
const formInputDescription = document.querySelector("#form-task__input-desc");
const errorMsg = document.querySelector("#name-error-msg");

const taskList = document.querySelector("#task-list");
// --------------------------------------------------------------------------//

buildTasksListFromLocalStorage();

// EVENTS
btnToggleForm.addEventListener("click", toggleForm);
taskForm.addEventListener("submit", submitTask);

// METHODS
function toggleForm() {
  // Returns a DOMTokenList with the classes.
  console.log(formBlock.classList);
  // Toggles the specified class
  formBlock.classList.toggle("hidden");
  switchToggleFormMsg();
}

function switchToggleFormMsg() {
  if (!formBlock.classList.contains("hidden")) {
    console.log("DJASKDJAKDJA");
    btnToggleForm.textContent = "Close Tab ❌";
  } else {
    btnToggleForm.textContent = "Add Task 💡";
  }
}

function submitTask(event) {
  // Prevents the page to be refreshed
  event.preventDefault();

  const taskName = formInputName.value;
  const taskDescription = formInputDescription.value;

  if (regex.test(taskName)) {
    formInputName.style.backgroundColor = "white";
    formInputName.style.border = "";

    errorMsg.textContent = "";
    const newTaskObj = new TaskPrototype(taskName, taskDescription);
    const taskHTMLElement = newTaskObj.toHTMLElement();

    taskList.appendChild(taskHTMLElement);

    taskArray.push(newTaskObj);

    const stringifiedObj = JSON.stringify(taskArray);
    localStorage.setItem("taskList", stringifiedObj);
    // const newTaskArray = JSON.parse(stringifiedObj)

    // Cleans the form
    taskForm.reset();
  } else {
    formInputName.style.backgroundColor = "#fff6f6";
    formInputName.style.border = "2px solid red";
    const errorMsgText = "Task's name must have at least 3 characters!";
    errorMsg.textContent = errorMsgText;
  }
}

function buildTasksListFromLocalStorage() {
  const retrievedList = JSON.parse(localStorage.getItem("taskList"));
  if (retrievedList != null) {
    console.log("Hay cosas en el localStorage!");

    retrievedList.forEach((item) => {
      const storedTask = new TaskPrototype(item.name, item.description);

      taskArray.push(storedTask);

      const taskHTMLElement = storedTask.toHTMLElement();

      taskList.appendChild(taskHTMLElement);
      console.log(taskArray);
    });
  } else {
    console.log("No hay nada en el localStorage!");
  }
}
