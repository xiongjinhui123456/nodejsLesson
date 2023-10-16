const os = require('os')//导入os内置模块
console.log(os.cpus())//内核信息
console.log(os.cpus().length)
console.log(os.totalmem())//获取电脑运行内存
console.log(os.totalmem()/1024/1024/1024)
console.log(os.freemem());//获取电脑剩余运行内存大小
console.log('a'+os.EOL+'b');//获取操作系统对应的换行符

