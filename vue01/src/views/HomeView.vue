<template>
  <div class="home">
    <!-- <Swiper></Swiper> -->
	<!-- <DaoHang></DaoHang> -->
	<!-- <DiBu></DiBu> -->
	<TabBar></TabBar>
	<router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import DiBu from '../components/Home/DiBu.vue'
	import TabBar from '../components/Home/TabBar.vue'
export default {
  name: 'HomeView',
  components: {
	// Swiper,
	// DaoHang,
	// DiBu
	TabBar
  },
  created() {
  	this.$router.push('/home')
  }
}
</script>
<style lang="scss" scoped>
	.home{
		width: 100vw;
		height: 100vh;
		position: relative;
	}
</style>
