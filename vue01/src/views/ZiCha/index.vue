<template>
	<div class="chuanwen">
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
						img_url:"https://img2.baidu.com/it/u=2150894690,1554693269&fm=253&fmt=auto&app=120&f=PNG?w=667&h=500",
						font1:'睡眠质量&&食欲',
						content1:'一个人如果身体健康，一般会睡眠质量好，不会经常出现失眠的现象。一般身体健康的人不被疾病困扰，因此食欲也会好，也代表胃肠功能健康。',
						font2:'心肺&&神经系统功能',
						content2:'心脏和肺脏是人体主要的内脏器官，一般心肺功能好代表心脏和肺脏等器官没有出现异常，血压正常、肺通气良好。大脑神经可支配人体的一切活动，当学习和工作不受影响，能够在正常情况下完成，一般代表神经系统没有异常。'
					},
					{
						id:2,
						img_url:"https://img0.baidu.com/it/u=2972138038,916888279&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
						font1:'身体发育&&排泄次数',
						content1:'身体健康的人一般各方面发育比较好，包括肌肉、骨骼以及四肢正常，不会出现此方面的疾病。一般正常人群一天会排便一次，且排便过程比较顺畅，代表肛门及肠道功能健康没有疾病。',
						font2:'精力&&记忆力',
						content2:'一般身体健康的人能量充足，精力也会比较旺盛，较少出现疲劳的现象。一般身体健康的人群大脑没有异常，记忆也处于正常状态。'
					},
					{
						id:3,
						img_url:"https://img1.baidu.com/it/u=993352835,4231585640&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
						font1:'抵抗力',
						content1:'身体健康的人一般免疫力较强，不容易受到外界细菌、病毒等病原体的侵犯，即不容易得病。',
						font2:'体重',
						content2:'身体健康的人胃口好、消化好，体重也会在标准范围内。建议想要知道自己身体是否健康的人群每年去往正规医院的体检科进行体检，完善血常规、血生化、CT检查、X线检查、胃镜检查等，以明确身体状况，若发现问题也需尽早处理。'
					},
				]
			}
		}
		
		
	}
</script>

<style lang="scss" scoped>
	.chuanwen{
		width: 100vw;
		
	}
</style>