//导入mongoose模块
const mongodb = require('mongoose')
//连接mongodb数据库
mongodb.connect('mongodb://127.0.0.1:27017/db2308');
let con = mongodb.connection;
// 数据库连接事件
con.on('connected',()=>{
    console.log('数据库连接成功');
});
con.on('disconnected',()=>{
    console.log('数据库连接失败');
})
