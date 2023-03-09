const {Sequelize,sequelize} = require('../init')

const User = sequelize.define('users',{
	//一个对象就是一个字段
	//用户名
	username:{
		//约束字段类型
		type:Sequelize.STRING,
		//是否允许为空 默认是true
		allowNull:false,
		unique:true
	},
	//密码
	password:{
		type:Sequelize.STRING,
		allowNull:false
	}
})

//同步模型
User.sync().then(()=>{
	console.log('模型同步成功');
})
//导出
module.exports = {User}