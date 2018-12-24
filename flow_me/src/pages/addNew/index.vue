<template>
  <div class='edit_page'>
    <textarea name="content" id="" cols="30" rows="10" placeholder="请输入内容"></textarea>
    <uploadImg></uploadImg>
    <button @tap="confirmFinish">完成</button>
  </div>
</template>

<script>
import uploadImg from '@/components/uploadImg'

export default {
  components: {
    uploadImg
  },
  data () {
    return {
      
    }
  },
  methods: {
    confirmFinish(){
      console.log('提的交')
    }
  }
}
</script>

<style>
.edit_page{
  text-align: center;
}
.edit_page textarea{
  display: inline-block;
  background:rgba(219, 219, 219, 0.3);
  box-shadow: 0 0 10px 5px rgba(0,0,0,.1);
  width: 100%;
  text-align: left;
  padding:30rpx;
}
</style>
