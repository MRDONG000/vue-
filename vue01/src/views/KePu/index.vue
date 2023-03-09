<template>
	<div class="kepu">
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
						img_url:"https://img1.baidu.com/it/u=4105067226,182135311&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
						font1:'心肺复苏：',
						content1:'心肺复苏术是一项基本急救技能，一旦有人心脏呼吸骤停，及时、正确实施心肺复苏术是挽救生命的关键。当然，只懂得心肺复苏是远远不够的。如果没有尽早使用AED（自动体外除颤器）除颤，抢救的成功率将大大降低。',
						font2:'AED是自动体外除颤器：',
						content2:'AED是自动体外除颤器（Automated External Defibrillator）的英文缩写，它可以自动分析患者心律，识别是否为可除颤心律。如为可除颤心律，AED可在极短时间内发放出大量电流经过心脏，以终止心脏所有不规则、不协调的电活动，使心脏电流重新自我正常化，被誉为心搏骤停患者的“救命神器”。'
					},
					{
						id:2,
						img_url:"https://img2.baidu.com/it/u=3187543777,3637389677&fm=253&fmt=auto&app=120&f=JPEG?w=1067&h=800",
						font1:'海姆立克急救法：',
						content1:'海姆立克腹部冲击法（外文名：Heimlich Maneuver）是一种清除上呼吸道异物堵塞（噎）的急救方法，由美国医生海姆里克先生发明。该法的第一次运用在1974年，海姆里克医生运用该法成功抢救了一名因食物堵塞了呼吸道而发生窒息的患者，从此该法在全世界被广泛应用被人们称为“生命的拥抱”。',
						font2:'海姆里克腹部冲击法：',
						content2:'急性呼吸道异物堵塞在生活中并不少见，由于气道堵塞后患者无法进行呼吸，故可能致人因缺氧而意外死亡。海姆里克腹部冲击法（Heimlich Maneuver）也称为海氏手技，是美国医生海姆里克先生发明的。1974年他首先应用该法成功抢救了一名因食物堵塞了呼吸道而发生窒息的患者，从此该法在全世界被广泛应用，拯救了无数患者，其中包括美国前总统里根、纽约前任市长埃德、著名女演员伊丽莎白·泰勒等等。因此该法被人们称为“生命的拥抱”。'
					},
					{
						id:3,
						img_url:"https://img1.baidu.com/it/u=1134108590,1803302245&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375",
						font1:'低血糖：',
						content1:'低血糖综合症发病时会有心慌、心悸、饥饿、软弱、手足颤抖、皮肤苍白、出汗、心率增加、血压轻度升高等。',
						font2:'处理措施：',
						content2:'1、如果患者有严重身体表现，立即拨打急救电话有意识障碍的病人，需要立即拨打 120急救电话，采取静脉输注葡萄糖治疗。2、如果患者较清醒，安排患者坐下或卧床休息防止患者因为低血糖跌倒，导致外伤。3、尽快补充糖分意识清楚的患者可以喝含糖果汁、可乐、吃馒头、饼干、水果糖、巧克力等。'
					},
				]
			}
		}
		
		
	}
</script>

<style lang="scss" scoped>
	.kepu{
		width: 100vw;
		
	}
</style>