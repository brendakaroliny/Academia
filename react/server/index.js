const express = require("express");
const app = express();
const mysql = require ("mysql2");
const cors = require ("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "crudgame",
});

app.use(cors());
app.use(express.json());

app.post("/register",(req,res)=>{
    const{nome} = req.body;
    const{cost} = req.body;
    const{category} = req.body;

   let SQL =  "INSERT INTO `games` (`nome`, `cost`, `category`) VALUES (?, ?, ?)";
   db.query(SQL,[nome,cost,category],(err,result) =>{
    console.log(err);
   })
})


app.listen(3001,()=>{
    console.log("rodando o servidor");
});