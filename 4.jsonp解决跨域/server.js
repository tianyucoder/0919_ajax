//引入express
const express = require('express')
//实例一个app服务对象
const app = express()
//使用中间件解析post请求请求体中以urlencoded编码形式的参数
app.use(express.urlencoded({extended:true}))
//使用中间件解析post请求请求体中以json编码形式的参数
app.use(express.json())

//配置路由
app.get('/test_get',(request,response)=>{
  const {callback} = request.query
  console.log(callback)
  let persons = [{name:'kobe',age:18},{name:'wade',age:19}]
  response.send(`${callback}(${JSON.stringify(persons)})`)
})

//4.绑定端口监听
app.listen(3000,(err)=>{
  if(!err) {
    console.log('小兄弟，必须通过编译器打开html页面，制造跨域问题，随后解决')
  }
  else console.log(err)
})