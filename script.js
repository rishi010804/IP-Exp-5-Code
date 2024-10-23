document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task");
  const inputField = document.getElementById("new-task");
  const todoList = document.getElementById("todo-list");

  // Function to add a new task
  function addTask() {
    const taskText = inputField.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const listItem = document.createElement("li");

    // Create task text span
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Create Mark button
    const markButton = document.createElement("button");
    markButton.textContent = "Mark";
    markButton.className = "mark";
    markButton.addEventListener("click", function () {
      markTask(taskSpan);
    });

    // Create Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit";
    editButton.addEventListener("click", function () {
      editTask(taskSpan);
    });

    // Create Remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      todoList.removeChild(listItem);
    });

    // Append elements to list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(markButton);
    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);
    todoList.appendChild(listItem);

    inputField.value = "";
  }

  // Function to edit an existing task
  function editTask(taskSpan) {
    const newTaskText = prompt("Edit your task:", taskSpan.textContent);
    if (newTaskText !== null && newTaskText.trim() !== "") {
      taskSpan.textContent = newTaskText.trim();
    }
  }

  // Function to mark a task as completed
  function markTask(taskSpan) {
    taskSpan.classList.toggle("completed");
  }

  // Event listener for Add button
  addButton.addEventListener("click", addTask);

  // Event listener for Enter key in input field
  inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
