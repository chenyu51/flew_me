<template>
  <div class="comment_list">
    <p class="content">
      {{comItem.createTime}}:
      <span class="content_de">{{comItem.content}}</span>
    </p>
    <div class="bottom_btn">
      <span class="edit_btn" @click="editCom">E</span>
      <span class="edit_btn delete_btn" @click="deleteCom">D</span>
    </div>
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
     this.itemDb=getDb('comments').doc(this.comItem._id);
  },
  methods: {
    async deleteCom(){
      await this.itemDb.remove();
      this.$emit('getCom',true);
    },
    editCom(){
      this.$emit('doEdit',true);
      this.$store.dispatch('commitEditData',this.comItem._id);
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
  position:relative;
  padding:20rpx;
}
.content{
  font-weight:bolder;
  padding-right:100rpx;
  font-size:20rpx;
}
.content_de{
  color:#333;
}
.bottom_btn{
  text-align: right;
  position:absolute;
  top:10rpx;
  right:-5rpx;
}
.edit_btn{
  font-size:30rpx;
  line-height: 1;
  margin:0 10rpx;
  display: inline-block;
  border:1px solid rgb(245, 197, 197);
  line-height:40rpx;
  width:40rpx;
  background: #f1c0c0;
  color:#fff;
  text-align: center;
  border-radius: 50%;
  
}
.delete_btn{
  margin-left:20rpx; 
}

</style>
