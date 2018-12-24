function formatNumber(n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}
//拍照
export function TackPic() {
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有'
      sourceType: ['camera'], //amera 使用相机
      success: (res) => {
        resolve(res.tempFiles[0]);
      },
      fail: (err) => {
        console.log(err);
        // this.failHit(err.errMsg);
        reject(err)
      }
    })
  })
}

export function uploadFile({url,filepath,data}) {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url,
      filePath: filepath,
      name: 'uploadFile',
      header: {},
      formData: data || {},
      success: (res) => {
        resolve(res)
      },
      fail(err) {
        reject(err);
      }
    })
  })
}



export default {
  formatNumber,
  formatTime
}
