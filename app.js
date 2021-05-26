const express=require('express');
const app=express();
const pool=require('./db');

app.use(express.json());
/*
    topic_name , topic_description , is_lock ,  is_flag, is_draft, category_id, createdat, updatedat*/
app.post('/newtopic',async(req,res)=>{
    try{
            const {name,description,is_lock,is_draft,is_flag,category}=req.body;
            const newtopic= await pool.query("INSERT INTO topics( topic_name , topic_description , is_lock ,  is_flag, is_draft, category_id, createdat, updatedat) values($1, $2, $3,$4,$5,$6, now(), now()) RETURNING *",
            [name,description,is_lock,is_flag,is_draft,category]);
            res.json(newtopic.rows[0])
        }catch(err){
            console.log(err.message);
        }
    });
app.post('/testlang',async(req,res)=>{
    try{
        const {language}=req.body;
        const newlang= await pool.query("INSERT INTO languages(language_name, createdat, updatedat) values($1, now(), now()) RETURNING *",
        [language]);
        res.json(newlang.rows[0])
    }catch(err){
        console.log(err.message);
    }
});

app.get('/',async(req,res)=>{
    try{
        const topics= await pool.query("SELECT topic_id, topic_name, topic_description, is_lock  FROM topics ");
        res.json(topics.rows);
    }catch(err){
        console.log(err.message);
    }
});
// change * in query
app.get('/topic/:id',async(req,res)=>{
    try{
        const {id} =req.params;
        const topic= await pool.query("SELECT * FROM posts WHERE topic_id=$1 ",[id]);
        if(topic.rows.length===0){
            res.json({text:"no posts under this topic",status:false})
        }
        res.json(topic.rows[0]);
    }catch(err){
        console.log(err.message);
    }
});

app.listen(4000,()=>{
    console.log("Listening to onemic server 4000....")
})