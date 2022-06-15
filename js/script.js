const button1 = document.querySelector('.add');
const button2 = document.querySelector('.remove')
const field = document.querySelector('.field');
const div = document.querySelector('.div');
let tasks = document.querySelector('.array')

function createTask(value) {
    const task = document.createElement("div");
    task.textContent = value;
    return task;
}
function addTask() {
    if (field.value) {
        let newTask = createTask(field.value);
        tasks.appendChild(newTask);
        field.value = ""
    }
}

function buttonPressAdd() {
    if(event.keyCode === 13) {
        addTask();
    }
}

function removeTask() {
    if (tasks.hasChildNodes()) {
        tasks.removeChild(tasks.lastChild)
    }
}

function buttonPressRemove() {
    if(event.keyCode === 13) {
        removeTask()
    }
}

button1.addEventListener('click', addTask);
field.addEventListener('keydown', buttonPressAdd, buttonPressRemove);
button2.addEventListener('click', removeTask)