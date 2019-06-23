Page({

  data: {
    list: [
      {
        id: 'Insert',
        name: '插入',
        open: false,
        pages: ['Min', 'Max', 'Middle']
      }, {
        id: 'Delete',
        name: '删除',
        open: false,
        pages: ['None Child', 'One Child', 'Two Child']
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