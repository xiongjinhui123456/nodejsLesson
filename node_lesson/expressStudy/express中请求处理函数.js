//搭建简易的服务器
const express=require('express');//导入express
const app = express();//创建一个app服务
app.listen(8000,()=>{console.log('服务器启动,http://127.0.0.1:8000');})
//完善app服务

//可以先定义好请求处理函数，再将函数变量作为参数传入请求方法的请求处理函数中
let fn1 = (req,res,next)=>{
    console.log('第一个函数');
    req.name='zs';
    next()
}
let fn2 = (req,res,next)=>{
    console.log('第二个函数',req.name);
    req.age=22;
    next()
}
let fn3 = (req,res,next)=>{
    console.log('第三个函数',req.name,req.age);
    req.gender='man';
    // res.send({ code: 1, msg: 'ok-2' })
    next()
}
let fn4 = (req,res)=>{
    console.log('第四个函数',req.name,req.age,req.gender);
    res.send({
        info:{name:req.name}
    })
}
app.get('/list',fn1,fn2,fn3,fn4)
    /*
    nodejs中的路由组成部分
    请求方式：和请求方法匹配
    请求地址：和请求方法的第一个参数相匹配
    请求处理函数：请求方式和请求地址都匹配时执行的函数
    一个路由的请求处理函数可以有多个处理函数，所有处理函数的请求对象和响应对象是通用的
    请求处理函数的参数：
        第一个参数：请求对象
        第二个参数：响应对象
        第三个参数：一个函数，函数调用不传参则执行下一个请求处理函数，函数调用传参则会执行错误处理

    注意：一个路由请求，只能响应一次
    */

