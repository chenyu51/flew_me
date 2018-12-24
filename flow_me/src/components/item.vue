<template>
  <div class="list_item">
    <p>ddd</p>
    <imgs :imgs='item'></imgs>
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
    item: Object
  },
  components:{
      imgs,
      comment,
      commentsList
  },
  methods: {}
};
</script>

<style>
.list_item{
    margin:10rpx 0;
    padding:20rpx;
    background: #fff;
}
</style>
