import mysql from "mysql"
import express from "express"


const add = express.Router();



const db = mysql.createConnection({
    host:"192.168.1.187",
    user:"cmpuser",
    password:"CMP420",
    database:"nss",
})


function updateDataIntoTable(table, req, res) {
    const id = req.params.id;
    const name = req.params.name;
    const fields = Object.keys(req.body);
    const setClause = fields.map(field => `${field} = ?`).join(", ");
    const values = fields.map(field => req.body[field]);
   // values.push(id); // Add the id value at the end for the WHERE clause

    const q = `UPDATE ${table} SET ${setClause} WHERE ${name} = ${id}`;

    db.query(q, values, (error, data) => {
        if (error) return res.json(error);
        return res.json(`${table.slice(0, -1)} has been updated`);
    });
}


add.put("/employees/:id/:name", (req, res) => {


    updateDataIntoTable('employees', req,   res);
});

add.put("/faculty/:id/:name", (req, res) => {
    updateDataIntoTable('faculty', req,   res);
});

add.put("/staff/:id/:name", (req, res) => {
    updateDataIntoTable('staff', req,   res);
});

add.put("/courses/:id/:name", (req, res) => {

    updateDataIntoTable('courses', req,   res);
});

add.put("/course_sections/:id/:name", (req, res) => {

    updateDataIntoTable('course_sections', req,   res);
});

add.put("/departments/:id/:name", (req, res) => {
    updateDataIntoTable('departments', req,   res);
});

add.put("/majors/:id/:name", (req, res) => {
    updateDataIntoTable('majors', req,   res);
});

add.put("/students/:id/:name", (req, res) => {

    updateDataIntoTable('students', req,   res);
});

add.put("/graduates/:id/:name", (req, res) => {

    updateDataIntoTable('graduates', req,   res);
});

add.put("/employers/:id/:name", (req, res) => {

    updateDataIntoTable('employers', req,   res);
});

add.put("/employment_records/:id/:name", (req, res) => {

    updateDataIntoTable('employment_records', req,   res);
});

add.put("/cheating_incidents/:id/:name", (req, res) => {

    updateDataIntoTable('cheating_incidents', req,   res);
});


export default add


