/*
* 该文件负责连接数据库
* */
const mongoose = require('mongoose')

function connectDB(success,error) {
  mongoose.connect('mongodb://localhost:27017/atguigu',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  mongoose.connection.on('open',(err)=>{
    if(!err){
      console.log('数据库连接成功')
      success()
    }else{
      console.log(err)
      error('数据库连接失败')
    }
  })
}

module.exports = connectDB
