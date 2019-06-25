Page({
  data: {
    animationData1: [],     //比较箭头
    animationData2: [],     //下方文本1（找到结点67右子树中最小的结点）
    animationData3: [],     //下方文本2(80大于67)
    animationData4: [],     //结点80的左孩子指针
    animationData5: [],     //结点72
    animationData6: [],     //根结点67
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
    var animation2 = wx.createAnimation({     //下方文本1（删除结点67）
      duration: 600
    })
    var animation3 = wx.createAnimation({     //下方文本1(找到结点67右子树中最小的结点)
      duration: 600
    })
    var animation4 = wx.createAnimation({     //结点80的左孩子指针
      duration: 600
    })
    var animation5 = wx.createAnimation({     //结点72
      duration: 600
    })
    var animation6 = wx.createAnimation({     //根结点67
      duration: 600
    })

    if (this.data.count === 0) {
      animation2.opacity(1).step()

      //1200ms
      animation2.opacity(0).step({ delay: 600 })

      //1800ms
      animation3.opacity(1).step({ delay: 1800 })

      //3000ms
      animation1.opacity(1).step({ delay: 3000 })

      //4200ms
      animation1.opacity(0).step({ delay: 600 })

      //4800ms
      animation1.translate(80 / 750 * systemInfo.windowWidth, 150 / 750 * systemInfo.windowWidth).step({ duration: 100 })

      //4900ms
      animation1.opacity(1).step()

      //6100ms
      animation1.opacity(0).step({ delay: 600 })

      //6700ms
      animation1.translate(0, 290 / 750 * systemInfo.windowWidth).step({ duration: 100 })

      //6800ms
      animation1.opacity(1).step()

      //8000ms
      animation1.opacity(0).step({ delay: 600 })
      animation3.opacity(0).step({ delay: 5800 })

      //8600ms
      animation4.opacity(0).step({ delay: 8600 })
      animation5.translateY(-280 / 750 * systemInfo.windowWidth).step({ delay: 8600 })
      animation6.opacity(0).step({ delay: 8600 })
    }

    else {
      animation1.translate(0,0).step()
      animation4.opacity(1).step({ timingFunction: 'ease-in' })
      animation5.translateY(0).step()
      animation6.opacity(1).step({ timingFunction: 'ease-in' })

      //600ms
      animation2.opacity(1).step({ delay: 600 })

      //1800ms
      animation2.opacity(0).step({ delay: 600 })

      //2400ms
      animation3.opacity(1).step({ delay: 2400 })

      //3600ms
      animation1.opacity(1).step({ delay: 3000 })

      //4800ms
      animation1.opacity(0).step({ delay: 600 })

      //5400ms
      animation1.translate(80 / 750 * systemInfo.windowWidth, 150 / 750 * systemInfo.windowWidth).step({ duration: 100 })

      //5500ms
      animation1.opacity(1).step()

      //6700ms
      animation1.opacity(0).step({ delay: 600 })

      //7300ms
      animation1.translate(0, 290 / 750 * systemInfo.windowWidth).step({ duration: 100 })

      //7400ms
      animation1.opacity(1).step()

      //8600ms
      animation1.opacity(0).step({ delay: 600 })
      animation3.opacity(0).step({ delay: 5800 })

      //9200ms
      animation4.opacity(0).step({ delay: 8600 })
      animation5.translateY(-280 / 750 * systemInfo.windowWidth).step({ delay: 8600 })
      animation6.opacity(0).step({ delay: 8600 })
    }

    this.setData({
      animationData1: animation1.export(),
      animationData2: animation2.export(),
      animationData3: animation3.export(),
      animationData4: animation4.export(),
      animationData5: animation5.export(),
      animationData6: animation6.export(),
      count: 1
    })
  },

})