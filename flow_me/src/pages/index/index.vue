<template>
  <btn @toggle="toggleList">
    <item v-for='data in list' :key='data._id' :item='data' @update='getList'></item>
  </btn>
</template>

<script>
import btn from '@/components/mainBtn'
import item from '@/components/item'
import {getDb} from '@/utils/index.js'

export default {
  data () {
    return {
      pageSize:10,
      pageNo:1
    }
  },

  components: {
    btn,
    item
  },
  computed: {
    list(){
      return this.$store.state.list;
    }
  },
  methods: {
    toggleList(contentType){
      this.$store.dispatch('toggleList',contentType);
    },
    getList(){
      this.$store.dispatch('getList')
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
    }
  },

  created(){
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
    this.getList()
  },
  onShow(){
     this.getList()
  },
  onPullDownRefresh(){
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
