const formBlock = document.getElementById("form-block");
const btnToggleForm = document.getElementById("btn-toggle-form");

const listItems = document.querySelectorAll('#task-list li');
console.log(listItems)

btnToggleForm.addEventListener("click", toggleForm);

function toggleForm() {
  console.log(formBlock.classList);
  // Toggles the specified class
  formBlock.classList.toggle("hidden");
}
