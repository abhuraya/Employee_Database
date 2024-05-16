const inquirer = require ('inquirer');


inquirer
.prompt([
    {
        type: 'list',
        name: 'start',
        choices: ['View all Departments', 'View all Role', 'View all Employees', 
            'Add a Role', 'Add an Employee', 'Update Employee Role'
        ]
    }
])
.then((answers) => {
    console.log(answers);
})