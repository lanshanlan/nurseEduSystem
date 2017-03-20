// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import  VueResource from  'vue-resource'
import App from './App'
import router from './routes/index'   //导入index文件，使用其中的route路径

Vue.config.productionTip = false;
Vue.use(VueResource);

/*下面的app实力是一个外壳，每个page页面都会用到app这个外壳框架 */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
