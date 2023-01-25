let one = document.getElementById('one');


let todos = ['Get groceries', 'Wash car', 'Make dinner'];

  todos.forEach(function(todoTitle) {
    let element = document.createElement('div');
    element.innerText = todoTitle;
    one.appendChild(element);
  });

  function addTodo() {
    let textbox = document.getElementById('todo-title');
    let title = textbox.value;
    todos.push(title);

    let div = document.createElement('div');
    div.innerText = title;
    one.appendChild(div);
  }
