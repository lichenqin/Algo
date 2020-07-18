Page({

  data: {
    list: [
      {
        id: 'Primary',
        name: '基础',
        open: false,
        pages: ['bubbleSort', 'selectSort', 'insertSort']
      }, {
        id: 'Advanced',
        name: '进阶',
        open: false,
        pages: ['quickSort', 'mergeSort', 'heapSort']
      }
    ]
  },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  },
  onLoad: function (options) {

  }

})