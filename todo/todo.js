document.addEventListener('DOMContentLoaded', function () {
   
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const deleteCompletedBtn = document.getElementById('delete-completed-btn');

    // Retrieve tasks from local storage
    let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Remove checked tasks from savedTasks
    savedTasks = savedTasks.filter(task => !task.completed);

    // Update local storage to reflect changes
    localStorage.setItem('tasks', JSON.stringify(savedTasks));

    // Add each saved task to the DOM
    savedTasks.forEach(task => addTaskToDOM(task.text, task.completed));

    // Add event listener to the 'Add Task' button
    addTaskBtn.addEventListener('click', function () {
        addTask();
    });

    // Add event listener to the 'Delete Completed' button
    deleteCompletedBtn.addEventListener('click', function () {
        document.querySelectorAll('.task-item.completed').forEach(taskItem => {
            taskItem.remove();
        });
        updateLocalStorage();
        toggleDeleteCompletedButton();
    });

    // Add event listener to the task input field to handle pressing Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTaskToDOM(taskText);
            taskInput.value = '';
            updateLocalStorage();
            toggleDeleteCompletedButton();
        }
    }

    // Function to toggle visibility of the 'Delete Completed' button
    function toggleDeleteCompletedButton() {
        const completedTasks = document.querySelectorAll('.task-item.completed');
        deleteCompletedBtn.style.display = completedTasks.length > 0 ? 'block' : 'none';
    }

    // Function to add a task to the DOM
    function addTaskToDOM(taskText, completed = false) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <input type="checkbox" class="complete-checkbox" ${completed ? 'checked' : ''}>
            <span ${completed ? 'style="text-decoration: line-through;"' : ''}>${taskText}</span>
            <button class="delete-btn" style="display: ${completed ? 'none' : 'block'};">Delete</button>
        `;

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Add event listener to the delete button
        const deleteBtn = taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function () {
            taskItem.remove();
            updateLocalStorage();
            toggleDeleteCompletedButton();
        });

        // Add event listener to the completion checkbox
        const completeCheckbox = taskItem.querySelector('.complete-checkbox');
        completeCheckbox.addEventListener('change', function () {
            if (completeCheckbox.checked) {
                taskItem.classList.add('completed');
                taskItem.querySelector('span').style.textDecoration = 'line-through';
                deleteBtn.style.display = 'none';
            } else {
                taskItem.classList.remove('completed');
                taskItem.querySelector('span').style.textDecoration = '';
                deleteBtn.style.display = 'block'; 
            }
            updateLocalStorage();
            toggleDeleteCompletedButton();
        });

        // Toggle visibility of the 'Delete Completed' button based on completed tasks
        toggleDeleteCompletedButton();
    }

    // Function to update local storage with current task list
    function updateLocalStorage() {
        const tasks = [];
        document.querySelectorAll('.task-item').forEach(taskItem => {
            const task = {
                text: taskItem.querySelector('span').innerText,
                completed: taskItem.classList.contains('completed')
            };
            tasks.push(task);
        });
        // Store tasks array in local storage as JSON
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});

