Page({
  data: {
    animationData1: [],     //结点67
    animationData2: [],     //原链表剩余结点
    count: 0                //用于记录是否多次进行展示，第一次展示时count为0，之后均为1
  },

  linkListDisplay: function () {
    var systemInfo = wx.getSystemInfoSync()
    var animation1 = wx.createAnimation({     //结点10的箭头
      duration: 600,
      transformOrigin: '0 50% 0'
    })
    var animation2 = wx.createAnimation({     //结点67的箭头
      duration: 600
    })

    if(this.data.count===0) {
      animation1.opacity(0).step()
      animation2.translateX(-65 / 750 * systemInfo.windowWidth).step()
    }

    else {
      animation1.opacity(1).step()
      animation2.translateX(0).step()
      animation1.opacity(0).step({ delay: 600 })
      animation2.translateX(-65 / 750 * systemInfo.windowWidth).step({ delay: 600 })
    }

    this.setData({
      animationData1: animation1.export(),
      animationData2: animation2.export(),
      count: 1
    })
  },

  linkListExplain: function () {
    wx.navigateTo({
      url: "/pages/linkList/linkListDeletePre_explain/linkListDeletePre_explain"
    })
  }
})