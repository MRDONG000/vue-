	const{User} = require('../../database/model/User')
	const jwt = require('jsonwebtoken')
module.exports =async (req,res)=>{
	// 接收客户端传递过来的账号和密码
	const {username,password} = req.body
	//根据用户名来查询数据库是否存在这个用户
	const findUser = await User.findOne({where:{username}})
	//判断
	if(!findUser){
		res.status(400).send({
			data:null,
			meta:{
				msg:"用户名不存在!",
				status:400
			}
		})
			return
	}
	// res.send('ok')
	//判断账号 和 密码 是否正确
	if(username != findUser.username || password != findUser.password){
		res.status(400).send({
			data:null,
			meta:{
				msg:"账号或者密码不正确!",
				status:400
			}
		})
			return
	}
	//登陆成功 创建 token 返回给客户端 第一个参数是 组 , 第二个参数是私钥(自己随便定义)
	const token = jwt.sign({username},'shidiansheng')
	res.status(200).send({
		data:{
			username:findUser.username,
			token
		},
		meta:{
			msg:"登陆成功",
			status:200
		}
	})
		return
}