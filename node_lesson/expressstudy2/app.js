//搭建web服务
const express = require('express')
const app = express()
app.listen(8000,()=>{
    console.log('8000服务启动');
})
//跨域资源共享中间件  cors()
const cors = require('cors');
//设置跨域资源共享
app.use(cors());

//静态资源托管
app.use(express.static(''))
