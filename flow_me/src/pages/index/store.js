// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import {getDb} from '@/utils/index.js'
// import store from './store'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    list: [],
    contentType:1,
    eidtComment:{}
  },
  mutations: {
    update: (state,newData) => {
      state.list=newData
    },
    toggleType: (state,type) => {
      state.contentType=type
    },
    updateComment:(state,data)=>{
      state.eidtComment=data;
    }
  },
  actions:{
    getList(ctx){
      const db=getDb();
      db.where({
        type:ctx.state.contentType+''
      }).get().then((res)=>{
        ctx.commit('update',res.data)
      }).catch(e=>console.log(e))
    },
    toggleList(ctx,contentType){
      const title=contentType===1?'我的喜悦':'我的伤心';
      wx.setNavigationBarTitle({title});
      ctx.commit('toggleType',contentType)
      ctx.dispatch('getList')
    },
    commitEditData(ctx,id){
      if(!id){ctx.commit('updateComment',{});return;}
      const db=getDb('comments');
      db.where({
        _id:id
      }).get().then(res=>{
        ctx.commit('updateComment',res.data[0])
      }).catch(e=>console.log(e))
    }
  }
})

export default store
