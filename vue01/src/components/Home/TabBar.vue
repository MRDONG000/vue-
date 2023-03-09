<template>
		<el-container class="tabbar">
			<div v-for="item in tabArr" :key="item.id" @click="toggle(item.id,item.path)">
				<img :src="item.id == activeIndex?item.icon.active:item.icon.inactive" alt="">
				<span class="text">{{item.text}}</span>
			</div>
		</el-container>
		
</template>

<script>
	export default{
		data() {
			return{
				activeIndex:0,
				tabArr:[
					{
						id:0,
						text:'首页',
						path:'/home',
						icon:{
							active:require('../../assets/shouye.png'),
							inactive:require('../../assets/首页1.png')
						}
					},
					{
						id:1,
						text:'商城',
						path:'/shop',
						icon:{
							active:require('../../assets/商城.png'),
							inactive:require('../../assets/shop.png')
						}
					},
					{
						id:2,
						text:'健康',
						path:'/health',
						icon:{
							active:require('../../assets/health.png'),
							inactive:require('../../assets/健康.png')
						}
					},
					{
						id:3,
						text:'咨询',
						path:'/zixun',
						icon:{
							active:require('../../assets/健康测评.png'),
							inactive:require('../../assets/ceping.png')
						}
					},
					{
						id:4,
						text:'个人',
						path:'/user',
						icon:{
							active:require('../../assets/个人.png'),
							inactive:require('../../assets/self.png')
						}
					},
					
					
				]
			}
		},
		methods:{
			toggle(id,path){
				this.$router.push(path),
				this.activeIndex=id
			}
		}
	}
</script>

<style scoped lang="scss">
	
	.text{
		font-size: 14px;
	}
	.tabbar{
		width: 100vw;
		height: 8vh;
		// background-color: aqua;
		position: fixed;
		border: 1px solid transparent;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
		background-color: white;
		bottom: 0;
		div{
			width: 20%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			img{
				display: inline-flex;
				width: 65%;
				height: 65%;
			}
		}
	}
</style>