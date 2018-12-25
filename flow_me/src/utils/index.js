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
    //预览图片
export function previewPic(src, imgArr) {
  wx.previewImage({
      current: src,
      urls: imgArr,
  });
}
export function getDb(name){
  const db = wx.cloud.database();
  const lists = db.collection(name||'flowList');
  return lists;
}

export function common_guid() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = d / 16 | 0;
    return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
  });
  uuid = uuid.replace(/-/g, "");
  return uuid;
}

function formatNumber(n) {
	n = n.toString();
	return n[1] ? n : '0' + n;
};

export function myFormatTime (date) {
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();

	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

	return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};
export function goback(){
  wx.navigateBack({
    delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
  });
}

export default {
  formatNumber,
  formatTime,
  previewPic,
  uploadFile,
  TackPic,
  getDb,
  common_guid,
  formatTime,
  goback
}
