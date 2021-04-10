const express = require('express');
const mysqlConnection = require('./conn');
const app = express();
const bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const mysql = require('./conn');

app.use(express.static(__dirname+'/public'));


app.get('/lists',function(req,res){
    mysqlConnection.query(`Select * from todolist`,function(err,rows,field){
        if(!err){
            res.send(rows);
        }else{
            res.send(err);
        }
    })
})


app.post('/lists',function(req,res){
    mysqlConnection.query(`Insert into todolist(todo) values('${req.body.list}')`,function(err,rows,field){
        if(!err){
            console.log(rows);
        }else{
            console.log(err);
        }
    })
})


app.post('/complist',function(req,res){
    console.log(req.body.post);
    mysqlConnection.query(`Insert into todolist(id,todo) values(${req.body.id},'${req.body.post}')`,function(err,rows,field){
        if(!err){
            console.log(rows);
        }else{
            console.log(err);
        }
    })
})

app.delete('/lists/:id',function(req,res){
    mysqlConnection.query(`Delete from todolist where id=${req.params.id}`,function(err,rows){
        if(!err){
            console.log(rows);
            res.send(rows);
        }else{
            console.log(err);
            res.send(err);
        }
    })
})



app.get('/complete',function(req,res){
    mysqlConnection.query(`Select * from completed`,function(err,rows,field){
        if(!err){
            res.send(rows);
        }else{
            res.send(err);
        }
    })
})

app.post('/complete',function(req,res){
    mysqlConnection.query(`Insert into completed(id,complete) values('${req.body.id}','${req.body.post}')`,function(err,rows,field){
        if(!err){
            console.log(rows);
        }else{
            console.log(err);
        }
    })
})



app.delete('/complete/:id',function(req,res){
    mysqlConnection.query(`Delete from completed where id=${req.params.id}`,function(err,rows){
        if(!err){
            console.log(rows);
            res.send(rows);
        }else{
            console.log(err);
            res.send(err);
        }
    })
})


app.put('/lists/:id',function(req,res){
    console.log(req.body.id);
    mysqlConnection.query(`Update todolist Set todo='${req.body.edit}' where id=${req.body.id}`,function(err,rows,field){
        if(!err){
            console.log(rows);
            res.send(rows);
        }else{
            console.log(err);
            res.send(err);
        }
    })
})








app.listen(3000);