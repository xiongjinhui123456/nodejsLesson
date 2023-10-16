// fs内置模块:专门用于操作文件的模块
const fs = require('fs')//导入fs方法

// 1、readFile   异步读取文件
// fs.readFile('os内置模块.js','utf-8',(err,data)=>{
//     if(err) return console.log(err)
//     console.log(data)
// })

// 2、readFilesync   同步读取文件
console.log(fs.readFileSync('os内置模块.js','utf-8'))