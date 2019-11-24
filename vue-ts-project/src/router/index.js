import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Cookies from 'js-cookie';
Vue.use(VueRouter);
const router = new VueRouter({
    routes
});
const turn = (to, from, next) => {
    if (to.path === '/login') {
        next(from);
    }
    else {
        next();
    }
};
router.beforeEach((to, from, next) => {
    const token = Cookies.get('token');
    if (token) {
        // if(!store.state.user_name){
        //   store.dispatch('getInfoActions',{user_id:token}).then(()=>{
        //     turn(to,from,next)
        //   })
        // }else{
        //   turn(to,from,next)
        // }
        turn(to, from, next);
    }
    else {
        if (to.path === '/login') {
            next();
        }
        else {
            next('/login');
        }
    }
});
export default router;
//# sourceMappingURL=index.js.map