<template>
	<div id="box">
		<div class="zhu_ce">登  陆</div>
		<div class="xin_xi">
			账号：<input type="text" v-model="data">
			密码：<input type="text" v-model="password">
		</div>
		<button class="bt1" @click="submit()">确定</button>
		<button class="bt2" @click="quxiao()">取消</button>
		<div class="rged" v-if="show==0">请输入用户名和密码</div>
		<div class="rged" v-else-if="show==1">用户名或密码错误</div>
		<div class="rged" v-else>登陆成功! 即将跳转</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				data:'',
				token:'',
				password:'',
				show:0,
				
			}
		},
		methods:{
			submit(){
				if(this.data && this.password){
					this.$http({
						url:'http://localhost:8888/api/login',
						headers:{
							"Content-Type":"application/x-www-form-urlencoded"
						},
						method:'POST',
						data:{
							username:this.data,
							password:this.password
						}
						
					}).then((res,req)=>{
						this.show=2
						console.log(33333);
						 setTimeout(()=>{
							this.$router.push({
								name:'user',
								query:res
							})
						}, 2000);
						console.log(res);
						
					}).catch((res)=>{
						this.show = 1
						console.log(res);
						
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
		background:url('https://img2.baidu.com/it/u=2384177242,213063351&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=668');
		background-size: 100% 200%;
		color: white;
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