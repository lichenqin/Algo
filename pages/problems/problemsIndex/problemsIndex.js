Page({

  data: {
    list: [
      {
        id: 'Insert',
        name: '回溯',
        open: false,
        pages: ['Queen', 'Maze']
      }, {
        id: 'Delete',
        name: '分治',
        open: false,
        pages: ['Hanoi', '二分搜索']
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