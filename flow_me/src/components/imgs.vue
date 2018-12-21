<template>
  <div>
    <img class='little_img' v-for="(src,i) in imgs" :src="src" alt="图片" :key="src" @tap="bigger(i)">
    <swiper v-if="showBigger" :current="current">
      <block v-for="(src,i) in imgs" :key='src'>
        <swiper-item>
          <img :src="src" class="slide-image" width="100%" height="150">
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    imgs:Array
  },
  data(){
      return{
      showBigger:false,
      current:0
      }
  },
  methods: {
    bigger(i) {
        this.showBigger=true;
        this.current=i;
    }
  }
};
</script>

<style>
.little_img{
    width:20%;
}
</style>
