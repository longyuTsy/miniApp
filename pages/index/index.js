// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'这是一条消息',
    condition:false,
    arr:[1,2,3,4,5],
    obj:{
      one:'111',
      name:'tsy',
      age:'18',
      tag:'古典舞'
    },
    flag:'111'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  handClick(event,ownerInstance){
    console.log('event',event)
    console.log('ownerInstance',ownerInstance)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})