// 导入代理模块
const { createProxyMiddleware } = require('http-proxy-middleware');
// 搭建简易web服务器
require('http').createServer((req, res) => {
    if (req.url === '/') return res.end(require('fs').readFileSync('./static/index.html'))//请求地址为/根目录则响应index.html
    // 请求地址为 /kuayu  则对请求设置代理服务
    if (req.url === '/baidu') {
        // createProxyMiddleware  用于创建发送器  ---> 返回一个发送请求的函数 
        let send = createProxyMiddleware({//配置对象
            target: 'https://www.baidu.com',//设置目标服务器host
            changeOrigin: true,//是否改变源地址
            pathRewrite: {//重写请求地址
                '/baidu': ''
            }
        })
        // 将本次的请求对象 响应对象 传递并发送请求--->目标地址(跨域地址)
        send(req,res);
    }
}).listen(9000, () => {
    console.log('服务器启动成功,http://127.0.0.1:9000');
})