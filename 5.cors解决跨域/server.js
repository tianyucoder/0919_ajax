//引入express
const express = require('express')
//实例一个app服务对象
const app = express()
//使用中间件解析post请求请求体中以urlencoded编码形式的参数
app.use(express.urlencoded({extended:true}))
//使用中间件解析post请求请求体中以json编码形式的参数
app.use(express.json())
//暴露静态资源，目的是不产跨域问题
app.use(express.static(__dirname+'/public'))

//配置路由
app.get('/test_get',(request,response)=>{
  response.set('Access-Control-Allow-Origin', '*');
  console.log('请求携带的参数是：',request.query)
  let persons = [{name:'kobe',age:18},{name:'wade',age:19}]
  response.send(persons)
})

//配置路由
app.post('/test_post',(request,response)=>{
  response.set('Access-Control-Allow-Origin', '*');
  console.log('请求携带的参数是：',request.body)
  response.send('你发过来的是post请求，我是服务器返回的一些数据')
})

//4.绑定端口监听
app.listen(3000,(err)=>{
  if(!err) {
    console.log('小兄弟，必须通过编译器打开html页面，制造跨域问题，后端已经通过cors解决了跨域问题')
  }
  else console.log(err)
})