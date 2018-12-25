<template>
  <div class="list_item">
    <p class='content' @click='editIt(item._id)'>{{item.content}}</p>
    <p class="timer" @click='editIt(item._id)'>{{item.createTime}}</p>
    <imgs :imgs='item.imgs'></imgs>
    <comment :item='item'></comment>
    <p style="margin-bottom:10px;"></p>
    <commentList v-for='dt in item.comments' :key='dt.content' :comItem='dt' ></commentList>
  </div>
</template>

<script>

import imgs from '@/components/imgs'
import comment from '@/components/comment'
import commentList from '@/components/commentsList'
import {formatTime} from '@/utils/index.js'

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
  components:{
      imgs,
      comment,
      commentList
  },
  methods: {
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
