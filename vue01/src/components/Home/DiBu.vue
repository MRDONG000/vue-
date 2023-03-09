<template>
	<el-container class="box" ref="box">
		<ul>
			<div class="box1" @click="toggle()">
				<router-link tag="li" to="/">			
					<span :class="ic_1" class="ic" ref="home"></span>
					<span class="tx tx_1">首页</span>
			</router-link >
			</div>
			<router-link tag="li" to="/shop">
				<span class="ic ic_2"></span>
				<span class="tx tx_2">商城</span>
			</router-link >
			<div @click="shiyan" class="abc">
				<router-link tag="li" to="/health">
				<span class="ic ic_3"></span>
				<span class="tx tx_3">健康</span>
				</router-link >
			</div>

			<router-link tag="li" to="/zixun">
				<span class="ic ic_4"></span>
				<span class="tx tx_4">咨询</span>
			</router-link>
			<router-link tag="li" to="/user">
				<span class="ic ic_5"></span>
				<span class="tx tx_5">个人</span>
			</router-link>
		</ul>
		<router-view></router-view>
	</el-container>
</template>

<script>
	export default{
		data(){
			return{
				id:0,
				ic_1:'ic_1',
			}
		},
		methods:{
			toggle(){
				this.ic_1='ic_11'
			},
			home1(){
				console.log(this.$route.name)

					this.ic_1='ic_11'
				
			},
			shiyan(){
				this.$refs.box.style.display = 'none'
				console.log(11123123);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box1{
		width: 20vw;
		height: 100%;
		z-index: 999;
		li:nth-child(1){
			width: 100%;
			height: 100%;
		}
	}
	.ic{
		width: 50%;
		height: 50%;
		background-color: blue;
		margin-top: 1vh;

	}
	.tx{
		width: 100%;
		height: 30%;
		// background-color: blueviolet;
	}
	.box{
		width: 100%;
		height: 10vh;
		
		// background-color: brown;
		position: fixed;
		bottom: 0;
		border: 1px solid transparent;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
		ul{
			width: 100%;
			height: 100%;
			display: flex;
			padding: 0;
			margin: 0;
			li{
				width: 20%;
				height: 100%;
				// background-color: bisque;
				list-style: none;
				span{
					display: inline-block;
				}
			}
		}
	}
	.ic_1{
		background: url(../../../public/image/首页1.png) no-repeat;
		background-size: 100% 100%;
	}
	.ic_2{
		background: url(../../../public/image/商城.png) no-repeat;
		background-size: 100% 100%;
	}
	.ic_3{
		background: url(../../../public/image/健康.png) no-repeat;
		background-size: 100% 100%;
	}
	.ic_4{
		background: url(../../../public/image/咨询.png) no-repeat;
		background-size: 100% 100%;
	}
	.ic_5{
		background: url(../../../public/image/个人.png) no-repeat;
		background-size: 100% 100%;
	}
	.ic_11{
		background: url(../../../public/image/个人.png) no-repeat;
		background-size: 100% 100%;
	}
	
</style>