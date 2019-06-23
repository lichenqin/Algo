Page({
  data: {
    animationData1: [],     //结点2
    animationData2: [],     //结点53的箭头
    animationData3: [],     //原链表剩余结点
    animationData4: [],     //null
    count: 0                //用于记录是否多次进行展示，第一次展示时count为0，之后均为1
  },

  linkListDisplay: function (that) {
    var systemInfo = wx.getSystemInfoSync()
    var animation1 = wx.createAnimation({     //结点2
      duration: 600
    })
    var animation2 = wx.createAnimation({     //结点53的箭头
      duration: 600
    })
    var animation3 = wx.createAnimation({     //原链表剩余结点
      duration: 600
    })
    var animation4 = wx.createAnimation({     //null
      duration: 600
    })

    if (this.data.count === 0) {
      animation1.opacity(0).step()
      animation2.scaleX(3.4).scaleY(1.5).translateX(20 / 750 * systemInfo.windowWidth).step()

      //700ms
      animation2.scaleX(1).scaleY(1).translateX(60 / 750 * systemInfo.windowWidth).step({ delay: 100 })
      animation3.translateX(60 / 750 * systemInfo.windowWidth).step({ delay: 700 })
      animation4.translateX(-80 / 750 * systemInfo.windowWidth).step({ delay: 700 })
    }

    else {
      animation1.opacity(1).step()
      animation2.translateX(0).step()
      animation3.translateX(0).step()
      animation4.translateX(0).step()

      //600ms
      animation1.opacity(0).step({ delay: 300})
      animation2.scaleX(3.4).scaleY(1.5).translateX(60 / 750 * systemInfo.windowWidth).step({ delay: 300})

      //1600ms
      animation2.scaleX(1).scaleY(1).translateX(60 / 750 * systemInfo.windowWidth).step({ delay: 100 })
      animation3.translateX(60 / 750 * systemInfo.windowWidth).step({ delay: 1000 })
      animation4.translateX(-80 / 750 * systemInfo.windowWidth).step({ delay: 1000 })
    }

    this.setData({
      animationData1: animation1.export(),
      animationData2: animation2.export(),
      animationData3: animation3.export(),
      animationData4: animation4.export(),
      count: 1
    })
  },

  linkListExplain: function () {
    wx.navigateTo({
      url: "/pages/linkList/linkListDeleteTail_explain/linkListDeleteTail_explain"
    })
  }
})