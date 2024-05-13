import mysql from "mysql"
import express, { Router } from "express"

const del = express.Router();


const db = mysql.createConnection({
    host:"192.168.1.187",
    user:"cmpuser",
    password:"CMP420",
    database:"nss",
    port:"3306"
})


function deleteDataFromTable(table, id, name,  res) {
    const q = `DELETE FROM ${table} WHERE ${name} = ?`;
    console.log(q);
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
    console.log(id + "-----");

    const name = req.params.name;

    deleteDataFromTable('employees', id, name,  res);
});

del.delete("/faculty/:id/:name", (req, res) => {
    const id = req.params.id;
    console.log(id + "-----");
    const name = req.params.name;    
    deleteDataFromTable('faculty', id, name,  res);
});

del.delete("/staff/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    deleteDataFromTable('staff', id, name,  res);
});

del.delete("/courses/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;

    deleteDataFromTable('courses', id, name,  res);
});

del.delete("/course_sections/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;

    deleteDataFromTable('course_sections', id, name,  res);
});

del.delete("/departments/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    deleteDataFromTable('departments', id, name,  res);
});

del.delete("/majors/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    deleteDataFromTable('majors', id, name,  res);
});

del.delete("/students/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;

    deleteDataFromTable('students', id, name,  res);
});

del.delete("/graduates/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;

    deleteDataFromTable('graduates', id, name,  res);
});

del.delete("/employers/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;

    deleteDataFromTable('employers', id, name,  res);
});

del.delete("/employment_records/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;

    deleteDataFromTable('employment_records', id, name,  res);
});

del.delete("/cheating_incidents/:id/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;

    deleteDataFromTable('cheating_incidents', id, name,  res);
});


export default del