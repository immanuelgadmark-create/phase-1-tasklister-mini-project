document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = input.value.trim();
    if (taskText === "") {
      return;
    }

    const task = document.createElement("li");
    task.textContent = taskText;
    taskList.appendChild(task);

    form.reset();
  });
});
