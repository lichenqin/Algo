Page({
  data: {
    animationData1: [],     //结点10的箭头
    animationData2: [],     //结点2的箭头
    animationData3: [],     //结点10
    animationData4: [],     //原链表
    animationData5: [],     //null
    count: 0                //用于记录是否多次进行展示，第一次展示时count为0，之后均为1
  },

  onLoad: function () {
    var aniInitialize = wx.createAnimation({
      duration: 0
    })

    aniInitialize.opacity(0).step()

    this.setData({
      animationData3: aniInitialize.export()
    })
  },

  linkListDisplay: function() {
    var systemInfo = wx.getSystemInfoSync()
    var animation1 = wx.createAnimation({     //结点10的箭头
      duration: 600,
      transformOrigin: '0 50% 0'
    })
    var animation2 = wx.createAnimation({     //结点2的箭头
      duration: 600,
      transformOrigin: '0 50% 0'
    })
    var animation3 = wx.createAnimation({     //结点10
      duration: 600
    })
    var animation4 = wx.createAnimation({     //原链表
      duration: 600
    })
    var animation5 = wx.createAnimation({     //null
      duration: 600
    })

    if(this.data.count===0) {
      animation3.opacity(1).step()

      //600ms
      animation1.rotate(-74).scaleX(2.5).translate(-6 / 750 * systemInfo.windowWidth, -20 / 750 * systemInfo.windowWidth).step({ delay: 600 })

      //1350ms
      animation2.rotate(70).scaleX(2.5).translate(-4 / 750 * systemInfo.windowWidth, 20 / 750 * systemInfo.windowWidth).step({ delay: 1350 })

      //2100ms
      animation1.rotate(0).scaleX(1).translate(0, 0).step({ delay: 900 })
      animation2.rotate(0).scaleX(1).translate(0, 0).translateX(-90 / 750 * systemInfo.windowWidth).step({ delay: 150 })
      animation3.translate(-30 / 750 * systemInfo.windowWidth,-178 / 750 * systemInfo.windowWidth).step({ delay: 1500 })
      animation4.translateX(-90 / 750 * systemInfo.windowWidth).step({ delay: 2100 })
      animation5.translateX(50 / 750 * systemInfo.windowWidth).step({ delay: 2100 })
    }

    else {
      animation2.translateX(0).step()
      animation3.opacity(0).translate(-30 / 750 * systemInfo.windowWidth, -178 / 750 * systemInfo.windowWidth).step()
      animation4.translateX(0).step()
      animation5.translateX(0).step()

      //600ms
      animation3.translate(0,0).step({ duration: 100 })

      //700ms
      animation3.opacity(1).step()

      //1300ms
      animation1.rotate(-74).scaleX(2.5).translate(-6 / 750 * systemInfo.windowWidth, -20 / 750 * systemInfo.windowWidth).step({ delay: 1300 })

      //2050ms
      animation2.rotate(70).scaleX(2.5).translate(-4 / 750 * systemInfo.windowWidth, 20 / 750 * systemInfo.windowWidth).step({ delay: 1450 })

      //2800ms
      animation1.rotate(0).scaleX(1).translate(0, 0).step({ delay: 900 })
      animation2.rotate(0).scaleX(1).translate(0, 0).translateX(-90 / 750 * systemInfo.windowWidth).step({ delay: 150 })
      animation3.translate(-30 / 750 * systemInfo.windowWidth, -178 / 750 * systemInfo.windowWidth).step({ delay: 1500 })
      animation4.translateX(-90 / 750 * systemInfo.windowWidth).step({ delay: 2200 })
      animation5.translateX(50 / 750 * systemInfo.windowWidth).step({ delay: 2200 })
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
      url: "/pages/linkList/linkListInsertTail_explain/linkListInsertTail_explain"
    })
  }
})