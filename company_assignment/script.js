let tasks = [
    { id: 1, assignedTo: 'User 1', status: 'Completed', dueDate: '2024-10-12', priority: 'Low', comments: 'This task is  very good' },
    { id: 2, assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', comments: 'This task is in complecte' },
    { id: 3, assignedTo: 'User 3', status: 'Not Started', dueDate: '2024-08-18', priority: 'Low', comments: 'This task is good' },
    { id: 4, assignedTo: 'User 4', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is in process' }   
];

// Function to display tasks
function displayTasks() {
    const taskTableBody = document.getElementById('taskTableBody');
    taskTableBody.innerHTML = '';
    tasks.forEach(task => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><input type="checkbox" /></td>
            <td>${task.assignedTo}</td>
            <td>${task.status}</td>
            <td>${task.dueDate}</td>
            <td>${task.priority}</td>
            <td>${task.comments}</td>
            <td>
                <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </td>
        `;
        taskTableBody.appendChild(tr);
    });
}

// Function to add or edit task
function addOrEditTask(id = null) {
    const assignedTo = document.getElementById('assignedTo').value;
    const status = document.getElementById('status').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    const comments = document.getElementById('comments').value;

    if (id === null) {
        tasks.push({ id: tasks.length + 1, assignedTo, status, dueDate, priority, comments });
    } else {
        const task = tasks.find(t => t.id === id);
        task.assignedTo = assignedTo;
        task.status = status;
        task.dueDate = dueDate;
        task.priority = priority;
        task.comments = comments;
    }

    closeModal();
    displayTasks();
}

// Edit task functionality
function editTask(id) {
    const task = tasks.find(t => t.id === id);
    document.getElementById('assignedTo').value = task.assignedTo;
    document.getElementById('status').value = task.status;
    document.getElementById('dueDate').value = task.dueDate;
    document.getElementById('priority').value = task.priority;
    document.getElementById('comments').value = task.comments;

    openModal();
    document.getElementById('saveTaskBtn').onclick = () => addOrEditTask(id);
}

// Delete task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    displayTasks();
}

// Open/close modal
function openModal() {
    document.getElementById('taskModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('taskModal').style.display = 'none';
}

// Initialize task display
document.getElementById('newTaskBtn').onclick = () => {
    document.getElementById('assignedTo').value = '';
    document.getElementById('status').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('priority').value = '';
    document.getElementById('comments').value = '';
    openModal();
    document.getElementById('saveTaskBtn').onclick = () => addOrEditTask(null);
};

// Close the modal when Cancel button is clicked
document.getElementById('cancelTaskBtn').onclick = closeModal;

// Display tasks when the page 
displayTasks();



