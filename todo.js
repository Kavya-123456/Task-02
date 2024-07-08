function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput.value;

        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function() {
            var newTask = prompt("Edit your task:", li.textContent);
            if (newTask !== null && newTask.trim() !== "") {
                li.firstChild.textContent = newTask;
            }
        };

        li.appendChild(editButton);
        li.appendChild(removeButton);
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
