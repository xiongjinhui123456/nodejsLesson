// 搭建简易的服务器
// 1. 导入express
const express = require('express');
// 2. 创建服务
const app = express();
// 3. 监听端口
app.listen(8090, () => console.log('服务启动'))

// use传递的第一个参数 相当于是请求的虚拟路径
app.use('/public', express.static('./static'))
app.get('/data', (req, res) => {
    // 获取get请求携带的数据
    // express中的将get请求携带的数据解析在 req请求对象的 query属性中
    console.log(req.qurey)
    res.send({
        code: 1,
        msg: 'ok',
        info: req.query
    })
})