const todoList = [
    {
        name: "make dinner",
        dueDate: '2022-12-22'
    },

    {
        name: "wash dishes",
        dueDate: '2022-12-22'
    }
        
];

renderTodoList();

function renderTodoList() {
    let todoListHtml = '';
    todoList.forEach(function(todoObject, index) {
        // const todoObject = todoList[i];
        const { name, dueDate  } = todoObject;
        console.log(name);
        console.log(dueDate);
        
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todoList.splice(${index},1);
                renderTodoList();
            "class="delete-todo-button">delete</button>

        `;
        todoListHtml += html;
    })
    console.log(todoListHtml);

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHtml;

}



function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input');
    const name = inputElement.value;
    const dueDate = dateInputElement.value;
    // console.log(name);
    todoList.push({name,dueDate});
    console.log(todoList);
    inputElement.value = '';

    renderTodoList();
}
