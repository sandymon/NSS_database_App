import express from "express"
import mysql from "mysql"
import cors from "cors"
import routes from './routes.js'; 

const app = express()

app.use(express.json())
app.use(cors())
// if there is a auth problem
// ALTER USER 'root'@'localhost' INDETIFIED WITH mysql_native _password  by 'cmp420'



app.use('/', routes)



app.listen(8100, ()=> {
    console.log("Connected to backend!")
})
