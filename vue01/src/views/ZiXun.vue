<template>
	<el-container class="phone">
		<div class="phone-head">
			<img src="https://img0.baidu.com/it/u=1451881657,2488473636&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=334" alt="">
			<div class="info">
				<div>联系电话: 440-123-6161</div>
				<div>联系地址:陕西省西安市长安区</div>
			</div>
		</div>
		<div class="main">
					<Map></Map>
		</div>

	</el-container>
</template>

<script>
	// 引入加载TXMap的方法
	import Map from '@/components/Map/map.vue'
export default{
	components:{
		Map
	}
}
</script>

<style lang="scss" scoped>
	.main{
		width: 100% ; 
		height: 60% ; 
		background-color: red;
	}
	.phone{
		width: 100vw;
		height: 100vh;
		background-color: #eee;
		display: block;
		.phone-head{
			width: 100%;
			height: 40%;
			img{
				display: block;
				width: 100%;
				height: 70%
			}
			.info{
				width: 100%;
				height: 30%;
				div{
					width: 100%;
					height: 50%;
					font-size: 30rpx;
					border: 1px solid black;
					display: flex;
					align-items: center;
				}
			}
		}
	}
</style>