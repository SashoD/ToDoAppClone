let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

var todos = [];

// btn disabled

input.addEventListener('keyup', () => {
    if (input.value.trim() != 0) {
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
});

// add to array

function addTodo() {
    var inputValue = input.value;
    todos.push(inputValue);
}

// add item
function printTodos() {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `<p>${input.value}</p>
        <div class="item-btn">
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>`
        tasks.appendChild(newItem);
        input.value = '';
    } else {
        alert('Please, enter a valid task')
    }
}

// btn onclick

addBtn.addEventListener('click', () => {
    addTodo();
    printTodos();
});

console.log(todos);

// del item
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove();
        // var inputValue = input.value;
        // todos.slice(todos);
    }
})

// complete task

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-check')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})