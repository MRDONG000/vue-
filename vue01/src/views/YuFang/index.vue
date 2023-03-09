<template>
	<div class="yufang">
			<ChuanWen>
				<div class="info-item" v-for="item in list" :key="item.id">
					<img :src="item.img_url" alt="">
					<div class="head">
						<span class="font">{{item.font1}}</span>
						<span class="content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.content1}}</span>
					</div>
					<div class="footer">
						<span class="font">{{item.font2}}</span>
						<span class="content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.content2}}</span>
					</div>
				</div>
			</ChuanWen>
	</div>
</template>

<script>
	import ChuanWen from '@/components/ChuanWen/ChuanWen.vue'
	export default{
		components:{
			ChuanWen
		},
		data(){
			return{
				list:[
					{
						id:1,
						img_url:"https://img0.baidu.com/it/u=1244217903,362461122&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
						font1:'常喝水',
						content1:'保证身体水分可以有效抵御病毒的入侵，还有利于体内毒素排泄，净化体内环境。',
						font2:'注意日常饮食',
						content2:'合理安排饮食也可以提高自身免疫力。'
					},
					{
						id:2,
						img_url:"https://img0.baidu.com/it/u=3696585900,940413458&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
						font1:'注意个人卫生',
						content1:'勤洗手、保持手部的卫生十分重要，平时还应尽量避免用手接触眼睛、口鼻等。',
						font2:'减少对呼吸道的刺激',
						content2:'不吸烟，少食辛辣的食物，可减少对呼吸道的刺激，以保护自然免疫功能，增强消灭外界病菌入侵呼吸道的能力。'
					},
					{
						id:3,
						img_url:"https://img2.baidu.com/it/u=124528481,3490977060&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
						font1:'加强锻炼，增强免疫力',
						content1:'健康的身体可以有效的抵御疾病。合理安排好作息，做到生活有规律，劳逸结合。根据气温的变化适时增减衣服。',
						font2:'要注意多通风',
						content2:'新鲜空气能够去除过量的湿气和稀释室内污染物。少去人多的地方可以有效的减少传染病的出现'
					},
				]
			}
		}
		
		
	}
</script>

<style lang="scss" scoped>
	.yufang{
		width: 100vw;
		
	}
</style>