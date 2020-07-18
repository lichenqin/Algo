Page({
  data: {
    animationData1: [],     //结点53的箭头
    animationData2: [],     //结点67的箭头
    animationData3: [],     //结点53
    animationData4: [],     //结点67
    animationData5: [],     //结点2
    count: 0                //用于记录是否多次进行展示，第一次展示时count为0，之后均为1
  },

  linkListDisplay: function () {
    var systemInfo = wx.getSystemInfoSync()
    var animation1 = wx.createAnimation({     //结点53的箭头
      duration: 600,
      transformOrigin: '1 50% 0'
    })
    var animation2 = wx.createAnimation({     //结点67的箭头
      duration: 600,
      transformOrigin: '0 50% 0'
    })
    var animation3 = wx.createAnimation({     //结点53
      duration: 600
    })
    var animation4 = wx.createAnimation({     //结点67
      duration: 600
    })
    var animation5 = wx.createAnimation({     //结点2
      duration: 600
    })

    if(this.data.count===0) {
      animation1.translate(0 / 750 * systemInfo.windowWidth, 58 / 750 * systemInfo.windowWidth).rotate(-48).scaleX(2).step()
      animation2.scaleX(3.8).translateX(-10 / 750 * systemInfo.windowWidth).step()
      animation3.translateY(120 / 750 * systemInfo.windowWidth).step()

      //700ms
      animation1.opacity(0).step({ delay: 100 })
      animation2.scaleX(1).scaleY(1).translateX(80 / 750 * systemInfo.windowWidth).step({ delay: 100 })
      animation3.opacity(0).step({ delay: 100 })
      animation4.translateX(80 / 750 * systemInfo.windowWidth).step({ delay: 700 })
      animation5.translateX(-60 / 750 * systemInfo.windowWidth).step({ delay: 700 })
    }

    else {
      animation1.opacity(1).translate(0,0).rotate(0).scaleX(1).step()
      animation2.translateX(0).step()
      animation3.opacity(1).translateY(0).step()
      animation4.translateX(0).step()
      animation5.translateX(0).step()

      //600ms
      animation1.translate(0 / 750 * systemInfo.windowWidth, 58 / 750 * systemInfo.windowWidth).rotate(-48).scaleX(2).step()
      animation2.scaleX(3.8).translateX(-10 / 750 * systemInfo.windowWidth).step({ delay: 200})
      animation3.translateY(120 / 750 * systemInfo.windowWidth).step()

      //1400ms
      animation1.opacity(0).step({ delay: 200 })
      animation2.scaleX(1).scaleY(1).translateX(80 / 750 * systemInfo.windowWidth).step({ delay: 100 })
      animation3.opacity(0).step({ delay: 200 })
      animation4.translateX(80 / 750 * systemInfo.windowWidth).step({ delay: 900 })
      animation5.translateX(-60 / 750 * systemInfo.windowWidth).step({ delay: 900 })
    }

    this.setData({
      animationData1: animation1.export(),
      animationData2: animation2.export(),
      animationData3: animation3.export(),
      animationData4: animation4.export(),
      animationData5: animation5.export(),
      count: 1
    })
  },

  linkListExplain: function () {
    wx.navigateTo({
      url: "/pages/linkList/linkListDeleteMiddle_explain/linkListDeleteMiddle_explain"
    })
  }
})