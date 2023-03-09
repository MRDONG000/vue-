<template>
<el-container class="health">
	<el-form ref="form" :model="formInfo" label-width="750rpx">
		<el-form-item label="1.任意20个词默记60秒，5分钟后回忆，看能记住多少。   比如，图章、日历、假期、柜子、钢笔、电话、润肤霜、苹果、门、风、手提袋、官员、桥、眼睛、骆驼、闪电、快乐、小屋、鱼、自行车。
		(单位: 个/分钟)">
				<el-input class="jiyi" v-model="formInfo.jiyi"></el-input>
			</el-form-item>
			<el-form-item label="2.身体站直，两脚合拢，挺直双膝，然后屈身弯腰，伸直双腿，测量一下手指距离地面的差距，这样可以马上知道答案。(单位:厘米)">
					<el-input class="jiyi" v-model="formInfo.rouruan"></el-input>
				</el-form-item>
				<el-form-item label="3.即使你是个健康的人，如不进行体育锻炼，肺活量也会减退。测测肺功能，方法很简单：点燃一根蜡烛，看与蜡烛距离多远才能将蜡烛吹灭。
  (单位:米)">
						<el-input class="jiyi" v-model="formInfo.fei"></el-input>
					</el-form-item>
					<el-form-item label="4.脉搏是身体循环系统健康的指示灯。静止休息时脉搏越低，说明我们的心脏越健康。饭后散步结束后，安静地坐下休息10分钟，然后用食指和中指在手腕上测量一下脉搏。(单位:次/分钟)">
										<el-input class="jiyi" v-model="formInfo.xin"></el-input>
									</el-form-item>
					<el-form-item label="5.用一只至少30厘米长的直尺。你轻轻拿住直尺一端，让他做好准备，抓住你松手而落下的直尺，看下他抓住直尺的位置，并测量这个位置距离另一端的距离。(单位:厘米)">
						<el-input class="jiyi" v-model="formInfo.fanying"></el-input>
													</el-form-item>
					<el-form-item label="6.单腿站立，紧闭双目，抬起另一只腿的膝盖，双臂平放，以帮助身体保持平衡。当失去平衡，另一只脚着地的时候，测试结束。(单位:秒)">
								<el-input class="jiyi" v-model="formInfo.pingheng"></el-input>
																	</el-form-item>
					<el-form-item label="7.用大拇指和食指将手背上的皮肤捏起，保持约10秒钟，然后将之放松，看看皮肤需要多久才能恢复原状。
  (单位:秒)">
							<el-input class="jiyi" v-model="formInfo.pifu"></el-input>
																					</el-form-item>
	</el-form>
	<div class="btn">
		<el-button @click="panduan">提交</el-button>
		<el-button @click="chongzhi">重置</el-button>
	</div>
</el-container>
</template>

<script>
	
	export default {
		methods:{
			panduan(){
				if(this.jiyi<18){
					this.num=this.num+10
				}else if(this.jiyi<10){
					this.num=this.num+5
				}else{
					this.num=this.num+0
				}
				if(this.rouruan<20){
					this.num=this.num+0
				}else if(this.rouruan<10){
					this.num=this.num+5
				}else{
					this.num=this.num+10
				}
				if(this.fei<1.2){
					this.num=this.num+10
				}else if(this.fei<1){
					this.num=this.num+5
				}else{
					this.num=this.num+0
				}
				if(this.xin<70){
					this.num=this.num+10
				}else if(this.xin<65){
					this.num=this.num+5
				}else{
					this.num=this.num+0
				}
				if(this.fanying<20){
					this.num=this.num+0
				}else if(this.fanying<15){
					this.num=this.num+5
				}else{
					this.num=this.num+10
				}
				if(this.pingheng<25){
					this.num=this.num+0
				}else if(this.pingheng<20){
					this.num=this.num+5
				}else{
					this.num=this.num+10
				}
				if(this.pifu<4){
					this.num=this.num+0
				}else if(this.pifu<3){
					this.num=this.num+5
				}else{
					this.num=this.num+10
				}
				if(this.num<71){
					// alert("开挂了?");
					console.log(111);
				}else if(this.num<61){
					alert("您的身体健康")
					this.formInfo.jiyi=''
					this.formInfo.rouruan=''
					this.formInfo.xin=''
					this.formInfo.fei=''
					this.formInfo.pingheng=''
					this.formInfo.pifu=''
					this.formInfo.fanying=''
				}else if(this.num<51){
					alert("您的身体较健康")
					this.formInfo.jiyi=''
					this.formInfo.rouruan=''
					this.formInfo.xin=''
					this.formInfo.fei=''
					this.formInfo.pingheng=''
					this.formInfo.pifu=''
					this.formInfo.fanying=''
				}else if(this.num<41){
					alert("您的身体较亚健康")
					this.formInfo.jiyi=''
					this.formInfo.rouruan=''
					this.formInfo.xin=''
					this.formInfo.fei=''
					this.formInfo.pingheng=''
					this.formInfo.pifu=''
					this.formInfo.fanying=''
				}else if(this.num<31){
					alert("您的身体较不健康")
					this.formInfo.jiyi=''
					this.formInfo.rouruan=''
					this.formInfo.xin=''
					this.formInfo.fei=''
					this.formInfo.pingheng=''
					this.formInfo.pifu=''
					this.formInfo.fanying=''
				}else if(this.num<21){
					alert("您的身体不健康")
					this.formInfo.jiyi=''
					this.formInfo.rouruan=''
					this.formInfo.xin=''
					this.formInfo.fei=''
					this.formInfo.pingheng=''
					this.formInfo.pifu=''
					this.formInfo.fanying=''
				}else if(this.num<11){
					alert("您的身体很不健康")
					this.formInfo.jiyi=''
					this.formInfo.rouruan=''
					this.formInfo.xin=''
					this.formInfo.fei=''
					this.formInfo.pingheng=''
					this.formInfo.pifu=''
					this.formInfo.fanying=''
				}
			},
			chongzhi(){
				this.formInfo.jiyi=''
				this.formInfo.rouruan=''
				this.formInfo.xin=''
				this.formInfo.fei=''
				this.formInfo.pingheng=''
				this.formInfo.pifu=''
				this.formInfo.fanying=''
			}
		},
		props:[],
		components:{
		
		},
		data(){
			return{
				num:0,
				formInfo:{
					jiyi:'',
					rouruan:'',
					xin:'',
					fei:'',
					pingheng:'',
					pifu:'',
					fanying:''
				}
			}
		}
		
		
	}
</script>

<style lang="scss" scoped>
	.health{
		width: 100vw;
		background-color: #eee;
		display: flex;
		flex-wrap: wrap;
		::v-deep .jiyi input{
			// display: block;
			width: 100vw;
			font-size: 30rpx;
			color: black;
			z-index: 1;
		}
		::v-deep label{
			text-align: left;
		}
		.btn{
			width: 100vw;
			height: 20vh;
		}
	}
</style>