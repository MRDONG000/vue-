const Sequelize = require('sequelize')

// const sequelize = new Sequelize('数据库名','账号','密码',{
// 	host:'localhost', // =>地址
// 	dialect:'mysql', // =>指定数据库类型 必须指定
// 	port:'3306' // =>数据库默认端口是3306
// })

//先去创建一个数据库
const sequelize = new Sequelize('sds_houtai','root','123456',{
	host:'localhost', // =>地址
	dialect:'mysql', // =>指定数据库类型 必须指定
	port:'3306' // =>数据库默认端口是3306
})

//链接
 //发送请求
sequelize.authenticate()
//成功
.then(()=>{
	console.log('数据库链接成功！');
})
//失败
.catch(err =>{
	console.log('连接失败'+'错误信息:'+err);
})
// 导出这两个 创建模型 需要
module.exports={Sequelize,sequelize}
 
  