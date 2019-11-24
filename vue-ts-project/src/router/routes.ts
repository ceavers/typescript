import Home from '../views/Home.vue';

const routes = [
    {
      path: '/',
      name: 'tmian',
      component: ()=>import('@/components/TMain/index.vue'),
      redirect:'/home',
      children:[
        {
          path: '/home',
          name: 'home',
          component: Home,
        }, 
        {
          path: '/about',
          name: 'about',
          component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        }      ]
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/login')
    }
  ];

  export default routes
  