<template>
  <btn @toggle="toggleList" :contentType='contentType'>
    <item></item>
    <item></item>
  </btn>
</template>

<script>
import btn from '@/components/mainBtn'
import item from '@/components/item'

export default {
  data () {
    return {
      contentType:1,
      motto: 'Hello World',
      userInfo: {}
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

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
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
</style>
