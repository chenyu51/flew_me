<template>
<movable-area class="move_area">
    <movable-view direction="all">
    <button class='main_btn' @tap='toggle' @longtap='showWriteBtns'></button>
    </movable-view>
    <slot></slot>
</movable-area>
</template>

<script>
export default {
  methods: {
      toggle () {
          console.log('tap')
      },
      showWriteBtns () {
          console.log('long')
      }
  }
}
</script>

<style>
.main_btn {
    border-radius: 50%;
    width:100rpx;
    height:100rpx;
    background: rgba(161, 240, 210, 0.5);
    position: fixed;
}
.move_area{
    width:100vw;
    height:100vh;
}
</style>
