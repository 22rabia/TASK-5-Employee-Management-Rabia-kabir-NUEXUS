
document.getElementById("employeeForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const department = document.getElementById("department").value;
    const salary = document.getElementById("salary").value;

    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push({ name, role, department, salary });
    localStorage.setItem("employees", JSON.stringify(employees));
    alert("Employee added successfully!");
    e.target.reset();
    displayEmployees();
});

function displayEmployees() {
    const employeeTableBody = document.getElementById("employeeTableBody");
    employeeTableBody.innerHTML = "";
    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    employees.forEach((emp, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${emp.name}</td>
            <td>${emp.role}</td>
            <td>${emp.department}</td>
            <td>${emp.salary}</td>
            <td>
                <button onclick="deleteEmployee(${index})" class="btn btn-danger btn-sm">Delete</button>
            </td>
        `;
        employeeTableBody.appendChild(row);
    });
}

function deleteEmployee(index) {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    displayEmployees();
}

displayEmployees();
