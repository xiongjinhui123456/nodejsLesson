/* 
  服务器
    - 一般我们说的服务器 就是服务器(计算机)
      + 云服务器: 是硬件服务器对应的计算机
    - 服务器: 提供服务机器
      + 我们手边的电脑就可以当做一台本地服务器
    - web服务器
      + 专门提供web服务的软件
    - nodejs内置的http模块
      + 专门用于创建操作web服务器的
    - 使用http模块创建一个web服务器
      1. 导入http模块
        + const http = require('http');
      2. 使用导入的http调用createServer方法创建一个web服务
        + const server = http.createServer(回调函数)
          - 所有对本服务器的请求,都会执行这个回调函数
          - 回调函数具有两个参数
            + 第一个参数: 是本次请求的 请求对象
              - 请求对象中包含了本次请求的所有内容
            + 第二个参数: 是本次请求的 响应对象  
              - 响应对象, 可以对本地请求作出响应
      3. 给创建的web服务监听端口号
        + server.listen(端口号,回调函数)
          - 回到函数执行,则服务器启动成功
*/
//1、 导入http模块
const http = require("http")
// 2. 使用导入的http调用createServer方法创建一个web服务
const server = http.createServer((req,res)=>{
// 1. 请求对象.url   获取本次请求的路径
// console.log(req.url);
 // 2. 请求对象.method  获取本次请求的请求方式
//  console.log(req.method);
 // 3. 请求对象.headers  获取本次请求的请求头
//  console.log(req.headers);

// 响应对象 res  --->给本地请求做出响应
// 1. write   响应数据
// res.write(`9999\n`)
// 2. end     结束响应
// res.end('99')
// 3. setHeader   设置响应头--->要在响应数据之前设置
// res.setHeader('Content-Type','text/html;charset=utf-8');
// res.write('9999')
// res.end('你好')
// 4. 设置状态码  --->要在响应数据之前设置
//   res.statusCode = 202;
  // 5. 设置状态码描述  --->要在响应数据之前设置
//   res.statusMessage = 'very ok';
//   res.write('9999')

  // 6. 设置响应头及响应状态码方法
  res.writeHead('222', 'okkk', {
    'Content-Type': 'text/html;charset=utf-8',
  })
  res.write('9999')
  res.end('<i>你好</i>');
})
// 给创建的web服务监听端口号
server.listen(8999,()=>{
    console.log('服务器启动成功，地址：127.0.0.1:8999');
})
