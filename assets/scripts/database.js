const mysql = require('mysql2');
const inquirer = require('inquirer');


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'mySQL84;',
        database: 'employees'
    },
    console.log(`Connected to employees`)
);


class SCH {
    constructor(){

    }
    
    table1(){
    
        db.query('SELECT * FROM department;', function (err, results) {
            console.log(results);
        });
    }
    
    table2(){
    
        db.query('SELECT * FROM role', function (err, results) {
            console.log(results);
        });
    }
    
    table3(){
    
        db.query('SELECT * FROM employee', function (err, results) {
            console.log(results);
        });
    }

    add1(x){   
        db.query(`INSERT INTO department (name) VALUES (?);`, x, function (err, results) {
            console.log("Department added!");
        });
    }

    add2(x, y, z){   
        db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);', [x, y, z], function (err, results) {
            console.log("Role added!");
        });
    }

    add3(x, y, z, q){   
        db.query('INSERT INTO employee (first_name, last_name, role_id, mmanager_id) VALUES (?, ?, ?, ?);', [x, y, z, q], function (err, results) {
            console.log("Employee added!");
        });
    }

    add4(x, y){   
        db.query('UPDATE employee SET role_id = ? WHERE id = ?', [x, y], function (err, results) {
            console.log("Employee Updated!");
        });
    }

    add5(x, y){   
        db.query('UPDATE employee SET mmanager_id = ? WHERE id = ?', [x, y], function (err, results) {
            console.log("Employee Updated!");
        });
    }

    delete1(x, y){

        if(x === 'employee'){   
            db.query('DELETE FROM employee WHERE id = ?', y, function (err, results) {
                console.log(results);
            });
        }else if(x === 'department'){
            db.query('DELETE FROM department WHERE id = ?', y, function (err, results){
                console.log(results);
            })
        }else if(x === 'role'){
            db.query('DELETE FROM role WHERE id = ?', y, function (err, results){
                console.log(results);
            })
        }

    }

    
}

    

module.exports = SCH;