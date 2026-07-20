const submitBtn = document.getElementById("submit-btn")
const taskList = document.getElementById("task-list")
const input = document.getElementById("input-box")
let tasks = JSON.parse(localStorage.getItem("tasks")) || []

submitBtn.addEventListener("click", addTask)
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        submitBtn.click();
    }
});
function addTask() {
    if (input.value.trim() === "") {
        alert("Please enter a task.")
        return
    }
    tasks.push(input.value.trim())
    localStorage.setItem("tasks", JSON.stringify(tasks))
    input.value = ""
    showTasks()
}
function showTasks() {
    taskList.innerHTML = ""
    tasks.forEach((task, index) => {
        // Create <li>
        const li = document.createElement("li")
        li.textContent = task
        // Create Delete Button
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        // Event Listener for this button
        deleteBtn.addEventListener("click", () => {
            deleteTask(index)
        })
        // Add button inside <li>
        li.appendChild(deleteBtn)
        // Add <li> inside <ul>
        taskList.appendChild(li)
    })
}
function deleteTask(index) {
    tasks.splice(index, 1)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    showTasks()
}
showTasks()