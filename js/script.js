const button1 = document.querySelector('.add');
const button2 = document.querySelector('.remove')
const field = document.querySelector('.field');
const div = document.querySelector('.div');
let tasks = document.querySelector('.array')

function createTask(value) {
    const task = document.createElement("div");
    let d = new Date();
    let d1 = d.getHours().toString() + ':' + d.getMinutes().toString();
    task.textContent = value + ' ------- ' + d1;
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
    let deltask = prompt('номер таски для удаления:');
    if (tasks.hasChildNodes()) {
        tasks.removeChild(tasks.children[deltask - 1])
    }
}

function buttonPressRemove() {
    if(event.keyCode === 13) {
        removeTask()
    }
}
function getTimeNow() {
    let currentTime = (new Date()).toLocaleTimeString();
    document.getElementById('clock').innerHTML = `время:   ${currentTime}`;
}

setInterval(function(){  getTimeNow() }, 1000);

button1.addEventListener('click', addTask);
field.addEventListener('keydown', buttonPressAdd, buttonPressRemove);
button2.addEventListener('click', removeTask)