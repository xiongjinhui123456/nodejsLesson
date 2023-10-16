module.exports={
    port:8888, //配置服务器的端口号
    //配置项目中的正则
    nameReg:/^\w{3,11}$/,//名字长度3~11位
    ageReg:/^[1-9]\d?$/,//年龄
    pwdReg:/^.{6,16}$/,//密码
    // nikcReg:/^[\ue400-\u9fa5]{2,10}$/,
    //昵称
    //qq或163邮箱
    emailReg:/^[1-9a-zA-Z]\w{4,10}@(qq|163)\.com$/,
    //文件上传字段


}