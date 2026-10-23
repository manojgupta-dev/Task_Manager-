console.log("Hello, Task Manager!");

// Select HTML elements
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

// Add event listener
taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }
    const li=document.createElement('li')
    li.textContent=task;
    taskList.appendChild(li)
    taskInput.value="";
    emptyMessage.style.display = "none"
});