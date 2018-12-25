<template>
  <movable-area class="move_area" @tap="hiddeAdd">
    <movable-view direction="all">
      <button class="main_btn" @tap="toggle" @longpress="showWriteBtns"></button>
    </movable-view>
    <slot></slot>
    <addType :show="add" @choosed="hiddeAdd"></addType>
  </movable-area>
</template>

<script>
import addType from "@/components/addType";
export default {
  data() {
    return {
      longTap: false,
      add: false
    };
  },
  components: { addType },
  methods: {
    toggle() {
      if (this.longTap) {
        this.longTap = false;
        return;
      }
      this.$store.dispatch('toggleList',this.$store.state.contentType===1?0:1);
    },
    showWriteBtns() {
      this.longTap = true;
      this.add = true;
    },
    hiddeAdd() {
      this.add = false;
    }
  }
};
</script>

<style>
.main_btn {
  border-radius: 50%;
  width: 100rpx;
  height: 100rpx;
  background: rgba(255, 240, 245,.8);
  position: fixed;
}
.move_area {
  width: 100vw;
  height: 100vh;
  background: rgba(221, 243, 247, 0.3);
}
</style>
