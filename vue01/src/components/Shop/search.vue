<template>
	<el-container class="search">
		<div class="top">
			<el-input class="it1" v-model="input" placeholder="请输入内容"></el-input>
			<button @click="queryBox">搜索</button>
		</div>
		<div class="bottom">
			<div class="boxx" :class="'box'+(item.id+1)" v-if="item.display==1" v-for="(item,index) in arrList" :key="item.id" @click="yeMian(item.id)">
				<div class="nei_rong">
					<img :src="item.src" alt="">
				</div>
					<!-- {{item.name}} -->
					<div class="jie_shao">
						<span class="otc">OTC</span>
						{{item.shu}}
					</div>
					<div class="money">
						<div class="jin_e">
							{{item.price}}
						</div>
					</div>
			</div>
		</div>
		<div class="zhanwei"></div>
		
	</el-container>
</template>

<script>
	export default {
		data() {
			return {
				input: '',
				arrList: [{
						id: 0,
						name: '感冒药',
						display:1,
						price:'￥398',
						shu:'999感冒灵0.25克*10包',
						src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.doubanio.com%2Fview%2Frichtext%2Flarge%2Fpublic%2Fp263265852.jpg&refer=http%3A%2F%2Fimg2.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1677496055&t=55ab8d4203642bcc7cd4d67be79793f0'

					},
					{
						id: 1,
						name: '消炎药',
						display:1,
						price:'￥298',
						shu:'999炎立消胶囊0.25克*10',
						src:'https://img2.baidu.com/it/u=3111238952,4159971643&fm=253&fmt=auto&app=138&f=JPG?w=420&h=262'
					},
					{
						id: 2,
						name: '止疼药',
						display:1,
						price:'￥198',
						shu:'999日本EVE止疼药0.25克*10',
						src:'http://t14.baidu.com/it/u=2194026632,612944445&fm=224&app=112&f=JPEG?w=500&h=500'

					},
					{
						id: 3,
						name: '急救药',
						display:1,
						price:'￥598',
						shu:'999硝酸甘油片0.25克*10',
						src:'https://inews.gtimg.com/newsapp_bt/0/11865331973/1000'
					},
				]
			}
		},
		methods: {
			yeMian(id){
				switch(id){
					case 0:
					this.$router.push({
						path:'/yaoping',
						query:{
							src:this.arrList[0].src,
							price:this.arrList[0].price,
							shu:this.arrList[0].shu,
						}
					})
					break;
					case 1:
					this.$router.push({
						path:'/yaoping',
						query:{
							src:this.arrList[1].src,
							price:this.arrList[1].price,
							shu:this.arrList[1].shu,
						}
					})
					break;
					case 2:
					this.$router.push({
						path:'/yaoping',
						query:{
							src:this.arrList[2].src,
							price:this.arrList[2].price,
							shu:this.arrList[2].shu,
						}
					})
					break;
					case 3:
					this.$router.push({
						path:'/yaoping',
						query:{
							src:this.arrList[3].src,
							price:this.arrList[3].price,
							shu:this.arrList[3].shu,
						}
					})
					break;
				}
				
			},
			queryBox() {
				// console.log(this.input);
				switch(this.input){
					case '':
					this.arrList[0].display=1
					this.arrList[1].display=1
					this.arrList[2].display=1
					this.arrList[3].display=1
					break;
					case '感冒药':
					this.arrList[0].display=1
					this.arrList[1].display=0
					this.arrList[2].display=0
					this.arrList[3].display=0
					break;
					case '消炎药':
					this.arrList[0].display=0
					this.arrList[1].display=1
					this.arrList[2].display=0
					this.arrList[3].display=0
					break;
					case '止疼药':
					this.arrList[1].display=0
					this.arrList[0].display=0
					this.arrList[2].display=1
					this.arrList[3].display=0
					break;
					case '急救药':
					this.arrList[1].display=0
					this.arrList[2].display=0
					this.arrList[0].display=0
					this.arrList[3].display=1
					break;
					
					
				}
			}
		}

	}
</script>

<style lang="scss" scoped>
	.zhanwei{
		width: 100%;
		height: 20vh;
	}
	.money{
		width: 100%;
		height: 10%;
		// background-color: aqua;
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
	.jie_shao{
		width: 100%;
		height: 20%;
		// background-color: brown;
		display: flex;
		align-items: baseline;
		color: black;
		font-size: 2.5vh;
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
	
	.search {
		display: flex;
		flex-wrap: wrap;
		background-color: rgb(247,247,247);
	}

	.top {
		height: 9vh;
		width: 100vw;
		// background-color: aqua;
		display: flex;

		.it1 {
			display: inline-block;
			width: 78vw !important;
			margin-top: 2vh;
			margin-left: 2vh;
		}

		button {
			display: inline-block;
			width: 14vw !important;
			height: 6vh;
			margin-top: 2vh;
		}

	}

	.bottom {
		width: 100vw;
		display: flex;
		// justify-content: space-around;
		flex-wrap: wrap;

		.boxx {
			width: 48vw;
			height: 34vh;
			background-color: white;
			margin-top: 2vh;
			margin-left: 1.5vw;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			// align-items: center;
			color: blueviolet;
			.nei_rong{
				width: 100%;
				height: 70%;
				background-color: blueviolet;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
