<template>
	<div id="phone">
		
	</div>
</template>

<script>
	export default{
		methods:{
			initMap(){
				// 定义地图中心点坐标
			var center = new window.TMap.LatLng(34.15139,108.93693)
				      // 定义map变量，调用 TMap.Map() 构造函数创建地图
			var map = new window.TMap.Map(document.getElementById('phone'), {
				        center: center, // 设置地图中心点坐标
				        zoom: 17, // 设置地图缩放级别
				        pitch: 43.5, // 设置俯仰角
				        rotation: 45 // 设置地图旋转角度
				      })
			// ---
			//创建并初始化MultiMarker
			var markerLayer = new window.TMap.MultiMarker({
			    map: map,  //指定地图容器
			    //样式定义
			    styles: {
			        //创建一个styleId为"myStyle"的样式（styles的子属性名即为styleId）
			        "myStyle": new window.TMap.MarkerStyle({ 
			            "width": 25,  // 点标记样式宽度（像素）
			            "height": 35, // 点标记样式高度（像素）
			            "src": 'https://img0.baidu.com/it/u=252417767,2667446203&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=746',  //图片路径
			            //焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点
			            "anchor": { x: 16, y: 32 }  
			        }) 
			    },
			    //点标记数据数组
			    geometries: [{
			        "id": "1",   //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
			        "styleId": 'myStyle',  //指定样式id
			        "position": new window.TMap.LatLng(39.954104, 116.357503),  //点标记坐标位置
			        "properties": {//自定义属性
			            "title": "marker1"
			        }
			    }, {//第二个点标记
			        "id": "2",
			        "styleId": 'marker',
			        "position": new window.TMap.LatLng(39.994104, 116.287503),
			        "properties": {
			            "title": "marker2"
			        }
			    }
			    ],
					// 结尾
					});
			
			// 这里是initMap的极为
		}
		},


			mounted() {
				this.initMap()
			}
		}
	
</script>

<style lang="scss" scoped>
	#phone{
		width: 100%;
		height: 100%;
	}
</style>