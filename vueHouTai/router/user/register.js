const {User} = require('../../database/model/User')
const qs = require('querystring')
//导出
module.exports = async (req,res)=>{
	console.log('下面是打印的a');
	//接收客户端 传递过来的 信息
		console.log(req.body);
	// let a =
// console.log(qs.parse(req.body));
	// console.log(a);
	const {username,password} = req.body
  

	// res.send({username,password})
	// 根据客户端传递过来 用户名 查询 数据库 中 是否 存在着用户名
	const model = await User.findOne({where:{username}})
	// 判断
	if(model){
		res.status(400).send({
		data:null,
		meta:{
			msg:"用户名已经存在!",
			status:400
		}
	})
		return
	}
	// res.send('ok')
	//创建用户
	const createUser = await User.create({username,password})
	res.status(201).send({
		data:{
			createUser
		},
		meta:{
			msg:"创建成功!",
			status:201
		}
	})
}