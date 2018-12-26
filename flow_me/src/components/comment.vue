<template>
  <div class='item_opera'>
      <div @click="addLike(-1)"><i class="iconfont icon-xihuan_ minus_icon"></i></div>
      <div @click="addLike(1)"><i class="iconfont icon-xihuan_"></i></div>
      <p class="plus_icon">+</p><p>{{plus}}</p>
      <div @click='showComment'><i class="iconfont icon-pinglun"></i></div>
      <div class="delete_btn" @click='DeleteItem'>D</div>
      <div :class="showComTextarea?'comment_window_show':'comment_window_hide'" class='comment_window'  @click.self="showComTextarea=false">
          <textarea v-model='commentValue' name="commentValue" id="" cols="30" rows="10" autofocus></textarea>
          <button @click="commitComment" class="confirm_commit">确定</button>
          <button @click="showComTextarea=false" class="confirm_commit cancel_commit">取消</button>
      </div>
  </div>
</template>

<script>

import {getDb,common_guid,formatTime} from '@/utils/index.js'
export default {
  props: {
    item: Object,
    edit:null
  },
  data(){
      return {
          plus:0,
          commentValue:'',
          showComTextarea:false
      }
  },
  created() {
     this.itemDb=getDb().doc(this.item._id);
     this.plus=this.item.plus;
  },
  computed:{
      eidtComment(){
          return this.$store.state.eidtComment;
      }
  },
  watch:{
      'eidtComment'(){
          if(this.edit&&this.eidtComment.content){
              this.showComTextarea=true;
              this.commentValue=this.eidtComment.content;
          }
      },
      showComTextarea(){
          if(!this.showComTextarea){
              this.commentValue='';
          }
      }
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
      showComment(){
          this.showComTextarea=true;
      },
      commitComment(){
        const $this=this;
        if(this.eidtComment._id){this.updateComment();return;}
        const comments={content:$this.commentValue,createTime:formatTime(new Date),pid:this.item._id};
        getDb('comments').add({
            data:comments
        }).then(res=>{
              $this.showComTextarea=false;
              $this.commentValue='';
              $this.$emit('getCom',true);
              $this.$emit('doEdit',false);
              $this.$store.dispatch('commitEditData');
        }).catch(e=>console.log(e))
      },
      updateComment(){
          const $this=this;
          getDb('comments').doc(this.eidtComment._id).update({
              data:{
                  content:$this.commentValue
              }
          }).then(res=>{
              $this.showComTextarea=false;
              $this.commentValue='';
              $this.$emit('getCom',true);
          }).catch(e=>console.log(e))
      },
      DeleteItem(){
          const $this=this;
          this.itemDb.remove()
          .then(res=>{
              $this.$store.dispatch('getList')
            })
          .catch(e=>console.log(e))
      }
  }
};
</script>

<style>
@import url('../assets/iconfont.css');
.item_opera{
    text-align: right;
    color:#666;
}
.comment_window button,
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
.item_opera button{
    margin:0 30rpx;
}
i.icon-xihuan_{
    color:red;
}
i.minus_icon{
    color:#999;
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
.item_opera .comment_window{
    display: block;
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
.item_opera div.delete_btn{
    vertical-align:bottom;
    background: #f1c0c0;
    color:#fff;
    width:40rpx;
    line-height:40rpx;
    margin-left:30rpx;
}
</style>
