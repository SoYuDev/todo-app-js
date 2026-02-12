// ! If we don't put the file extension it might give the error:
// ! net::ERR_ABORTED 404 (Not Found)
import { TaskPrototype } from "./model/TaskPrototype.js";

const regex = /^.{3,}$/;

const taskArray = [];

const taskForm = document.querySelector("#form-task");
const btnToggleForm = document.getElementById("btn-toggle-form");

buildTaskListFromLocalStorage();

// EVENTS
btnToggleForm.addEventListener("click", toggleForm);
taskForm.addEventListener("submit", submitTask);

// METHODS
function toggleForm() {
  const formBlock = document.querySelector("#form-section");
  // Returns a DOMTokenList with the classes.
  console.log(formBlock.classList);
  // Toggles the specified class
  formBlock.classList.toggle("hidden");
}

// TODO -- Might be a good idea to pop out the const to get DOM elements
function submitTask(event) {
  // Prevents the page to be refreshed
  event.preventDefault();

  const formInputName = document.querySelector("#form-task__input-name");
  const formInputDescription = document.querySelector("#form-task__input-desc");

  const errorMsg = document.querySelector("#name-error-msg");

  const taskName = formInputName.value;
  const taskDescription = formInputDescription.value;

  if (regex.test(taskName)) {
    formInputName.style.backgroundColor = "white";
    formInputName.style.border = "";

    errorMsg.textContent = "";
    const newTaskObj = new TaskPrototype(taskName, taskDescription);
    const taskHTMLElement = newTaskObj.toHTMLElement();

    const taskList = document.querySelector("#task-list");
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
    errorMsg.textContent = " Task name must have at least 3 characters";
  }
}

function buildTaskListFromLocalStorage() {
  const retrievedList = JSON.parse(localStorage.getItem("taskList"));
  if (retrievedList != null) {
    console.log("Hay cosas en el localStorage!");

    retrievedList.forEach((item) => {
      const storedTask = new TaskPrototype(item.name, item.description);

      taskArray.push(storedTask);

      const taskHTMLElement = storedTask.toHTMLElement();

      const taskList = document.querySelector("#task-list");
      taskList.appendChild(taskHTMLElement);
      console.log(taskArray);
    });
  } else {
    console.log("No hay nada en el localStorage!");
  }
}
