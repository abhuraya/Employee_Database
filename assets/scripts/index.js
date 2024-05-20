//Modules imported
const inquirer = require ('inquirer');
const SCH = require('./database');
const sch = new SCH;
const { join } = require('path');


class INQ{
    constructor(){
    }
// Initial function for main menu
    mainMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'select',
                choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department',
                'Add a Role', 'Add an Employee', 'Update Employee Role', 'Update Managers', 'Delete']
            }
        ])
        .then(( answers ) => {
            this.selector(answers.select);
        })
        }
//Filters answer to appropriate function
        selector(x){
            if( x === "View all Departments"){
                sch.table1();
                console.log("Press any arrrow key for the main menu");
                this.mainMenu();
            }else if (x === "View all Roles"){
                sch.table2();
                console.log("Press any arrrow key for the main menu");
                this.mainMenu();
            }else if (x === "View all Employees"){
                sch.table3();
                console.log("Press any arrrow key for the main menu");
                this.mainMenu();
            }else if (x === "Add a Department"){
                add_department();
            }else if (x === "Add a Role"){
                add_role();
            }else if (x === "Add an Employee"){
                add_employee();
            }else if (x === "Update Employee Role"){
                update_employee();
            }else if (x === "Update Managers"){
                update_employee1();
            }else if (x === "Delete"){
                deleter();
            }
    }

    
}
//function to add a role utilizing inquirer and importing SCH class
function add_role(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: 'Enter the name of the new role'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for the role'
        },
        {
            type: 'input',
            name: 'roledepartment',
            message: 'Enter a department id for the role'
        }
    ])
    .then((answers) => {
        //function to access database
        sch.add2(answers.role, answers.salary, answers.roledepartment);
    })
}

//function to add an employee utilizing inquirer and importing SCH class
function add_employee(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstname',
            message: 'Enter the first name of the new employee'
        },
        {
            type: 'input',
            name: 'lastname',
            message: 'Enter the last name of the new employee'
        },
        {
            type: 'input',
            name: 'roleid',
            message: 'Enter their role id'
        },
        {
            type: 'input',
            name: 'managerid',
            message: 'Enter their managers id'
        }
    ])
// Function to access database
    .then((answers) => {
        sch.add3(answers.firstname, answers.lastname, answers.roleid, answers.managerid);
    })
}

//function to add a department utilizing inquirer and importing SCH class
function add_department(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentname',
            message: 'Enter the name of the new department'
        }
    ])
//function to utilize database
    .then((answers) => {
        sch.add1(answers.departmentname);
    })
}

//function to edit an employees role utilizing inquirer and importing SCH class
function update_employee(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeid',
            message: 'Enter the employee id'
        },
        {
            type: 'input',
            name: 'newrole',
            message: 'Enter the new role id'
        }
    ])
//function to utilize database
    .then((answers) => {
        sch.add4(answers.newrole, answers.employeeid);
    })
}

//function edit employee supervisor utilizing inquirer and importing SCH class
function update_employee1(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeid',
            message: 'Enter the employee id'
        },
        {
            type: 'input',
            name: 'newsupervisor',
            message: 'Enter the new supervisor id'
        }
    ])
//function to utilize database
    .then((answers) => {
        sch.add5(answers.newsupervisor, answers.employeeid);
    })
}

//function to delete departments, employees, or roles utilizing inquirer and importing SCH class
function deleter(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'delete',
            choices: ['department', 'employee', 'role']
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the id number'
        }
    ])
//function to utilize database
    .then((answers) => { 
        sch.delete1(answers.delete, answers.id);
    })
}

module.exports = INQ;
