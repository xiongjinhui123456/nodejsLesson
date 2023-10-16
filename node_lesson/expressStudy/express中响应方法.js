//导入express
const express = require('express');
//创建服务
const app = express();
//监听端口
app.listen(8080, () => { console.log('服务器启动'); })
//完善服务
app.use('/api', (req, res) => {
    //use请求方式获取到的请求地址是/api后面部分的请求地址
    res.end(JSON.stringify({
        code: 1,
        message: 'use请求成功',
        info: {
            url: req.url
        }
    }))
})
app.get('/list', (req, res) => {
    // express中给响应对象添加了不少响应方法
    // 1、res.end(JSON.stringify({
    //     code: 1,
    //     msg: '请求成功---get',
    //     info: {
    //       url: req.url
    //     }
    //   }))

    //2、json响应方法传递数据（对象数组等数据）
    // res.json({
    //     code: 1,
    //     'message': 'json----->okk',
    //     info: { url: req.url }
    // })
    // res.json('<b>666</b>') // 响应的html格式字符串不会解析
    //3、send响应方法传递数据
    // res.send({
    //     code: 1,
    //     message: 'send------>okk'
    // })
    // res.send('<b>666</b>')//html格式字符串可以解析
    //4、sendFile传递文件绝对路径，响应文件数据
    // res.sendFile(require('path').resolve('./package.json'))//拼接为绝对路径
    
    //5、sendStatus设置状态码
    // res.sendStatus(301)
    
    //6、starus(状态码).send(响应数据)
    res.status(404).send('werr')
})