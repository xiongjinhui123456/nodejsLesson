//http模块导入
const http = require('http')
//使用creatServer方法创建一个web服务
const server = http.createServer(()=>{
    console.log(666);
})
//给创建的web服务监听端口号
server.listen(8080,()=>{
    console.log('服务器启动成功，地址：http:127.0.0.1:8080');
})