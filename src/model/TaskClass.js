let count = 0;
export class TaskClass {
  constructor(name, description) {
    count++;
    this.id = count;
    this.name = name;
    this.description = description;
    this.state = "PENDING";
  }

  toHTMLElement() {
    const li = document.createElement("li");

    // Input element
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = `task-${this.id}`;

    if (this.state === "COMPLETED") {
      checkBox.checked = true;
    }

    // Label element
    const label = document.createElement("label");
    label.htmlFor = `task-${this.id}`;

    //? Weird Behaviour
    const textName = document.createTextNode(" " + this.name + " - ");

    const emDescription = document.createElement("em");
    emDescription.className = "description";
    emDescription.textContent = this.description;

    // Build label
    label.appendChild(textName);
    label.appendChild(emDescription);

    // Build li
    li.appendChild(checkBox);
    li.appendChild(label);
    return li;
  }
}
