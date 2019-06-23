Page({
  data: {
    animationData1: [],     //结点10的箭头
    animationData2: [],     //结点10
    animationData3: [],     //原链表
    count: 0                //用于记录是否多次进行展示，第一次展示时count为0，之后均为1
  },

  onLoad: function() {
    var aniInitialize =wx.createAnimation({
      duration: 0
    })

    aniInitialize.opacity(0).step()

    this.setData({
      animationData2: aniInitialize.export()
    })
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
    var animation3 = wx.createAnimation({     //结点10
      duration: 600
    })

    if(this.data.count===0) {
      animation1.translate(-30 / 750 * systemInfo.windowWidth, -20 / 750 * systemInfo.windowWidth).rotate(-90).scaleX(1.8).step({ delay: 600 })
      animation1.translate(0,0).rotate(0).scaleX(1).step({ delay: 150 })
      
      animation2.opacity(1).step()
      animation2.translate(-65 / 750 * systemInfo.windowWidth, -178 / 750 * systemInfo.windowWidth).step({ delay: 750 })

      animation3.translateX(75 / 750 * systemInfo.windowWidth).step({ delay: 1350 })
    }

    else {
      animation1.translate(-30 / 750 * systemInfo.windowWidth, -20 / 750 * systemInfo.windowWidth).rotate(-90).scaleX(1.8).step({ delay: 1300 })
      animation1.translate(0, 0).rotate(0).scaleX(1).step({ delay: 150 })
      
      animation2.opacity(0).translate(-65 / 750 * systemInfo.windowWidth, -178 / 750 * systemInfo.windowWidth).step()
      animation2.translate(0, 0).step({ duration: 100 })
      animation2.opacity(1).step()
      animation2.translate(-65 / 750 * systemInfo.windowWidth, -178 / 750 * systemInfo.windowWidth).step({ delay: 750 })

      animation3.translateX(0).step()
      animation3.translateX(75 / 750 * systemInfo.windowWidth).step({ delay: 1450 })
    }

    this.setData ({
      animationData1: animation1.export(),
      animationData2: animation2.export(),
      animationData3: animation3.export(),
      count: 1
    })
  },

  linkListExplain: function() {
    wx.navigateTo({
      url: "/pages/linkList/linkListInsertPre_explain/linkListInsertPre_explain"
    })
  }
})