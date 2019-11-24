import Vue from 'vue'
import Vuex from 'vuex'
import state from './module/state'
import Cookies from 'js-cookie'
import {loginReq,getInfoReq} from '@/api/user'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations: {
    setUserInfoMutations(state,info){
      const {
        user_name,
        sex
      } = info
      state.user_name = user_name;
      state.sex =sex
    }
  },
  actions: {
    loginActions({dispatch},{user_name,password}){
      return new Promise((resolve,reject)=>{
        loginReq({user_name,password}).then(res=>{
          const {
            data:{
              code,
              msg,
              data
            }
          } = res
          if(code ===0){
            Cookies.set('token',data.user_id)
            dispatch('getInfoActions',data).then(()=>{
              resolve()
            })
          }else{
            console.error(msg)
          }
        })
      })
    },
    getInfoActions({commit},{user_id}){
      return new Promise((resolve,reject)=>{
        getInfoReq({user_id}).then(res=>{
          const {
            data:{
              code,
              data
            }
          } = res
          if(code === 0){
            commit('setUserInfoMutations',data)
            resolve()
          }
        })
      })
    }
  },
  modules: {
  },
  plugins:[createPersistedState()]
});
