const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))

app.get('/test_get',(req,res)=>{
  res.set('Access-Control-Allow-Origin', '*');
  console.log(req.query)
  let persons = [{name:'peiqi',age:18},{name:'suxi',age:19}]
  res.send(persons)
})

app.post('/test_post',(req,res)=>{
  res.set('Access-Control-Allow-Origin', '*');
  console.log(req.body)
  let persons = [{name:'qiaozhi',age:20},{name:'zhubaba',age:21}]
  res.send(persons)
})

app.listen(3000,()=>{
  console.log('服务器ok')
})