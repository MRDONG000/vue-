<template>
	<div class="chuanwen">
			<slot></slot>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss" scoped>
	.chuanwen{
		width: 100%;
		height: 100%;
		img{
			width: 100%;
		}
		span{
			display: block;
			text-align: left;
		}
		.font{
			font-weight: bolder;
		}
		.content{
			padding-left: 10px;
			text-align: left;
		}
	}
	
</style>