<template>
	<div id="app">
		<h2>router2</h2>
		<p>
			2
		</p>
		<!-- 路由出口 -->
		<!-- 路由匹配到的组件将渲染在这里 -->
		<router-view class="view"></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
	}
</script>

<style>
</style>