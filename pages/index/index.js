Page({
  sort: function () {
    wx.navigateTo({
      url: '/pages/sort/sortIndex/sortIndex',
    })
  },
  linklist: function () {
    wx.navigateTo({
      url: '/pages/linkList/linkListIndex/linkListIndex',
    })
  },
  binaryTree: function () {
    wx.navigateTo({
      url: '/pages/binaryTree/binaryTreeIndex/binaryTreeIndex',
    })
  },
  problems: function () {
    wx.navigateTo({
      url: '/pages/problems/problemsIndex/problemsIndex',
    })
  }
})