// // const express = require('express')
// // const cors = require('cors')
// // const bodyParser = require('body-parser')
// // const app = express()
// // const fs = require("fs");
// // app.use(cors())
// // app.use(bodyParser.json())

// // app.post("/getDetails",(req,res)=>{
// //     // const {name,rno} = req.bodyParser;
// //     const {rno} = req.body;
// //     fs.readFile("sinfo.txt","utf-8",(err,f_content)=>{
// //         var records = f_content.split('\n');

// //         for(var i=0;i<records.length;i++)
// //         {
// //             rec = records[i].split(",");
// //             if(rec[0]==rno){
// //                 res.send(records[i]);
// //                 flag=1;
// //             }

// //             if(flag==0)
// //             {
// //                 res.send("No record exist");
// //             }
// //         }
// //     });



// // });


// // app.listen(4000,()=>{
// //     console.log("running on http://localhost:4000");
// // })
// const express = require("express")
// const multer = require("multer");
// const cors=require("cors")
// const path=require('path');
// const app=express();
// app.use(cors());
// const storage=multer.diskStorage({
//     destination:function(req,file,cb){cb(null,'uploadfile');},
//     filename: function(req,file,cb){cb(null,file.originalname);}
// });
// const upload=multer({storage: storage});
// app.post('/uploadfile',upload.single('file'),(req,res)=>{
//     res.send("File uploaded successfully");
// });
// app.listen(4000,()=>
//     {console.log("Server running on http://localhost:4000");});

const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')
const cookieParser = require('cookie-parser')
const salt = 10;

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"book"
})

app.post('/register',(req,res)=>{
    const data = req.body;
    console.log("hi"); 
    const sql = `Insert into users (name,email,password,phone,address,role,registration_date) values ('${req.body.name}','${req.body.email}','${req.body.password}',1234432,'${req.body.address}','${req.body.role}','${req.body.date_of_regi}')`;
//   //  bcrypt.hash(req.body.pass.toString(),salt,(err,hash)=>{
//         if(err){
//             return res.json({Error: "Error for hasing passsword"})
//         }
//         const values = [
//         req.body.name,
//         req.body.email,
//         req.body.pass
//     ]
//     })
    db.query(sql,(err,result)=>{
        if(err){
            return res.send('failed to insert');
        }
       //return res.json({Status:"Success"});
       return res.send("registered successfully");
    })

})

app.post('/login',(req,res)=>{
    const {email} = req.body;
    const sql = `select * from users where email = ?`
    db.query(sql,[email],(err,result)=>{
        if(err)
            return res.send('db not found')
        if(result.length==0)
        {
            return res.send("email doesnt exist")
        }
        // return res.send({Success:"Email found!"})
        return res.send("ok")
    })
})


// const db2 = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',          
//   password: '',          
//   database: 'book'
// });

// db2.connect(err => {
//   if (err) {
//     console.error('Database connection failed:', err.stack);
//     return;
//   }
//   console.log('Connected to MySQL database.');
// });


// app.get('/genre', (req, res) => {
//   db2.query('SELECT * FROM users', (err, results) => {
//     if (err) return res.status(500).send(err);
//     res.json(results);
//   });
// });

app.post('/getDetails',(req,res)=>{
    const {genre} = req.body;
    var sql="";
    if(genre === "all"){
        sql = `select * from books`
    }
    else{
        sql = `select * from books where genre = '${genre}'`
    }
    db.query(sql,(err,result)=>{
        if(err)
            return res.json({msg: 'Error found'})
        else
        {
    
            return res.json(result);
        }
        // return res.send({Success:"Email found"})
    })

})



app.listen(4000,()=>{
    console.log("running.....")
})