<template>
	<div id="yao">
		<div class="lun_bo">
			<img :src="this.src" alt="" @click="shuchu()">
		</div>
		<div class="jia_ge">
			<div class="money">
				<div class="jin_e">
					{{price}}
				</div>
			</div>
			<div class="shu_liang">
				<span class="otc">OTC</span>
				{{shu}}
				
			</div>
		</div>
		<div class="di_bu">
			<div class="db1">
				<div class="icon">
					<img src="../../assets/kefu.png" alt="">
				</div>
				<div class="font">
					联系客服
				</div>
			</div>
			<div class="db2">
				<div class="icon">
					<img src="../../assets/gouwu.png" alt="">
				</div>
				<div class="font">
					购物车
				</div>
			</div>
			<div class="db3">
				<div class="lan">
					<div class="lan_1">
						加入购物车
					</div>
					<div class="lan_2">
						立即购买
					</div>
				</div>
			</div>
		
		</div>
		<div class="gn_yl">
			<img src="../.././../public/image/yao1.png" alt="">
		</div>
		<div>
			1
			1
			1
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				src:this.$route.query.src,
				price:this.$route.query.price,
				shu:this.$route.query.shu,
			}
		},
		methods:{
			shuchu(){
				console.log(this.$route.query);
			}
		}
	}
</script>

<style scoped lang="scss">
	#yao{
		background-color: rgb(247,247,247);
		.gn_yl{
			width: 95%;
			// height: 16vh;
			background-color: white;
			margin: 1vh auto 0 auto ;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.di_bu{
			width: 100vw;
			height: 8vh;
			position: fixed;
			bottom: 0;
			display: flex;
			background-color: white;
			.db1{
				flex: 1;
				// background-color: coral;
			}
			.db2{
				flex: 1;
				// background-color: pink;
			}
			.db3{
				flex:3;
				// background-color: cornflowerblue;
				
				.lan{
					width: 98%;
					height: 100%;
					border: 1px solid transparent;
					// background-color: blueviolet;
					margin: 0 auto;
					border-radius: 9vh;
					display: flex;
					.lan_1{
						width: 50%;
						height: 99%;
						background-color: rgb(255,169,22);
						border: 1px solid transparent;
						border-radius: 9vh 0 0 9vh;
						display: flex;
						justify-content: center;
						align-items: center;
						color: white;
					}
					.lan_2{
						width: 50%;
						height: 99%;
						background-color: rgb(255,95,62);
						border: 1px solid transparent;
						border-radius: 0vh 9vh 9vh 0;
						display: flex;
						justify-content: center;
						align-items: center;
						color: white;
					}
				}
			}
			.icon{
				width: 5vh;
				height: 5vh;
				margin: 0 auto;
				// background-color: blueviolet;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
		background-color: rgb(247,247,247);
		.lun_bo{
			height: 40vh;
			font-size: 0;
			img{
				width: 100%;
				height: 100%;
			}
		
		}
		.jia_ge{
			height: 16vh;
			width: 95vw;
			margin: 0.5vh auto 0 auto;
			// background-color: blueviolet;
			border: 1vw solid transparent;
			border-radius: 1vh;
			.money{
				height: 40%;
				
				// background-color: blue;
				display: flex;
				align-items: center;
				.jin_e{
					width: 10vh;
					height: 5vh;
					// background-color: chartreuse;
					font-size: 1.5rem;
					color: orange;
				}
			}
			.shu_liang{
				height: 60%;
				// background-color: brown;
				display: flex;
				align-items: baseline;
				color: black;
				font-size: 3vh;
				.otc{
					display: flex;
					width: 10vw;
					height: 3vh;
					background-color: rgb(57,209,103);
					font-size: 1rem;
					margin-left: 3vw;
					margin-right: 1vw;
					color: white;
					justify-content: center;
					align-items: center;
					
				}
				
			}
		}
	}
</style>