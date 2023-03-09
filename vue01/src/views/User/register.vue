<template>
	<div id="box">
		<div class="zhu_ce">注  册</div>
		<div class="xin_xi">
			账号：<input type="text" v-model="data">
			密码：<input type="text" v-model="password">
		</div>
		<button class="bt1" @click="submit()">确定</button>
		<button class="bt2" @click="quxiao()">取消</button>
		<div class="rged" v-if="show==400">该用户名已经被注册</div>
		<div class="rged1" @click="dengLu()">已注册，点击前往登录</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				data:'',
				password:'',
				show:''
			}
		},
		methods:{
			dengLu(){
				console.log(this.$router);
				this.$router.push('/login')
			},
			submit(){
				// let dt = JSON.stringify({
				// 	usernmae:this.data,
				// 	password:this.password
				// });
				// console.log(JSON.stringify(dt));
				if(this.data && this.password){
					this.$http({
						url:'http://localhost:8888/api/register',
						headers:{
							"Content-Type":"application/x-www-form-urlencoded"
						},
						method:'POST',
						data:{
							username:this.data,
							password:this.password
						}
						
					}).then((res,req)=>{
						this.show =200
						this.$router.push({
							path:'/login',
							query:res
						})
						
					}).catch((res)=>{
						// console.log(res);
						this.show = 400
					})
					
					
				}
			},
			quxiao(){
					this.data='';
					this.password='';
			}
		}
	}
</script>

<style scoped lang="scss">
	.rged1{
		color: red;
		float: left;
		margin-top: 55vh;
		text-decoration: underline;
	}
	.rged{
		width: 100%;
		height: 20%;
		color: red;
		float: left;
		margin-top: -6vh;
		
	}
	.bt1{
		margin-right: 26vw;
	}
	.bt2{
		margin-left: 55vw;
	}
	button{
		display: inline-block;
		width: 20vw;
		height: 5vh;
		margin-top: 27vh;
		position: absolute;
	}
	.xin_xi{
		width: 100vw;
		height: 27vh;
		// background-color: brown;
		position: absolute;
		bottom: 32vh;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		input{
			width: 80%;
			height: 15%;
		}
	}
	#box{
		width: 100vw;
		height: 100vh;
		background:url('https://img1.baidu.com/it/u=2190761410,1703983984&fm=253&fmt=auto&app=138&f=JPEG?w=787&h=500');
		background-size: 100% 200%;
		color: black;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		position: relative;
		.zhu_ce{
			width: 100%;
			height: 5vh;
			// background-color: aquamarine;
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 32vh;
			font-weight: 700;
		}
		
	}
</style>