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


app.post("/employees", (req,res)=>{
    const q = "INSERT INTO Employees (emplid, name, ssn, phone, email, address, office_location, date_of_hire, role) VALUES(?,?,?,?,?,?,?,?,?)"
    const values = [
        req.body.emplid,
        req.body.name,
        req.body.ssn,
        req.body.phone,
        req.body.email,
        req.body.address,
        req.body.office_location,
        req.body.date_of_hire,
        req.body.role
    ]

    db.query(q,values, (error,data)=>{
        if(error) return res.json(error)
            return res.json("Employee has Been added")
    })

 })


app.get("/", (req,res)=>{
    res.json("hello this is the backend")
})


// Get request for Employees
app.get("/employees", (req, res) => {
    const q = "SELECT * FROM employees;";
    db.query(q, (error, data) => {
        if (error) return res.json(error);
        return res.json(data);
    });
});

// Get request for Faculty
app.get("/faculty", (req, res) => {
    const q = "SELECT * FROM faculty;";
    db.query(q, (error, data) => {
        if (error) return res.json(error);
        return res.json(data);
    });
});

// Get request for Staff
app.get("/staff", (req, res) => {
    const q = "SELECT * FROM Staff;";
    db.query(q, (error, data) => {
        if (error) return res.json(error);
        return res.json(data);
    });
});

// Get request for Courses
app.get("/courses", (req, res) => {
    const q = "SELECT * FROM Courses;";
    db.query(q, (error, data) => {
        if (error) return res.json(error);
        return res.json(data);
    });
});

// Get request for Courses
app.get("/course_sections", (req, res) => {
    const q = "SELECT * FROM course_sections;";
    db.query(q, (error, data) => {
        if (error) return res.json(error);
        return res.json(data);
    });
});


// Get request for Departments
app.get("/departments", (req, res) => {
    const q = "SELECT * FROM Departments;";
    db.query(q, (error, data) => {
        if (error) return res.json(error);
        return res.json(data);
    });
});

// Get request for Majors
app.get("/majors", (req, res) => {
    const q = "SELECT * FROM Majors;";
    db.query(q, (error, data) => {
        if (error) return res.json(error);
        return res.json(data);
    });
});

// Get request for Students
app.get("/students", (req, res) => {
    const q = "SELECT * FROM Students;";
    db.query(q, (error, data) => {
        if (error) return res.json(error);
        return res.json(data);
    });
});

// Get request for Graduates
app.get("/graduates", (req, res) => {
    const q = "SELECT * FROM Graduates;";
    db.query(q, (error, data) => {
        if (error) return res.json(error);
        return res.json(data);
    });
});

// Get request for Employers
app.get("/employers", (req, res) => {
    const q = "SELECT * FROM Employers;";
    db.query(q, (error, data) => {
        if (error) return res.json(error);
        return res.json(data);
    });
});

// Get request for Employment_Records
app.get("/employment_records", (req, res) => {
    const q = "SELECT * FROM Employment_Records;";
    db.query(q, (error, data) => {
        if (error) return res.json(error);
        return res.json(data);
    });
});

// Get request for Cheating_Incidents
app.get("/cheating_incidents", (req, res) => {
    const q = "SELECT * FROM Cheating_Incidents;";
    db.query(q, (error, data) => {
        if (error) return res.json(error);
        return res.json(data);
    });
});

export default app;
