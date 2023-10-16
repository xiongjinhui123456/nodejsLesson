//搭建服务器
//导入配置信息
let {port} = require('./config');
const express = require('express');
const app = express();
app.listen(port, () => {
    console.log(`服务器启动成功,请求地址:http:127.0.0.1:${port}`);
})
//设置跨域资源共享
app.use(require('cors')());
//解析post请求携带的数据
app.use(express.urlencoded({extends:false}));
app.use(express.json());
//上传图片文件托管
app.use(express.static('./uploads'));

//导入数据库连接
require('./mongoDBopt/connect.js')