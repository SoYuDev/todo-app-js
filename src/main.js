import { TaskPrototype } from "./model/TaskPrototype";
import { TaskClass } from "./model/TaskClass";
const taskArray = [];

const formBlock = document.getElementById("form-block");
const btnToggleForm = document.getElementById("btn-toggle-form");

const taskList = document.getElementById("task-list");
const listItems = document.querySelectorAll("#task-list li");
console.log(listItems);

const t1 = new TaskPrototype("Comer", "Algo");
const t2 = new TaskPrototype("Cenar", "Algo");
const t3 = new TaskClass("Almorzar", "Comida");
taskList.appendChild(t1.toHTMLElement());
taskList.appendChild(t2.toHTMLElement());
taskList.appendChild(t3.toHTMLElement());

/* const exampleList = [
  {
    name: "Task1",
    desc: "task1Desc",
    state: "PENDING" | "ACCEPTED",
  },
  {
    name: "Task2",
    desc: "task2Desc",
    state: "PENDING" | "ACCEPTED",
  },
]; */

btnToggleForm.addEventListener("click", toggleForm);

function toggleForm() {
  console.log(formBlock.classList);
  // Toggles the specified class
  formBlock.classList.toggle("hidden");
}
