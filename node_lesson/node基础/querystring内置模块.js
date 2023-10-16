//导入模块
const qs = require('querystring')
let querystr = 'name=zs&age=17&gender=男'
// 1、parse
//语法：qs.parse(查询字符串)  得到对象
console.log(qs.parse(querystr))

// 2、stringify
// 语法：qs.stringify(对象)  得到查询字符串
obj = {name:'ls',age:17,gender:'man'}
console.log(qs.stringify(obj))