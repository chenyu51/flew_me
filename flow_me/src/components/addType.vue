<template>
  <div class='type_choose' :class='show?"show_type_choose":"hide_type_choose"'>
      <button @click="goAdd(1)">添加喜悦</button>
      <button @click="goAdd(0)">添加伤心</button>
  </div>
</template>

<script>
export default {
    props:{
        show:{
            type:Boolean,
            default:false
        }
    },
    methods: {
        goAdd(type){
            wx.navigateTo({ url: `../addNew/main?type=${type}`});
        }
    }
}
</script>

<style>
.type_choose{
    position: fixed;
    width:100%;
    bottom:0;
}
.show_type_choose {
    transform: translateY(0);
    transition: all linear .3s;
}
.hide_type_choose{
    transform: translateY(100%);
    transition: all linear .3s;
}


</style>
