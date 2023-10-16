const mongoose = require('mongoose');
//连接mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/db8')
//获取连接对象
const con = mongoose.connection;
// 绑定数据库连接状态事件
con.on('connected',()=>{
    console.log('连接数据库成功');
})
con.on('disconnected',()=>{
    console.log('连接数据库失败');
})
