<template>
  <div class="comment_list">
    <p class="content">
      {{comItem.createTime}}:
      <span class="content_de">{{comItem.content}}</span>
      <span class="delete_btn" @click="deleteCom">D</span>
    </p>
  </div>
</template>

<script>

import {getDb} from '@/utils/index.js'
export default {
  props:{
    comItem:{
      type:Object,
      default:{}
    }
  },
  created() {
     this.itemDb=getDb().doc(this.comItem.id);
  },
  methods: {
    deleteCom(){
      this.itemDb.remove();
    }
  }
}
</script>

<style>
.comment_list{
  background:	#F5FFFA;
  border-bottom:1px solid #F2F2F2;
  font-size:25rpx;
  color:#999999;
  padding:30rpx;
}
.content{
  font-weight:bolder;
}
.content_de{
  color:#333;
}
.delete_btn{
  float: right;
  font-size:30rpx;
}
</style>
