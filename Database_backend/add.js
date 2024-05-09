import mysql from "mysql"
import express from "express"


const add = express.Router();



const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"cmp420",
    database:"nss",
    port:"8000"
})


function insertDataIntoTable(table, req, res) {
    const fields = Object.keys(req.body);
    const placeholders = fields.map(() => '?').join(',');
    const q = `INSERT INTO ${table} (${fields.join(',')}) VALUES(${placeholders})`;
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

// Route handler for adding data to Course_Sections table
add.post("/course_sections", (req, res) => {
    insertDataIntoTable('Course_Sections', req, res);
});

// Route handler for adding data to Departments table
add.post("/departments", (req, res) => {
    insertDataIntoTable('Departments', req, res);
});

// Route handler for adding data to Majors table
add.post("/majors", (req, res) => {
    insertDataIntoTable('Majors', req, res);
});

// Route handler for adding data to Students table
add.post("/students", (req, res) => {
    insertDataIntoTable('Students', req, res);
});

// Route handler for adding data to Graduates table
add.post("/graduates", (req, res) => {
    insertDataIntoTable('Graduates', req, res);
});

// Route handler for adding data to Employers table
add.post("/employers", (req, res) => {
    insertDataIntoTable('Employers', req, res);
});

// Route handler for adding data to Employment_Records table
add.post("/employment_records", (req, res) => {
    insertDataIntoTable('Employment_Records', req, res);
});

// Route handler for adding data to Cheating_Incidents table
add.post("/cheating_incidents", (req, res) => {
    insertDataIntoTable('Cheating_Incidents', req, res);
});

export default add