let tasks = [];

function addTask(task) {
    tasks.push(task);
    console.log("Task added:", task);
}

function showTasks() {
    console.log("Your tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

addTask("Learn JavaScript");
addTask("Practice GitHub");
showTasks();
