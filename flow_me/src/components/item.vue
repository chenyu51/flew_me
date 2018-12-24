<template>
  <div class="list_item">
    <p @click='editIt(item.id)'>ddd</p>
    <imgs :imgs='item.imgs'></imgs>
    <comment></comment>
    <commentList></commentList>
  </div>
</template>

<script>

import imgs from '@/components/imgs'
import comment from '@/components/comment'
import commentsList from '@/components/commentsList'
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
      commentsList
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
    margin:10rpx 0;
    padding:20rpx;
    background: #fff;
}
</style>
