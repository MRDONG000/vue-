<template>
	<el-container class="box">
		<ul class="ic1">
			<router-link tag="li" to="/phone">
				<span class="span1"></span>
				<span class="tx_1">快捷电话</span>
			</router-link>	
			<router-link tag="li" to="/chuanwen">
				<span class="span2"></span>
				<span class="tx_2">传闻辟谣</span>
			</router-link>	
			<router-link tag="li" to="/kepu">
				<span class="span3"></span>
				<span class="tx_3">急救科普</span>
			</router-link>	
			<router-link tag="li" to="/zicha">
				<span class="span4"></span>
				<span class="tx_4">自诊自查</span>
			</router-link>	
		</ul>
		<ul class="ic2">
			<router-link tag="li" to="/yangshen">
				<span class="span5"></span>
				<span class="tx_5">养身方法</span>
			</router-link>	
			<router-link tag="li" to="/yufang">
				<span class="span6"></span>
				<span class="tx_6">疾病预防</span>
			</router-link>	
			<router-link tag="li" to="/ceping">
				<span class="span7"></span>
				<span class="tx_7">健康测评</span>
			</router-link>	
			<router-link tag="li" to="/lianxi">
				<span class="span8"></span>
				<span class="tx_8">在线客服</span>
			</router-link>	
		</ul>
	</el-container>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss" scoped>
	
	.span1{
		background: url(../../../public/image/电.png) no-repeat;
		background-size: 100% 100%;
	}
	.span2{
		background: url(../../../public/image/newspaper2.png) no-repeat;
		background-size: 100% 100%;
	}
	.span3{
		background: url(../../../public/image/急救包.png) no-repeat;
		background-size: 100% 100%;
	}
	.span4{
		background: url(../../../public/image/急救医.png) no-repeat;
		background-size: 100% 100%;
	}
	.span5{
		background: url(../../../public/image/健身1.png) no-repeat;
		background-size: 100% 100%;
	}
	.span6{
		background: url(../../../public/image/预防.png) no-repeat;
		background-size: 100% 100%;
	}
	.span7{
		background: url(../../../public/image/健康测评.png) no-repeat;
		background-size: 100% 100%;
	}
	.span8{
		background: url(../../../public/image/客服.png) no-repeat;
		background-size: 100% 100%;
	}
	.box{
		height: 150px;
		// background-color: blueviolet;
		display: block;
	
		.ic1{
			height: 50%;
			width: 100%;
			// background-color: aqua;
			padding: 0;
			margin: 0;
			display: flex;
			li{
				width: 25%;
				height: 100%;
				list-style: none;
				display: flex;
				flex-direction: column;
				align-items: center;
				flex-wrap: wrap;
				span{
					width: 58%;
					height: 54%;
					// background-color: blueviolet;
					font-size: 6px;
					margin-top: 1vh;
					
				}
			}
		}
		.ic2{
			height: 50%;
			width: 100%;
			// background-color: blue;
			padding: 0;
			margin: 0;
			display: flex;
			li{
				width: 25%;
				height: 100%;
				list-style: none;
				display: flex;
				flex-direction: column;
				align-items: center;
				flex-wrap: wrap;
				span{
					width: 50%;
					height: 50%;
					// background-color: blueviolet;
					margin-top: 1vh;
				}
			}
		}
	}
	.tx_1{
	
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100% !important;
		height: 25% !important;
		font-size: 12px;
		margin-top: 2vh;
	}
	.tx_2{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100% !important;
		height: 25% !important;
		font-size: 12px;
		margin-top: 2vh;
	}
	.tx_3{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100% !important;
		height: 25% !important;
		font-size: 12px;
		margin-top: 2vh;
	}
	.tx_4{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100% !important;
		height: 25% !important;
		font-size: 12px;
		margin-top: 2vh;
	}
	.tx_5{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100% !important;
		height: 25% !important;
		font-size: 12px;
		margin-top: 2vh;
	}
	.tx_6{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100% !important;
		height: 25% !important;
		font-size: 12px;
		margin-top: 2vh;
	}
	.tx_7{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100% !important;
		height: 25% !important;
		font-size: 12px;
		margin-top: 2vh;
	}
	.tx_8{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100% !important;
		height: 25% !important;
		font-size: 12px;
		margin-top: 2vh;
	}
</style>