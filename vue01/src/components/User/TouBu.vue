<template>
	<el-container class="box">
		<el-col>
			 <div class="demo-basic--circle">
			        <div class="block" @click="login()">
			          <el-avatar :size="size" :src="circleUrl" ></el-avatar>
			        </div>
			</div>
		</el-col>
	</el-container>
</template>

<script>
	export default {
		data() {
			return {
				size:'large',
				circleUrl:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
			}
		},
		methods:{
			login(){
				console.log(1111);
				this.$router.push('register')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box{
		width: 100vw;
		height: 29vh;
		background: url('https://img1.baidu.com/it/u=2249163911,2016402716&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=250') no-repeat;
		background-size: 100% 100%;
		display: flex;
		align-items: center;
	}
	.el-avatar--large{
		width: 10vh;
		height: 10vh;
	}
</style>