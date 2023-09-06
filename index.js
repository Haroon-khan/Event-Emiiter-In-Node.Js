const express = require('express')
const EventEmitter = require ('events');
const app = express ();
const event = new EventEmitter();

let count = 0 

event.on("countApi",()=>{
  count++;
  console.log("Event Called",count)
})

app.get('/',(req,res)=>{
  res.send("Get Api Called")
  event.emit("Count Api")
})

app.get('/search',(req,res)=>{
  res.send("Search Api Called")
})

app.get('/update',(req,res)=>{
  res.send("Update Api Called")
})


app.listen(7000);
