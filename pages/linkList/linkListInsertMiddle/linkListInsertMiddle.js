Page({
  data: {
    animationData1: [],     //结点10的箭头
    animationData2: [],     //结点67的箭头
    animationData3: [],     //结点10
    animationData4: [],     //结点67
    animationData5: [],     //结点53和2的整体
    count: 0                //用于记录是否多次进行展示，第一次展示时count为0，之后均为1
  },

  onLoad :function() {
    var aniInitialize = wx.createAnimation({
      duration: 0
    })

    aniInitialize.opacity(0).step()

    this.setData({
      animationData3: aniInitialize.export()
    })
  },

  linkListDisplay :function() {
    var systemInfo = wx.getSystemInfoSync()
    var animation1 = wx.createAnimation({     //结点10的箭头
      duration: 600,
      //timingFunction: 'linear',
      //delay: 0,
      transformOrigin: '0 50% 0'
    })
    var animation2 = wx.createAnimation({     //结点67的箭头
      duration: 600,
      transformOrigin: '0 50% 0'
    })
    var animation3 = wx.createAnimation({     //结点10
      duration: 600
    })
    var animation4 = wx.createAnimation({     //结点67
      duration: 600
    })
    var animation5 = wx.createAnimation({     //结点53和2的整体
      duration: 600
    })

    if(this.data.count===0) {
      animation1.rotate(-70).scaleX(2.5).translate(-6 / 750 * systemInfo.windowWidth, -20 / 750 * systemInfo.windowWidth).step({ delay: 600 })
      animation1.rotate(0).scaleX(1).translate(0, 0).step({ delay: 600 })
      
      animation2.rotate(70).scaleX(2.5).translate(-4 / 750 * systemInfo.windowWidth, 20 / 750 * systemInfo.windowWidth).step({ delay: 1200 })
      animation2.rotate(0).scaleX(1).translate(0, 0).translateX(-76 / 750 * systemInfo.windowWidth).step()

      animation3.opacity(1).step()
      animation3.translateY(-178 / 750 * systemInfo.windowWidth).step({ delay: 1200 })
     
      animation4.translateX(-74 / 750 * systemInfo.windowWidth).step({ delay: 1800 })

      animation5.translateX(66 / 750 * systemInfo.windowWidth).step({ delay: 1800 })
    }
    
    else {
      animation1.rotate(-70).scaleX(2.5).translate(-6 / 750 * systemInfo.windowWidth, -20 / 750 * systemInfo.windowWidth).step({ delay: 1300 })
      animation1.rotate(0).scaleX(1).translate(0, 0).step({ delay: 600 })

      animation2.translateX(0).step()
      animation2.rotate(70).scaleX(2.5).translate(-4 / 750 * systemInfo.windowWidth, 20 / 750 * systemInfo.windowWidth).step({ delay: 1300 })
      animation2.rotate(0).scaleX(1).translate(0, 0).translateX(-76 / 750 * systemInfo.windowWidth).step()

      animation3.opacity(0).translateY(-178 / 750 * systemInfo.windowWidth).step()
      animation3.translateY(0).step({ duration: 100 })
      animation3.opacity(1).step()
      animation3.translateY(-178 / 750 * systemInfo.windowWidth).step({ delay: 1200 })

      animation4.translateX(0).step()
      animation4.translateX(-74 / 750 * systemInfo.windowWidth).step({ delay: 1900 })

      animation5.translateX(0).step()
      animation5.translateX(66 / 750 * systemInfo.windowWidth).step({ delay: 1900 })
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
      url: "/pages/linkList/linkListInsertMiddle_explain/linkListInsertMiddle_explain"
    })
  }
})

//px转rpx: rpx / 750 * systemInfo.windowWidth