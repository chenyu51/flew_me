<template>
  <div>
    <p>ddd</p>
    <imgs :imgs='item'></imgs>
    <comment></comment>
  </div>
</template>

<script>

import imgs from '@/components/imgs'
import comment from '@/components/comment'
export default {
  props: {
    item: Object
  },
  components:{
      imgs,
      comment
  },
  methods: {}
};
</script>

<style>
</style>
