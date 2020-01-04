const express = require('express')
const db = require('./db')

const app = express()
app.use(express.urlencoded({extended:true}))

db(()=>{
  //注册路由
  app.get('/demo',(req,res)=>{
    res.send('ok')
  })

  app.listen(3000,(err)=>{
    if(!err) console.log('服务器启动成功')
    else console.log(err)
  })
},(err) => console.log(err))



