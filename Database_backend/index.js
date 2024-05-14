import express from "express"
import mysql from "mysql"
import cors from "cors"
import routes from './routes.js'; 
import add from "./add.js";
import del from "./delete.js";
import update from "./update.js"

const app = express()

app.use(express.json())
app.use(cors())
// if there is a auth problem
// ALTER USER 'root'@'localhost' INDETIFIED WITH mysql_native _password  by 'cmp420'



app.use('/', routes, add, del,update)




app.listen(8100, ()=> {
    console.log("Connected to backend!")
})
