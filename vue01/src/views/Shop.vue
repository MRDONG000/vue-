<template>
  <div class="Shop">
		<Search></Search>
		<router-view></router-view>
  </div>
</template>
<script>
	import Search from '../components/Shop/search.vue'

	export default {
		components:{
			Search
		},
		
		
	}
</script>
<style lang="scss" scoped>
	
</style>
