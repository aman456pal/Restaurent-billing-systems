// Sample menu items
const menuItems = [];
let order = [];

// Sample employees and expenses
let employees = [];
let expenses = [];

function login() {
    // Basic login function (insecure, for demonstration purposes)
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'Aman' && password === 'aman@123') {
        // Hide login and show restaurant interface
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('restaurant-container').style.display = 'block';

        // Display menu items
        displayMenu();
    } else {
        alert('Invalid credentials. Please try again.');
        // Clear input fields after an unsuccessful login attempt
        usernameInput.value = '';
        passwordInput.value = '';
    }
}

function showSection(section) {
    // Hide all sections
    document.getElementById('employees-section').style.display = 'none';
    document.getElementById('menu-section').style.display = 'none';
    document.getElementById('expenses-section').style.display = 'none';

    // Show the selected section
    document.getElementById(`${section}-section`).style.display = 'block';

    // Clear forms
    document.getElementById('employee-form').reset();
    document.getElementById('menu-form').reset();
    document.getElementById('expense-form').reset();
}

function addEmployee() {
    const employeeName = document.getElementById('employee-name').value;
    const employeeSalary = parseFloat(document.getElementById('employee-salary').value);

    employees.push({ name: employeeName, salary: employeeSalary });

    // Display employees dynamically
    displayEmployees();
    calculateTotalSalary();
}

function displayEmployees() {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';

    employees.forEach(employee => {
        const employeeItem = document.createElement('div');
        employeeItem.innerHTML = `<p>Name: ${employee.name}, Salary: $${employee.salary.toFixed(2)}</p>`;
        employeeList.appendChild(employeeItem);
    });

    // Calculate and display total salary
    calculateTotalSalary();
}

function calculateTotalSalary() {
    // Calculate total salary
    const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0).toFixed(2);

    // Display total salary
    document.getElementById('total-salary').innerText = totalSalary;
}

function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemPrice = parseFloat(document.getElementById('item-price').value);
    const itemQuantity = parseInt(document.getElementById('item-quantity').value);

    const itemTotal = itemPrice * itemQuantity * 1.1; // Assume 10% GST for demonstration purposes

    menuItems.push({ name: itemName, price: itemTotal });

    // Display menu items dynamically
    displayMenu();
    calculateTotalItemAmount();
}

function displayMenu() {
    const menuList = document.getElementById('menu-list');
    menuList.innerHTML = '';

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.innerHTML = `<p>Name: ${item.name}-: Total Price (with GST): $${item.price.toFixed(2)}</p>`;
        menuList.appendChild(menuItem);
    });

    // Calculate and display total item amount
    calculateTotalItemAmount();
}

function calculateTotalItemAmount() {
    // Calculate total item amount
    const totalItemAmount = menuItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

    // Display total item amount
    document.getElementById('total-item-amount').innerText = totalItemAmount;
}

function addExpense() {
    const expenseCategory = document.getElementById('expense-category').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

    expenses.push({ category: expenseCategory, amount: expenseAmount });

    // Display expenses dynamically
    displayExpenses();
    calculateTotalExpenses();
}

function displayExpenses() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    expenses.forEach(expense => {
        const expenseItem = document.createElement('div');
        expenseItem.innerHTML = `<p>Category: ${expense.category}, Amount: $${expense.amount.toFixed(2)}</p>`;
        expenseList.appendChild(expenseItem);
    });

    // Calculate and display total expenses
    calculateTotalExpenses();
}

function calculateTotalExpenses() {
    // Calculate total expenses
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0).toFixed(2);

    // Display total expenses
    document.getElementById('total-expenses').innerText = totalExpenses;
}

// Add this function to handle the printing of the menu slip
function printMenuSlip() {
    // Get the content to be printed
    const menuSlipContent = document.getElementById('menu-list').innerHTML;
    const totalItemAmount = document.getElementById('total-item-amount').innerText;

    // Create a new window for printing
    const printWindow = window.open('', '_blank');

    // Set the content of the new window
    printWindow.document.write('<html><head><title>Aman Restaurent</title></head><body>');
    printWindow.document.write('<h1 id="centered-content">Aman Restaurant</h1>');
    printWindow.document.write('<pre>78-A Naubasta Kanpur Nagar</pre>');
    printWindow.document.write('<pre>208021</pre>');
    printWindow.document.write('<pre>7905481432</pre>');    
    printWindow.document.write(menuSlipContent);
    printWindow.document.write('<p>Total Item Amount: $' + totalItemAmount + '</p>');
    printWindow.document.write('</body></html>');

    // Print the content
    printWindow.document.close();
    printWindow.print();
}

// Add this style to hide the print button when printing
document.head.insertAdjacentHTML(
    'beforeend',
    '<style>@media print { button { display: none; } }</style>'
);

// Add this style for print slip section
document.head.insertAdjacentHTML(
    'beforeend',
    '<style>.dark-section { margin-bottom: 10px; background-color: #2c3e50; color: #ecf0f1; padding: 10px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); font-family: "Arial", sans-serif; }</style>'
);


