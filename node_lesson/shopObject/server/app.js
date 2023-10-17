//导入配置信息
let { port } = require('./config')
//导入express
const express = require('express');
const app = express();
app.listen(8888, () => {
    console.log(`服务启动成功,
    地址:http://127.0.0.1:${port}`)
})

//设置跨域资源共享
app.use(require('cors')());
//解析url-encoded格式的请求体数据
app.use(express.urlencoded({
    extends: false
}));
//解析JSON格式的请求体数据
app.use(express.json())
//静态托管上传文件
app.use(express.static('./uploads'))

//导入数据库连接
require('./db/connect.js');
//导入路由
require('./routers');

//导入异常处理中间件及404中间件
let{errHandler,notFound} = require('./middleware/err404.js')

//错误处理中间件
app.use(errHandler);
//404中间件
app.use(notFound);


