//异常、404中间件模块
const moment = require('moment') 
moment.locale('zh-cn')//设定moment区域为中国
const fs =require('fs')

//错误处理中间件
let errHandler = (err,req,res,next)=>{
    //执行到错误函数，则判断是否有文件上传，如果有则同步删除
    if(req.file) fs.unlinkSync(req.file.path);
    //响应数据
    res.send({
        code:err.code??0,
        //报错后没有返回code则返回code值为0，有返回code值则不做操作
        message:'err.message'
    });
    //书写错误数据
    let errStr = `${req.url}-----${req.method}----`
    errStr += `${moment().format('LLLL')}------${err.message}${require('os').EOL}`
    fs.appendFileSync('./log/err.log',errStr);//文件内同步插入数据
}
//404中间件
let notFound = (req,res)=>{
    res.status(404).send(`请求地址${req.url}页面不存在`);
}
module.exports = {
    errHandler,notFound
}