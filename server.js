const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "tracker_db",
  },
  console.log(`Connected!`)
);

inquirer
  .prompt([
    {
      type: "list",
      name: "options",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Update employee manager",
        "View employees by manager",
        "View employees by department",
        "Delete departments",
        "Delete roles",
        "Delete employees",
        "View the total utilized budget of department",
        "Exit",
      ],
    },
  ])

  .then((answer) => {
    if (answer === "View all departments") {
      viewDepartments();
    } else if (answer === "View all roles") {
      viewRoles();
    } else if (answer === "View all employees") {
      viewEmployees();
    } else if (answer === "Add a department") {
      addDepartment();
    } else if (answer === "Add a role") {
      addRole();
    } else if (answer === "Add an employee") {
      addEmployee();
    } else if (answer === "Update an employee role") {
      updateEmployee();
    } else if (answer === "Update employee manager") {
      updateManager();
    } else if (answer === "View employees by manager") {
      viewByManager();
    } else if (answer === "View employees by department") {
      viewByDepartment();
    } else if (answer === "Delete departments") {
      deleteDepartments();
    } else if (answer === "Delete roles") {
      deleteRoles();
    } else if (answer === "Delete employees") {
      deleteEmployees();
    } else if (answer === "View the total utilized budget of department") {
      viewBudget();
    } else {
      exit();
    }
  });

const viewDepartments = () => {
  connect.query("SELECT * FROM department;");
};
const viewRoles = () => {
  connect.query("SELECT * FROM role;");
};
const viewEmployees = () => {
  connect.query("SELECT * FROM employee;");
};
const addDepartment = () => {
  connect.query("INSERT INTO department;");
};
const addRole = () => {
  connect.query("INSERT INTO role;");
};
const addEmployee = () => {
  connect.query("INSERT INTO employee;");
};
const updateEmployee = () => {
  connect.query("UPDATE employee;");
};
const updateManager = () => {
  connect.query("UPDATE manager;");
};
const viewByManager = () => {
  connect.query("SELECT * FROM manager;");
};
const viewByDepartment = () => {
  connect.query("SELECT * FROM department;");
};
const deleteDepartments = () => {
  connect.query("DELETE departments;");
};
const deleteRoles = () => {
  connect.query("DELETE roles;");
};
const viewBudget = () => {
  connect.query("SELECT * FROM budget;");
};
