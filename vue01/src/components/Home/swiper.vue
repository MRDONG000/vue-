<template>
	
		   <el-carousel height="200px">
		      <el-carousel-item v-for="item in 4" :key="item">
		       
		      </el-carousel-item>
		    </el-carousel>
	
</template>

<script>
	export default {
		
		
		
		
	}
</script>

<style lang="scss" scoped>
	 .el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 150px;
	    margin: 0;
	  }
	
	  .el-carousel__item:nth-child(3) {
	     background:url(https://img1.baidu.com/it/u=993257756,2385179193&fm=253&fmt=auto&app=120&f=JPEG?w=900&h=383) no-repeat;
		 background-size: 100% 100%;
	  }
	  
	  .el-carousel__item:nth-child(4) {
	     background:url(https://img2.baidu.com/it/u=4137055807,1148870278&fm=253&fmt=auto&app=138&f=JPG?w=500&h=213) no-repeat;
		 	 background-size: 100% 100%;
	  }
	  .el-carousel__item:nth-child(5) {
	    background:url(https://img1.baidu.com/it/u=312209474,1252777849&fm=253&fmt=auto&app=138&f=JPG?w=1080&h=455) no-repeat;
			 background-size: 100% 100%;
	  }
	  .el-carousel__item:nth-child(6) {
	     background:url(https://img2.baidu.com/it/u=1834005031,365058505&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=213) no-repeat;
		 	 background-size: 100% 100%;
	  }
</style>