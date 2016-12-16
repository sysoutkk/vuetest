<template>
	<div id="app">
		<h2>router</h2>
		<p>
			<!-- 使用 router-link 组件来导航. -->
			<!-- 通过传入 `to` 属性指定链接. -->
			<!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
			<router-link to="/route1">Go to Foo</router-link>
			<router-link to="/route2">Go to Bar</router-link>
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
