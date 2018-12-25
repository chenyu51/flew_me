<template>
  <div class="list_item">
    <p class='content' @click='editIt(item._id)'>{{item.content}}</p>
    <p class="timer" @click='editIt(item._id)'>{{item.createTime}}</p>
    <imgs :imgs='item.imgs'></imgs>
    <comment :item='item' @getCom='getComments'></comment>
    <p style="margin-bottom:10px;"></p>
    <commentList v-for='dt in comments' :key='dt.content' @getCom='getComments' :comItem='dt'></commentList>
  </div>
</template>

<script>

import imgs from '@/components/imgs'
import comment from '@/components/comment'
import commentList from '@/components/commentsList'
import {getDb,formatTime} from '@/utils/index.js'

export default {
  props: {
    item: {
      type:Object,
      default:{
        id:'',
        content:'',
        imgs:[]
      }
    }
  },
  data(){
    return{
      comments:[],
      doEdit:false//编辑批注
    }
  },
  components:{
      imgs,
      comment,
      commentList
  },
  mounted(){
    this.getComments();
  },
  methods: {
    updateCom(e){
      this.getCom=e;
    },
    getComments(){
      const $this=this;
      getDb('comments').where({pid:$this.item._id}).get().then(res=>{
        console.log(res)
        this.comments=res.data;
      }).catch(e=>console.log(e))
    },
    editIt(id){
        wx.navigateTo({ url: `../addNew/main?id=${id}`});
    }
  }
};
</script>

<style>
.list_item{
    margin:20rpx 0;
    padding:20rpx;
    background: #fff;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, .1);
}
.list_item>p{
  padding:0 30rpx;
  padding-bottom:0;
}
.list_item>p.timer{
  padding:0 30rpx;
  color:#999;
  font-size:30rpx;
}
</style>
