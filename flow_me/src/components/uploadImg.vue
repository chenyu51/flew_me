<template>
  <div class="upload_img">
      <button @click="uploadImg">上传</button>
      <imgs :imgs='imgs'></imgs>
  </div>
</template>

<script>
import imgs from '@/components/imgs'
import tools from '@/utils/index.js'

export default {
  props: ['text'],
  components:{imgs},
  data(){
    return {
      imgs:[]
    }
  },
  async uploadImg(){
    console.log('tools')
    const pic=await tools.TackPic();
    console.log(pic)
  }
}
</script>

<style>
.upload_img {
  padding: 10px;
  text-align: left;
}
.upload_img button{
  display: inline-block;
  background:#FFF0F5;
  color:#666;
}
</style>
