<template>
  <div class='edit_page'>
    <textarea v-model="content" name="content" id="" cols="25" rows="10" placeholder="请输入内容"></textarea>
    <!-- <uploadImg></uploadImg> -->
    <button @tap="confirmFinish">完成</button>
  </div>
</template>

<script>
import uploadImg from '@/components/uploadImg'
import {getDb,formatTime,goback} from '@/utils/index.js'

export default {
  components: {
    uploadImg
  },
  data () {
    return {
      query:{},
      content:''
    }
  },
  onLoad(e){
    this.query=e;
    this.db=getDb();
    this.getItem();
  },
  methods: {
    addNew(){
      this.db.add({
        data:{
          content:this.content,
          createTime:formatTime(new Date()),
          comments:[],
          type:this.query.type,
          plus:0
        }
      }).then((res)=>{
        goback()
      }).catch(e=>console.log(e))
    },
    update(){
      this.db.doc(this.query._id).update({
        data:{
          content:this.content
        }
      }).then(res=>{
        goback()
      }).catch(e=>console.log(e));
    },
    getItem(){
      if(!this.query.id){
        this.query={};
        this.content='';
        return;
      }
      this.db.where({
        _id:this.query.id
      }).get().then(res=>{
        this.query=res.data[0];
        this.content=res.data[0].content
      }).catch(e=>console.log(e))
    },
    confirmFinish(){
      if(this.query._id){
        this.update();
      }else{
        this.addNew();
      }
    }
  }
}
</script>

<style>
.edit_page{
  text-align: center;
}
.edit_page textarea{
  display: inline-block;
  background:rgba(253, 233, 233, 0.2);
  box-shadow: 0 0 10px 5px rgba(0,0,0,.1);
  width: 100%;
  text-align: left;
  padding:30rpx;
  box-sizing: border-box;
}
button{
  background: #FFF0F5;
}
</style>
