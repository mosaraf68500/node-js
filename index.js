const express=require('express');
const phones= require('./phones.json')
const app=express();
const port=2000;
app.get('/', ( req,res) => {
res.send("hello my first node js work");


})

app.get('/phones', (req, res)=>{
    res.send(phones);

    
})

app.get('/phones/:id',(req,res)=>{
    const id =parseInt(req.params.id);
    console.log( 'phones id is :',id);
    const phone=phones.find(phone=> phone.id=== id)||{};
    res.send(phone);
    
})
app.get('/data',(req,res)=>{
    res.send('it is more data toon soon');
})
app.listen(port, ()=>{
    console.log(`example app listen on port ${port}`)
})