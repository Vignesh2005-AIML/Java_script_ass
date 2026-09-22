let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {

    let taskText = taskInput.value;

    // Don't add an empty task
    if (taskText.trim() === "") {
        return ;
    }


    // Create list item
    let listItem = document.createElement("li");

    // Add task text
    listItem.textContent = taskText;

    // Create delete button
    let deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    // Delete task
    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });

    // Add delete button to list item
    listItem.appendChild(deleteButton);

    // Toggle completed class
    listItem.addEventListener("click", function (event) {

        // Don't toggle when Delete button is clicked
        if (event.target === deleteButton) {
            return;
        }

        listItem.classList.toggle("completed");
    });

    // Add list item to ul
    taskList.appendChild(listItem);

    // Clear input
    taskInput.value = "";
});