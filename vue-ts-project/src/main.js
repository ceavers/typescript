import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import AntVue from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(AntVue);
if (process.env.NODE_ENV === 'development') {
    require('../mock');
}
Vue.config.productionTip = false;
// if (sessionStorage.getItem("store") ) {
//   store.replaceState(Object.assign({}, store.state,JSON.parse(sessionStorage.getItem("store"))))
//   sessionStorage.removeItem("store")
// }
// //在页面刷新时将vuex里的信息保存到sessionStorage里
// window.addEventListener("beforeunload",()=>{
//   sessionStorage.setItem("store",JSON.stringify(store.state))
// })
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
//# sourceMappingURL=main.js.map