const express= require('express');
const mysql=require('mysql');
const cors=require('cors');
const app=express();
app.use(cors());

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"signup"
})
app.post('/register',(req,res)=>{
    const sql="INSERT INTO logincheck (`name`,`email`,`password`) VALUES (?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql,[values],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Values Inserted");
        }
    })
})
app.listen(8081,()=>{
    console.log("Connected");
})