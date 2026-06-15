function addTask()
{
    let taskText =document.getElementById("taskInput").value;
    let task = document.createElement("li");
    document.getElementById("taskInput").value = "";
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.style.marginLeft = "15px";
    task.innerHTML = taskText;
    task.appendChild(deleteBtn);
    deleteBtn.style.cursor = "pointer";
    document.getElementById("taskList").appendChild(task);
    deleteBtn.onclick = function() {
    task.remove();
}
}
