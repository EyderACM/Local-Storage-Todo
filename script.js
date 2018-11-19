const newTodo = document.querySelector('.new-todo');
const itemsList = document.querySelector('.todos');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addTodo(e) {
    e.preventDefault();
    const text = this.querySelector('[name=item]').value;
    const item = {
        text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(todos = [], todosList) {    
    todosList.innerHTML = todos.map((todo, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${todo.done ? 'checked' : ''}/> 
                <label for="item${i}">${todo.text}</label>
            <li>
        `;
    }).join('');
}

newTodo.addEventListener('submit', addTodo);
populateList(items, itemsList)