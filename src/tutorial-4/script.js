let tasks = ['Я хочу сделать список задач', 'Я хочу сделать список задач43', 'Я хочу сделать список задач32'];
const tasksList = document.querySelector('.todo-lists');
const input = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-task');


const render = () => {
    tasksList.innerHTML = '';
    tasks.forEach((task, index) => {
        tasksList.innerHTML += `
        <li>${task} <button onclick="handleClickRemove(${index})">x</button></li>
        `;
    });
};

const handleClickRemove = (index) => {
    tasks.splice(index, 1);
    render();
};
const handleClickAdd = (e) => {
    tasks = [...tasks, input.value];
    render();
     
    input.value = '';
}


addButton.addEventListener('click', handleClickAdd);
render();


