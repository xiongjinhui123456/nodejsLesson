//配置信息
module.exports = {
    port:8888,//服务器端口号

    //正则规则
    nameReg:/^\w{3,11}$/,
    ageReg: /^[1-9]\d?$/,
    pwdReg: /^.{6,16}$/,
    nikcReg: /^[\u4e00-\u9fa5]{2,10}$/,
    // qq或163邮箱
    emailReg: /^[1-9a-zA-Z]\w{4,10}@(qq|163)\.com$/,
    // 文件上传字段
    field: 'avator', // 上传文件 字段
    // 发送邮件配置信息  发送邮件的邮箱及授权码
    user: 'leoncoder@163.com',
    pass: 'ZPDLNZXZDTJEDTBJ',
    otherOpt: { // 根据发送的 邮件服务器查找到的配置
        "host": "smtp.163.com",
        "port": 465,
        "secure": true,
      },
}