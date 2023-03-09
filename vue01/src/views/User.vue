<template>
	<el-container class="user">
		<TouBu></TouBu>
		<ZheDie></ZheDie>
	</el-container>
</template>

<script>
import TouBu from '../components/User/TouBu.vue'
import ZheDie from '../components/User/ZheDie.vue'
	export default{
		components:{
			TouBu,
			ZheDie
		},
		computed:{
		
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.user{
		display: flex;
		flex-wrap: wrap;
	}
</style>