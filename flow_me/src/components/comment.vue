<template>
  <div class='item_opera'>
      <button @click="addLike"><i class="iconfont icon-xihuan_"></i></button>
      <p class="plus_icon">+</p><p>{{count}}</p>
      <button @click='showComment'><i class="iconfont icon-pinglun"></i></button>
      <div :class="showComTextarea?'comment_window_show':'comment_window_hide'" class='comment_window'  @click.self="showComTextarea=false">
          <textarea name="commentValue" id="" cols="30" rows="10" autofocus></textarea>
          <button @click="commitComment" class="confirm_commit">确定</button>
          <button @click="showComTextarea=false" class="confirm_commit cancel_commit">取消</button>
      </div>
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
  data(){
      return {
          showComTextarea:false
      }
  },
  methods: {
      addLike(){

      },
      showComment(){
          this.showComTextarea=true;
      },
      commitComment(){

          this.showComTextarea=true;

      }
  }
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
    line-height: 1;
    display: inline-block;
    background: none;
    vertical-align: middle;
}
.item_opera button{
    margin:0 30rpx;
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
.comment_window{
    width:100vw;
    height: 100vh;
    background: rgba(0,0,0,.5);
    text-align: center;
    position: fixed;
    left:0;
    top:0;
    z-index: 99999;
}
.comment_window_show{
    transform: scale(1);
    transition: all linear .01s;
}
.comment_window_hide{
    transform: scale(0)
}

.comment_window textarea{
    display: inline-block;
    margin-top:20%;
    padding:30rpx;
    width:700rpx;
    background: #fff;
    text-align: left;
    box-sizing: border-box;
    box-shadow: 0 0 3px 5px rgba(253, 233, 233, 0.5);
}
.comment_window button.confirm_commit{
    display: inine-block;
    width:40%;
    background: #fff;
    padding:30rpx;
    margin:30rpx;
    background: #FFF0F5;
}
.comment_window button.cancel_commit{
    background: rgb(238, 237, 237);
}
</style>
