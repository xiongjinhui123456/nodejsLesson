//正则工具模块=====>正则校验函数
//导入正则表达式
let {nameReg,ageReg,pwdReg,nikcReg,emailReg} = require('../config');

//基础柯里化正则校验函数
let regTest = (reg)=>{
    return (val)=>{
        return reg.test(val)
    }
}


let nameTest = regTest(nameReg);
let ageTest = regTest(ageReg);
let pwdTest = regTest(pwdReg);
let nickTest = regTest(nikcReg);
let emailTest = regTest(emailReg);

//导出
module.exports ={
    nameTest,ageTest,pwdTest,nickTest,emailTest
}