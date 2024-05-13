import mysql from "mysql"
import express from "express"


const add = express.Router();



const db = mysql.createConnection({
    host:"192.168.1.187",
    user:"cmpuser",
    password:"CMP420",
    database:"nss",
})


function insertDataIntoTable(table, req, res) {
    const fields = Object.keys(req.body);
    const placeholders = fields.map(() => '?').join(',');
    const q = `UPDATE ${table} SET (${fields.join(',')}) VALUES(${placeholders})`;
    const values = fields.map(field => req.body[field]);

    db.query(q, values, (error, data) => {
        if (error) return res.json(error);
        return res.json(`${table.slice(0, -1)} has been added`);
    });
}

add.post("/employees", (req, res) => {
    insertDataIntoTable('Employees', req, res);
});

add.post("/faculty", (req, res) => {
    insertDataIntoTable('Faculty', req, res);
});

add.post("/staff", (req, res) => {
    insertDataIntoTable('Staff', req, res);
});

add.post("/courses", (req, res) => {
    insertDataIntoTable('Courses', req, res);
});

add.get("/employees", (req, res) => {
    getDataFromTable('Employees', res);
});

add.get("/faculty", (req, res) => {
    getDataFromTable('Faculty', res);
});

add.get("/staff", (req, res) => {
    getDataFromTable('Staff', res);
});

add.get("/courses", (req, res) => {
    getDataFromTable('Courses', res);
});


// Get request for Courses
add.get("/course_sections", (req, res) => {
    getDataFromTable('course_sections', res);
});


// Get request for Departments
add.get("/departments", (req, res) => {
    getDataFromTable('departments', res);
});

// Get request for Majors
add.get("/majors", (req, res) => {
    getDataFromTable('Majors', res);
});



// Get request for Students
add.get("/students", (req, res) => {
    getDataFromTable('students', res);

});

// Get request for Graduates
add.get("/graduates", (req, res) => {
    getDataFromTable('graduates', res);

});

// Get request for Employers
add.get("/employers", (req, res) => {
    getDataFromTable('employers', res);

});

// Get request for Employment_Records
add.get("/employment_records", (req, res) => {
    getDataFromTable('employment_records', res);

});

// Get request for Cheating_Incidents
add.get("/cheating_incidents", (req, res) => {
    getDataFromTable('cheating_incidents', res);

});

export default add