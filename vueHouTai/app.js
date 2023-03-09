const jwt = require('jsonwebtoken')
//1.导入express
const express = require('express')
const app = express()
// const cors = require('cors')
//导出接受post 请求数据 模块
const bodyParser = require('body-parser');
// 使用body-parser解析post请求参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// app.use(cors())


const main = require('./router/main')

require('./database/init')

//设置跨域和相应数据格式 
app.all('*',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*')
	res.header('Access-Control-Allow-Headers','X-Request-With,mytoken')
	res.header('Access-Control-Allow-Headers','X-Request-With,Authorization')
	res.setHeader('Content-Type','application/json;charset=utf-8')
	res.header('Access-Control-Allow-Headers','Content-Type,Content-Length,Authorization,Accept,X-Requested-with')
	res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS')
	res.header('X-Powered-By','3.2.1')
	next()
})

//1.拦截主路由下所有请求
app.get('/',(req,res)=>{
	res.status(404).send({
		data:null,
		meta:{
			msg:'Not Found',
			status:404
		}
	})
})
//登录:login 注册:register
app.use('/api',(req,res,next)=>{
	console.log(22222);
	// console.log(parseJSON(req.body));
	// res.send('ok')
	//2.判断是否是登录接口或者是注册接口 如果是直接放行 返回
	if(req.url =='/login' || req.url=='/register'){
		next()
		return
	}
	//接收客户端传递过来的 token
	const token  = String(req.headers.authorization)
	// 解析 token 如果解析失败 返回的是 null
	const username = jwt.decode(token,'shidiansheng')
	// 判断客户端是否传递了token
	if(token == 'undefined' || username == null){
		res.status(400).send({
			data:null,
			meta:{
				msg:'token无效',
				status:400
			}
		})
		return
	}
	//直接放行
	next()
})


require('./database/model/User')

//为main 匹配地址 /api
app.use('/api',main)
//监听8888 端口
app.listen(8888)