<template>
	<div class="yangshen">
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
						img_url:"https://img0.baidu.com/it/u=3121001685,994663316&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
						font1:'早睡早起：',
						content1:'记住：睡觉是养生第一要素 。 睡觉的时间应该是晚21：00~早3：00。 因为这个时间是一天的冬季，冬季主藏，冬季不藏，春夏不长，即第2天没精神',
						font2:'药与健康：',
						content2:'一切药物对治病来说都是治标，不是治本，不管是中医还是西医。因为一切的病都是错误的因产生错误的果。错误的因不除，错误的果就不会绝根。健康的根本在心。一切法从心生。心净则身净。所以得病了，不要向外求，要靠自己自身的修复系统来修复自己的疾病。其实人和动物是一样的，动物的病都是靠自己，人也能。'
					},
					{
						id:2,
						img_url:"https://img2.baidu.com/it/u=227210777,1475991376&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
						font1:'智慧：',
						content1:'人所具有的一切智慧，绝对不是从书本里学来的，而是从自己的真诚心、清净心，从定中生出来的',
						font2:'人与健康：',
						content2:'人是一切生物中构造最完美的灵体，健康的身体是人生来就具足的；人的健康状况的调节是靠人体本身所具有的调节修复系统来完成的 ，而不是靠外部因素，外部因素只能起辅助作用'
					},
					{
						id:3,
						img_url:"https://img0.baidu.com/it/u=3100358353,1455512784&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
						font1:'健康因素：',
						content1:'人的健康离不开两大要素：1）足够的气血；2）畅通的经络（包括血管和排泄垃圾的通道）。足够的气血靠：足够的食物+胆汁+必要时间内（晚天黑后~午夜1点40）优质的睡眠（这个时候大脑完全不工作，由植物神经主导）+良好的生活习惯。畅通的经络需要：清净心。 一切七情六欲都会破坏清净心，从而破坏经络的正常运行。维持健康的身体不仅需要增收（增加气血），也需要节支（减少血气的损耗）。',
						font2:'关于气血：',
						content2:'过度地增加食物不仅不会增加血气，而且会成为身体中的垃圾负担，反过来还得靠消耗血气来把他们清理掉。五脏六腑是一个血气加工厂，食物是原材料，加工能力是有限的，而食物是无限的，所以食物的数量必须得到控制。适当运动可以帮助人的气血运行，但同时也在消耗人的气血。人体的微循环主要应该靠松静来达到的，这也是健康必不可少的。人体中的垃圾越多，就越需要更多的血气来清除它们，但人的血气因为垃圾的增多和血脉的阻塞而减少，这就形成了恶性循环，这也正是人衰老的机理。所以，人要想健康不老，就要：1）减少体内的垃圾；2）增加血脉经络的畅通；3）增加体内的气血。'
					},
				]
			}
		}
		
		
	}
</script>

<style lang="scss" scoped>
	.yangshen{
		width: 100vw;
		
	}
</style>