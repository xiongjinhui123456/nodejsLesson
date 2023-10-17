//导入mongoose
const mongoose = require('mongoose');
//连接mongodb
mongoose.connect(
    'mongodb://127.0.0.1:27017/db2380');

let con = mongoose.connection;
//数据库连接事件
con.on('connected',()=>{
    console.log('数据库连接成功')
});
con.on('disconnected',()=>{
    console.log('数据库连接失败');
})

