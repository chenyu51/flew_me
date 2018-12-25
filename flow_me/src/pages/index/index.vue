<template>
  <btn @toggle="toggleList" :contentType='contentType'>
    <item v-for='data in list' :key='data._id' :item='data'></item>
  </btn>
</template>

<script>
import btn from '@/components/mainBtn'
import item from '@/components/item'
import {getDb} from '@/utils/index.js'

export default {
  data () {
    return {
      contentType:1,
      motto: 'Hello World',
      userInfo: {},
      list:[],
      pageSize:10,
      pageNo:1
    }
  },

  components: {
    btn,
    item
  },

  methods: {
    toggleList(contentType){
      this.contentType=contentType;
      const title=contentType===1?'我的喜悦':'我的伤心';
      wx.setNavigationBarTitle({title});
      this.getList();
    },
    getList(){
      const db=getDb();
      db.where({
        type:this.contentType+''
      }).get().then((res)=>{
        this.list=res.data;
      }).catch(e=>console.log(e))
    },
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created(){
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
    this.getList()
  },
  onPullDownRefresh(){
    console.log('pull')
    this.getList()
  }

}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

button{
  background: #FFF0F5;
}
</style>
