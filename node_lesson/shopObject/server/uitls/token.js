//token相关
//引入jsonwebtoken生成token
const jwt = require('jsonwebtoken');
let {salt,expiresIn} = require('../config');//导入token配置信息

//生成token
//jsonwebtoken使用：
// jsonwebtoken.sign(三个参数)
// 第一个参数：希望保存在token的数据
// 第二个参数：密钥，解密token的时候也要使用
// 第三个参数：token有效期
let createToken = (data)=>{
    return jwt.sign(data,salt,{
        expiresIn
    })
}
//检验token
let veifyToken = (token)=>{
    return new Promise(resolve=>{
        //验证token
        jwt.verify(token,salt,(err,info)=>{
            if(err)return resolve({status:0,message:err.message})
            resolve({status:1,info})
        })
    })
}
module.exports = {
    createToken,veifyToken
}