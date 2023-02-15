const connection = require("./connection");

class employeeDB {

    constructor(connection) {
        this.connection = connection;
    }

    //show employees
    allEmployees() {
        return this.connection.promise().query(
            "SELECT emplpoyee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROMT employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT LEFT JOIN employee manager or manager.id = employee.manager_id;" 
        );
    }

    //add employee
    addEmployee(employees) {
        return this.connection.promise().query("INSERT INTO employee SET ?", employee);
    }

    //update employee role
    updateEmployeeRole(employeeId, roleId) {
        return this.connection.promise().query(
            "UPDATE employee role_id = ? WHERE id = ?",
            [roleId, employeeId]
        );
    }

    //show managers
    allManagers(employeeId) {
        return this.connection.promise().query(
            "SELECT id, first_name, last_name FROM employee WHERE id != ?",
            employeeId
        );
    }

    //show roles
    allRoles() {
        return this.connection.promise().query(
            "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department_id;"
        );
    }

    //create a new role
    addrole(role) {
        return this.connection.promise().query("INSERT INTO role SET ?", role
        );
    }

    //show departments 
    allDepartments() {
        return this.connection.promise().query(
            "SELECT department.id, department.name FROM department;"
        );
    }

    //add department
    addDepartment(department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department);
    }

}

module.exports = new employeeDB(connection);