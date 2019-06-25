Page({
  data: {
    animationData1: [],     //比较箭头
    animationData2: [],     //下方文本1（删除结点80）
    animationData3: [],     //下方文本2(80大于67)
    animationData4: [],     //结点80及其右孩子指针
    animationData5: [],     //结点89
    count: 0                //用于记录是否多次进行展示，第一次展示时count为0，之后均为1
  },

  onLoad: function () {
    var aniInitialize1 = wx.createAnimation({
      duration: 0
    })
    var aniInitialize2 = wx.createAnimation({
      duration: 0
    })
    var aniInitialize3 = wx.createAnimation({
      duration: 0
    })

    aniInitialize1.opacity(0).step()
    aniInitialize2.opacity(0).step()
    aniInitialize3.opacity(0).step()

    this.setData({
      animationData1: aniInitialize1.export(),
      animationData2: aniInitialize2.export(),
      animationData3: aniInitialize3.export()
    })
  },

  linkListDisplay: function () {
    var systemInfo = wx.getSystemInfoSync()
    var animation1 = wx.createAnimation({     //比较箭头
      duration: 600
      //timingFunction: 'linear',
      //delay: 0,
      //transformOrigin: '50% 50% 0'
    })
    var animation2 = wx.createAnimation({     //下方文本1（删除结点80）
      duration: 600
    })
    var animation3 = wx.createAnimation({     //下方文本1(80大于67)
      duration: 600
    })
    var animation4 = wx.createAnimation({     //结点80及其右孩子指针
      duration: 600
    })
    var animation5 = wx.createAnimation({     //结点89
      duration: 600
    })

    if (this.data.count === 0) {
      animation2.opacity(1).step()

      //1200ms
      animation2.opacity(0).step({ delay: 600 })

      //1800ms
      animation1.opacity(1).step({ delay: 1800 })

      //2400ms
      animation3.opacity(1).step({ delay: 2400 })

      //3600ms
      animation1.opacity(0).step({ delay: 1200 })
      animation3.opacity(0).step({ delay: 600 })

      //4200ms
      animation1.translate(80 / 750 * systemInfo.windowWidth, 150 / 750 * systemInfo.windowWidth).step({ duration: 100 })

      //4300ms
      animation1.opacity(1).step()

      //5500ms
      animation1.opacity(0).step({ delay: 600 })

      //6100ms
      animation4.opacity(0).step({ delay: 6100 })
      animation5.translate(-90 / 750 * systemInfo.windowWidth, -140 / 750 * systemInfo.windowWidth).step({ delay: 6100, timingFunction: 'ease-in' })
    }

    else {
      animation1.translate(0,0).step()
      animation4.opacity(1).step({ timingFunction: 'ease-in' })
      animation5.translate(0,0).step()

      //600ms
      animation2.opacity(1).step({ delay: 600 })

      //1800ms
      animation2.opacity(0).step({ delay: 600 })

      //2400ms
      animation1.opacity(1).step({ delay: 1800 })

      //3000ms
      animation3.opacity(1).step({ delay: 3000 })

      //4200ms
      animation1.opacity(0).step({ delay: 1200 })
      animation3.opacity(0).step({ delay: 600 })

      //4800ms
      animation1.translate(80 / 750 * systemInfo.windowWidth, 150 / 750 * systemInfo.windowWidth).step({ duration: 100 })

      //4900ms
      animation1.opacity(1).step()

      //6100ms
      animation1.opacity(0).step({ delay: 600 })

      //6700ms
      animation4.opacity(0).step({ delay: 6100 })
      animation5.translate(-90 / 750 * systemInfo.windowWidth, -140 / 750 * systemInfo.windowWidth).step({ delay: 6100, timingFunction: 'ease-in' })
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

})