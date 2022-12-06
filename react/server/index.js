const express = require("express");
const app = express();
const mysql = require ("mysql2");
const cors = require ("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "academia",
});

app.use(cors());
app.use(express.json());

app.post("/register",(req,res)=>{
    const{name} = req.body;
    const{email} = req.body;
    const{celualr} = req.body;
    const{telefone} = req.body;
    const{cpf} = req.body;
    const{rg} = req.body;
    const{capital} = req.body;
    const{local} = req.body;

   let SQL =  " INSERT INTO `formulario` (`nome`, `email`, `celualr`, `telefone`, `cpf`, `rg`, `capital`, `local`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  
   db.query(SQL,[name,email,celualr,telefone,cpf,rg,capital,local],(err,result) =>{
    console.log(err);
   })
})


app.listen(3001,()=>{
    console.log("rodando o servidor");
});