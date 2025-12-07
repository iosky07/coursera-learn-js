const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000,  specialization: 'Java'},
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000,  specialization: 'JavaScript'},
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000,  specialization: 'Java'},
      //... More employee records can be added here
    ];

// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p> Employee Name: ${employee.name} - Department: ${employee.department}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((total, employee) => total + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeeDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.age} - ${employee.salary}</p>`)

    document.getElementById('employeesDetails').innerHTML = hrEmployeeDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);

    if (foundEmployee) {
        console.log(foundEmployee)
        document.getElementById('employeesDetails').innerHTML = `<p>Found Employee with Id: ${foundEmployee.id} - ${foundEmployee.name}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = `<p>Employee data not found.</p>`;
    }
}

function findEmployeeBySpec(employeeSpec) {
    const foundEmployeeSpec = employees.find(employee => employee.specialization === employeeSpec);

    if (foundEmployeeSpec) {
        document.getElementById('employeesDetails').innerHTML = `<p>Found Employee with Specialization ${foundEmployeeSpec.specialization}: ID: ${foundEmployeeSpec.id} - ${foundEmployeeSpec.name}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = `<p>Employee data not found.</p>`;
    }
}