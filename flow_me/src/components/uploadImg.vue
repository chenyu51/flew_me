<template>
  <div class="upload_img">
      
      <imgs></imgs>
  </div>
</template>

<script>
import imgs from '@/components/imgs'

export default {
  props: ['text'],
  components:{imgs}
}
</script>

<style>
.upload_img {
  padding: 10px;
}
</style>
