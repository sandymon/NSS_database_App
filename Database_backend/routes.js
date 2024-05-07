import mysql from "mysql"
import express from "express"


const app = express.Router();



const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"cmp420",
    database:"nss",
    port:"8000"
})




app.get("/", (req,res)=>{
    res.json("hello this is the backend")
})


function getDataFromTable(table, res) {
    const q = `SELECT * FROM ${table}`;
    db.query(q, (error, data) => {
        if (error) return res.json(error);
        return res.json(data);
    });
}

app.get("/employees", (req, res) => {
    getDataFromTable('Employees', res);
});

app.get("/faculty", (req, res) => {
    getDataFromTable('Faculty', res);
});

app.get("/staff", (req, res) => {
    getDataFromTable('Staff', res);
});

app.get("/courses", (req, res) => {
    getDataFromTable('Courses', res);
});


// Get request for Courses
app.get("/course_sections", (req, res) => {
    getDataFromTable('course_sections', res);
});


// Get request for Departments
app.get("/departments", (req, res) => {
    getDataFromTable('departments', res);
});

// Get request for Majors
app.get("/majors", (req, res) => {
    getDataFromTable('Majors', res);
});



// Get request for Students
app.get("/students", (req, res) => {
    getDataFromTable('students', res);

});

// Get request for Graduates
app.get("/graduates", (req, res) => {
    getDataFromTable('graduates', res);

});

// Get request for Employers
app.get("/employers", (req, res) => {
    getDataFromTable('employers', res);

});

// Get request for Employment_Records
app.get("/employment_records", (req, res) => {
    getDataFromTable('employment_records', res);

});

// Get request for Cheating_Incidents
app.get("/cheating_incidents", (req, res) => {
    getDataFromTable('cheating_incidents', res);

});

export default app;
