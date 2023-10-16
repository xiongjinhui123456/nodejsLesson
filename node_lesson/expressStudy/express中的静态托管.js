const express = require('express')//导入express
const app = express()//创建app服务
app.listen(8000, () => {//监听app服务端口
    console.log('服务器启动,http:127.0.0.1:8000')
})
/*
express中对静态资源的托管（请求响应）特别方便
   express有static方法，
    -语法：express.static(根目录)
    -返回值：返回一个请求处理函数
   配合express的use方法来托管静态资源；
    -express服务.use(express.static(根目录))
    所有请求都会执行express.static(根目录)返回的处理函数
    +会在传入的根目录中查找请求地址对应的文件资源是否存在，如果存在则响应文件内容，不存在则执行后续的路由匹配

express的use用法:
任何请求方式,只要请求地址是 /xxx/ 开头 都能匹配(执行处理函数)
app.use('/xxx',()=>{})
use方法的第一个参数可以不传递,只传递处理函数，
任何请求,任何请求地址都会执行对应的处理函数，
app.use((req, res, next) => {
    console.log('执行', req.url, req.method)
})
*/
// 静态资源托管
// app.use(express.static('./static'))
// use传递的第一个参数 相当于是请求的虚拟路径
app.use(express.static('./node_modules'))
app.get('/list',(req,res)=>{
    res.send({code:1,message:'ok'})
})