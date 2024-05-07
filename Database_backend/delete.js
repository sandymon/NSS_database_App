import mysql from "mysql"
import express, { Router } from "express"

const del = express.Router();


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"cmp420",
    database:"nss",
    port:"8000"
})

function deleteDataFromTable(table, id, name,  res) {
    const q = `DELETE FROM ${table} WHERE ${name} = ?`;

    db.query(q, [id,name],  (error, result) => {
        if (error) return res.json(error);
        if (result.affectedRows === 0) {
            return res.json({ message: 'No data deleted' });
        } else {
            return res.json({ message: 'Data deleted successfully' });
        }
    });
}

del.delete("/employees/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;

    deleteDataFromTable('Employees', id, name,  res);
});

del.delete("/faculty/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;    
    deleteDataFromTable('Faculty', id, name,  res);
});

del.delete("/staff/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    deleteDataFromTable('Staff', id, name,  res);
});

del.delete("/courses/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;

    deleteDataFromTable('Courses', id, name,  res);
});

del.delete("/course_sections/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;

    deleteDataFromTable('Course_Sections', id, name,  res);
});

del.delete("/departments/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    deleteDataFromTable('Departments', id, name,  res);
});

del.delete("/majors/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    deleteDataFromTable('Majors', id, name,  res);
});

del.delete("/students/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;

    deleteDataFromTable('Students', id, name,  res);
});

del.delete("/graduates/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;

    deleteDataFromTable('Graduates', id, name,  res);
});

del.delete("/employers/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;

    deleteDataFromTable('Employers', id, name,  res);
});

del.delete("/employment_records/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;

    deleteDataFromTable('Employment_Records', id, name,  res);
});

del.delete("/cheating_incidents/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;

    deleteDataFromTable('Cheating_Incidents', id, name,  res);
});


export default del