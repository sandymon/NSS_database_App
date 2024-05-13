import mysql from "mysql"
import express from "express"


const add = express.Router();



const db = mysql.createConnection({
    host:"192.168.1.187",
    user:"cmpuser",
    password:"CMP420",
    database:"nss",
    port:"3306"
})


function insertDataIntoTable(table, req, res) {
    const fields = Object.keys(req.body);
    const placeholders = fields.map(() => '?').join(',');
    const q = `INSERT INTO ${table} (${fields.join(',')}) VALUES(${placeholders})`;
    const values = fields.map(field => req.body[field]);

    db.query(q, values, (error, data) => {
        if (error) return res.json({error: error, errorState: true });
        return res.json(`${table.slice(0, -1)} has been added`);
    });
}

add.post("/employees", (req, res) => {
    insertDataIntoTable('employees', req, res);
});

add.post("/faculty", (req, res) => {
    insertDataIntoTable('faculty', req, res);
});

add.post("/staff", (req, res) => {
    insertDataIntoTable('Staff', req, res);
});

add.post("/courses", (req, res) => {
    insertDataIntoTable('courses', req, res);
});

// Route handler for adding data to Course_Sections table
add.post("/course_sections", (req, res) => {
    insertDataIntoTable('course_sections', req, res);
});

// Route handler for adding data to Departments table
add.post("/departments", (req, res) => {
    insertDataIntoTable('departments', req, res);
});

// Route handler for adding data to Majors table
add.post("/majors", (req, res) => {
    insertDataIntoTable('majors', req, res);
});

// Route handler for adding data to Students table
add.post("/students", (req, res) => {
    insertDataIntoTable('students', req, res);
});

// Route handler for adding data to Graduates table
add.post("/graduates", (req, res) => {
    insertDataIntoTable('graduates', req, res);
});

// Route handler for adding data to Employers table
add.post("/employers", (req, res) => {
    insertDataIntoTable('employers', req, res);
});

// Route handler for adding data to Employment_Records table
add.post("/employment_records", (req, res) => {
    insertDataIntoTable('employment_records', req, res);
});

// Route handler for adding data to Cheating_Incidents table
add.post("/cheating_incidents", (req, res) => {
    insertDataIntoTable('cheating_incidents', req, res);
});

export default add