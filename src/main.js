import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import route1 from './components/route1.vue';
import routeson1 from './components/route-son1.vue';
import routeson2 from './components/route-son2.vue';
import route2 from './components/route2.vue'
import vueResource from 'vue-resource';
Vue.use(VueRouter);
Vue.use(vueResource);
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = {
	template: '<div>foo</div>'
}
const Bar = {
	template: '<div>bar</div>'
}
const routes = [{
	path: '/route1',
	component: route1,
	children: [
	            {
	              // 当 /user/:id/profile 匹配成功，
	              // UserProfile 会被渲染在 User 的 <router-view> 中
	              path: 'routeson1',
	              component: routeson1
	            },
	            {
	              // 当 /user/:id/posts 匹配成功
	              // UserPosts 会被渲染在 User 的 <router-view> 中
	              path: 'routeson2',
	              component: routeson2
	            }
]
}, {
	path: '/route2',
	component: route2
}]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
	routes // （缩写）相当于 routes: routes
})
const app=new Vue({
  router:router,
  render: h => h(App)
}).$mount("#app")
