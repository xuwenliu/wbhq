// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueResource from "vue-resource"

// Vue.use(VueResource)

Vue.config.productionTip = false
import './assets/flexible.js'
import './assets/reset.css'

//过滤器
Vue.filter("idCard",function(value) {
	var ayy = value.split('');
	ayy.splice(8, 6, "*","*","*","*","*","*");
	return ayy.join("");
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
