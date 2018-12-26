<template>
  <div class='item_opera'>
      <div @click="addLike(-1)"><i class="iconfont icon-xihuan_ minus_icon"></i></div>
      <div @click="addLike(1)"><i class="iconfont icon-xihuan_"></i></div>
      <p class="plus_icon">+</p><p>{{plus}}</p>
      <docomment :edit='edit' :item='item' @doEdit="$emit('doEdit',false)"></docomment>
      <div class="delete_btn" @click='DeleteItem'>D</div>
  </div>
</template>

<script>
import {getDb,formatTime} from '@/utils/index.js'
import docomment from '@/components/docomment'
export default {
  props: {
    item: Object,
    edit:null
  },
  data(){
      return {
          plus:0,
          showComTextarea:false
      }
  },
  created() {
     this.itemDb=getDb().doc(this.item._id);
     this.plus=this.item.plus;
  },
  methods: {
      addLike(v){
        this.plus+=v;
        this.itemDb.update({
            data:{
                plus:this.plus
            }
        })
          .then(res=>console.log('更改plus成功'))
          .catch(e=>console.log(e))
      },
      DeleteItem(){
          const $this=this;
          this.itemDb.remove()
          .then(res=>{
              $this.$store.dispatch('getList')
            })
          .catch(e=>console.log(e))
      }
  },
  components:{docomment}
};
</script>

<style>
@import url('../assets/iconfont.css');
.item_opera{
    text-align: right;
    color:#666;
}
.item_opera p,
.item_opera i,
.item_opera div{
    font-size:40rpx;
    padding: 0;
    line-height: 1;
    width:auto;
    display: inline-block;
    background: none;
    vertical-align: middle;
    margin:0 5rpx;
}
i.icon-xihuan_{
    color:red;
}
i.minus_icon{
    color:#999;
}
.item_opera p{
    font-size:30rpx;    
}
.item_opera p.plus_icon{
    margin-top:-1rpx;
}
.item_opera div.delete_btn{
    vertical-align:bottom;
    background: #f1c0c0;
    color:#fff;
    width:40rpx;
    line-height:40rpx;
    margin-left:40rpx;
    border-radius: 50%;
    text-align: center;
}
</style>
