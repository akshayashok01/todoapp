document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.querySelector('.todo-input');
    const addBtn = document.querySelector('.add-btn');
    const todoList = document.querySelector('.todo-list');
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      addTodo(todoInput.value);
      todoInput.value = '';
    });
  
    function addTodo(text) {
      if (text.trim() === '') return;
  
      // Create elements
      const todoDiv = document.createElement('li');
      todoDiv.classList.add('todo');
  
      const todoText = document.createElement('span');
      todoText.innerText = text;
      todoDiv.appendChild(todoText);
  
      // Complete button
      const completeBtn = document.createElement('button');
      completeBtn.innerHTML = '✔️';
      completeBtn.classList.add('todo-btn', 'complete-btn');
      todoDiv.appendChild(completeBtn);
  
      // Delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '🗑️';
      deleteBtn.classList.add('todo-btn', 'delete-btn');
      todoDiv.appendChild(deleteBtn);
  
      // Append to list
      todoList.appendChild(todoDiv);
    }
  
    // Click events for complete & delete
    todoList.addEventListener('click', (e) => {
      const item = e.target;
      const todo = item.parentElement;
  
      if (item.classList.contains('delete-btn')) {
        todo.remove();
      }
  
      if (item.classList.contains('complete-btn')) {
        todo.classList.toggle('completed');
      }
    });
  });
  