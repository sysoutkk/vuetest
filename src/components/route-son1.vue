<template>
<div id="vueResource">
	<h2>router-son1</h2>
	<p>
		son1
		<h1>{{$route.path}}</h1>
		{{data}}
	</p>
	<!-- 路由出口 -->
	<!-- 路由匹配到的组件将渲染在这里 -->
</div>
</template>

<script>
export default {
	data() {
		return {
			data: ""
		}
	},
	created() {
		// 组件创建完后获取数据，
		// 此时 data 已经被 observed 了
		this.fetchData()
	},
	watch: {
		// 如果路由有变化，会再次执行该方法
		'$route': 'fetchData'
	},
	methods: {
		fetchData() {
			this.$http.get('/src/data/data.js').then((response) => {
				this.data = "123"
			}, (response) => {
				// error
			})
		}
	}
}
</script>

<style>

</style>
