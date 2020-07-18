Page({
  data: {
    animationData1: [],     //比较箭头
    animationData2: [],     //下方文本1（插入结点98）
    animationData3: [],     //下方文本2(98大于67)
    animationData4: [],     //下方文本3(98大于80)
    animationData5: [],     //下方文本4(98大于89)
    animationData6: [],     //新插入的树枝
    animationData7: [],     //新插入的结点（结点98）
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
    var aniInitialize4 = wx.createAnimation({
      duration: 0
    })
    var aniInitialize5 = wx.createAnimation({
      duration: 0
    })
    var aniInitialize6 = wx.createAnimation({
      duration: 0
    })
    var aniInitialize7 = wx.createAnimation({
      duration: 0
    })

    aniInitialize1.opacity(0).step()
    aniInitialize2.opacity(0).step()
    aniInitialize3.opacity(0).step()
    aniInitialize4.opacity(0).step()
    aniInitialize5.opacity(0).step()
    aniInitialize6.opacity(0).step()
    aniInitialize7.opacity(0).step()

    this.setData({
      animationData1: aniInitialize1.export(),
      animationData2: aniInitialize2.export(),
      animationData3: aniInitialize3.export(),
      animationData4: aniInitialize4.export(),
      animationData5: aniInitialize5.export(),
      animationData6: aniInitialize6.export(),
      animationData7: aniInitialize7.export()
    })
  },

  BinaryTreeDisplay: function () {
    var systemInfo = wx.getSystemInfoSync()
    var animation1 = wx.createAnimation({     //比较箭头
      duration: 600
      //timingFunction: 'linear',
      //delay: 0,
      //transformOrigin: '50% 50% 0'
    })
    var animation2 = wx.createAnimation({     //下方文本1（插入结点98）
      duration: 600
    })
    var animation3 = wx.createAnimation({     //下方文本1(98大于67)
      duration: 600
    })
    var animation4 = wx.createAnimation({     //下方文本2(98大于80)
      duration: 600
    })
    var animation5 = wx.createAnimation({     //下方文本3(98大于89)
      duration: 600
    })
    var animation6 = wx.createAnimation({     //新插入的树枝
      duration: 600
    })
    var animation7 = wx.createAnimation({     //新插入的结点（结点98）
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

      //4900ms
      animation4.opacity(1).step({ delay: 4900 })

      //6100ms
      animation1.opacity(0).step({ delay: 1200 })
      animation4.opacity(0).step({ delay: 600 })

      //6700ms
      animation1.translate(170 / 750 * systemInfo.windowWidth, 290 / 750 * systemInfo.windowWidth).step({ duration: 100 })

      //6800ms
      animation1.opacity(1).step()

      //7400ms
      animation5.opacity(1).step({ delay: 7400 })

      //8600ms
      animation1.opacity(0).step({ delay: 1200 })
      animation5.opacity(0).step({ delay: 600 })

      //9200ms
      animation6.opacity(1).step({ delay: 9200 })

      //9800ms
      animation7.opacity(1).step({ delay: 9800 })
    }

    else {
      animation1.translate(0, 0).step()
      animation6.opacity(0).step()
      animation7.opacity(0).step()

      //600ms
      animation2.opacity(1).step({ delay: 600 })

      //1200ms
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

      //5500ms
      animation4.opacity(1).step({ delay: 5500 })

      //6700ms
      animation1.opacity(0).step({ delay: 1200 })
      animation4.opacity(0).step({ delay: 600 })

      //7300ms
      animation1.translate(170 / 750 * systemInfo.windowWidth, 290 / 750 * systemInfo.windowWidth).step({ duration: 100 })

      //7400ms
      animation1.opacity(1).step()

      //8000ms
      animation5.opacity(1).step({ delay: 8000 })

      //9200ms
      animation1.opacity(0).step({ delay: 1200 })
      animation5.opacity(0).step({ delay: 600 })

      //9800ms
      animation6.opacity(1).step({ delay: 9200 })

      //10400ms
      animation7.opacity(1).step({ delay: 9800 })
    }

    this.setData({
      animationData1: animation1.export(),
      animationData2: animation2.export(),
      animationData3: animation3.export(),
      animationData4: animation4.export(),
      animationData5: animation5.export(),
      animationData6: animation6.export(),
      animationData7: animation7.export(),
      count: 1
    })
  },

  BinaryTreeExplain: function () {
    wx.navigateTo({
      url: "/pages/binaryTree/BinaryInsert_explain/BinaryInsert_explain"
    })
  }

})