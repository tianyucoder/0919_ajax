const express = require('express')
const db = require('./db')
const citiesModel = require('./model/citiesModel')

const app = express()
app.use(express.urlencoded({extended:true}))

db(()=>{
  //注册路由--返回中国所有省份信息
  app.get('/get_all_province',(req,res)=>{
    res.set('Access-Control-Allow-Origin', '*');
    citiesModel.find({level:1},{name:1,province:1,_id:0},(err,data)=>{
     if(!err){
       res.send({status:1,data})
     }else{
       res.send({status:0,msg:'查询数据失败'})
     }
    })
  })

  //根据省份编码获取该省份下所有城市信息
  app.get('/get_cities_by_province',(req,res)=>{
    res.set('Access-Control-Allow-Origin', '*');
    const {province} = req.query
    citiesModel.find({level:2,province},{city:1,name:1,_id:0},(err,data)=>{
      if(!err){
        res.send({status:1,data})
      }else{
        res.send({status:0,msg:'查询数据失败'})
      }
    })
  })

  //根据省份编码、城市编码获取某省下某市下的所有区县信息
  app.get('/get_counties_by_province_and_city',(req,res)=>{
    res.set('Access-Control-Allow-Origin', '*');
    const {province,city} = req.query
    citiesModel.find({level:3,province,city},{code:1,name:1,_id:0},(err,data)=>{
      if(!err){
        res.send({status:1,data})
      }else{
        res.send({status:0,msg:'查询数据失败'})
      }
    })
  })

  app.listen(3000,(err)=>{
    if(!err) console.log('服务器启动成功')
    else console.log(err)
  })
},(err) => console.log(err))



