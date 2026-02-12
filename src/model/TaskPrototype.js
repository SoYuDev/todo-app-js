let id = 0;

export function TaskPrototype(name, description) {
  id++;

  this.id = id;

  this.name = name;
  this.description = description;
  this.state = "PENDING";
}

TaskPrototype.prototype.toHTMLElement = function () {
  const li = document.createElement("li");

  // Input element
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = `task-${this.id}`;

  checkBox.addEventListener("click", () => {
    this.state === "COMPLETED" ? this.state = "PENDING" : this.state = "COMPLETED";
    console.log(this)
  });

  // Label element
  const label = document.createElement("label");
  label.htmlFor = `task-${this.id}`;

  // //? Weird Behaviour
  // const textName = document.createTextNode(" " + this.name + " - ");
  label.textContent = ` ${this.name} - `;

  const emDescription = document.createElement("em");
  emDescription.className = "description";
  emDescription.textContent = this.description;

  // Build label
  // label.appendChild(textName);
  label.appendChild(emDescription);

  // Build li
  li.appendChild(checkBox);
  li.appendChild(label);
  return li;
};
