//导入邮件发送配置
const nodemail = require('nodemailer');
let { } = require('../config')

//创建邮件发送器
let transport = nodemail.createTransport({
    ...otherOpt,
    auth: {//发送邮件的邮箱及对应的授权码
        user, pass
    }
})

//导出邮件发送函数
module.exports = function (to, subject, html) {
    return new Promise(resolve => {
        //发送邮件
        transport.sendMail({
            from: user, to, subject, html
        },
            (err) => {//回调函数
                if (err) return resolve({ status: 0, message: '邮件发送失败，请重试' });
                resolve({
                    status: 1, message: '邮件发送成功'
                })
            }
        )
    })
}
