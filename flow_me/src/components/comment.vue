<template>
  <div class='item_opera'>
      <button><i class="iconfont icon-xihuan_"></i></button>
      <p class="plus_icon">+</p><p>{{count}}</p>
      <button><i class="iconfont icon-pinglun"></i></button>
  </div>
</template>

<script>
require('../assets/iconfont.css')
export default {
  props: {
    item: Object,
    count:{
        type:Number,
        default:0
    },
  },
  methods: {}
};
</script>

<style>
.item_opera{
    text-align: right;
    color:#666;
}
.item_opera p,
.item_opera i,
.item_opera button{
    font-size:40rpx;
    padding: 0;
    margin:0;
    line-height: 1;
    display: inline-block;
    background: none;
    /* position: inherit; */
    vertical-align: middle;
}
i.icon-xihuan_{
    color:red;
}
i.icon-pinglun{
    color:rgb(77, 75, 75);
}
.item_opera p{
    font-size:30rpx;    
}
.item_opera p.plus_icon{
    margin-top:-1rpx;
}
</style>
