//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    image: '',
  },

  /**
   * 上传图片
   */
  upload() {
    let that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths[0];
        that.setData({
          image: tempFilePaths,
        });
      },
    });
  },

  handleClick: function(e) {
    //调起上传
    this.upload();
  },
  handleLoad: function(e) {
    console.log('load', e);
  },
  handleImageLoad: function(e) {
    console.log('imageLoad', e);
  },
});
