const express=require('express');
const dbConnect=require('./DbConnect')

const app=express();
const port=4000;

app.get('/',(req,res)=>{
    res.status(200).send('ok from serverrrrrrrrrrrr');
})

dbConnect();



app.listen(port,()=>{
    console.log(`listeining to ${port}`);
})