//总路由表
const router = require('express').Router();
let {parse} = require('path');//解析文件路径
require('fs').readdirSync('./routers').forEach(filename=>{
    let{name} = parse(filename);//循环遍历router文件夹下的文件名
    name!='index'&& router.use(`/${name}`,require(`./${name}`))
})
//导出
module.exports = {
    router
}
