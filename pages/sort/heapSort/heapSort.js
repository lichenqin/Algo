Page({
  data: {
    name: "leec",
    array: [23, 45, 19, 36, 8, 14, 12, 37, 21, 10, 18],
    windowWidth: 0,
    windowHeight: 0,
    gaspWidth: 30,
    speed_level: 5
  },


  onReady: function () {
    var draw_array = this.data.array;//利用draw_array
    var length = draw_array.length;
    var content = wx.createCanvasContext("heap");

    var screenWidth = wx.getSystemInfoSync().windowWidth; //获取屏幕宽度
    var screenHeight = wx.getSystemInfoSync().windowHeight;//获取屏幕高度

    var width = this.data.gaspWidth;//获取一个元素的总宽度 包括：矩形以及空隙的宽度
    var e_width = width - 15;//元素宽度
    var start_x = (screenWidth - width * (length - 1) - e_width) / 2;
    var start_y = 0.48 * screenHeight;

    console.log("X的位置：" + start_x);
    console.log("Y的位置：" + start_y);

    content.setFontSize(10);

    function Elements(index, number) {
      content.beginPath();
      content.rect(start_x + index * width, start_y, e_width, -number * 5);
      content.setFillStyle('green');
      content.fill();
      content.closePath();

      content.setFillStyle('black');
      content.fillText(number, start_x + index * width + 3, start_y + 10);
    }

    var length = draw_array.length;
    var value = 0;

    for (var index = 0; index < length; ++index) {
      value = draw_array[index];
      Elements(index, value);
    }

    content.draw();

    this.setData({
      windowWidth: screenWidth,
      windowHeight: screenHeight
    })
  },

  select_element(select_index, array_index, color) {
    var raw_array = this.data.array;
    var length = raw_array.length;
    var content = wx.createCanvasContext('heap', this);

    var screenWidth = this.data.windowWidth; //获取屏幕宽度
    var screenHeight = this.data.windowHeight;//获取屏幕高度

    var width = this.data.gaspWidth;//获取一个元素的总宽度 包括：矩形以及空隙的宽度
    var e_width = width - 15;//元素宽度
    var start_x = (screenWidth - width * (length - 1) - e_width) / 2;
    var start_y = 0.48 * screenHeight;

    content.setFontSize(10);

    function Elements(index, number) {
      content.beginPath();
      content.rect(start_x + index * width, start_y, e_width, -number * 5);
      content.setFillStyle('green');
      content.fill();
      content.closePath();

      content.setFillStyle('black');
      content.fillText(number, start_x + index * width + 3, start_y + 10);
    }

    function select(index, number) {
      content.beginPath();
      content.rect(start_x + index * width, start_y, e_width, -number * 5);
      content.setFillStyle(color);//设置颜色为灰色
      content.fill();
      content.closePath();

      content.setFillStyle('black');
      content.fillText(number, start_x + index * width + 3, start_y + 10);
    };

    for (var index = 0; index < length; ++index) {
      var number = raw_array[index];
      if (index == select_index || index == array_index)
        select(index, number);
      else
        Elements(index, number);
    }

    content.draw();
  },

  Process() {
    var origin_array = this.data.array;     //origin_array 读取 数据
    var origin_length = origin_array.length;//获取origin_array的长度
    var width = this.data.gaspWidth; //获取间隔值

    for( ; origin_length > 0; --origin_length){

      for(var i = (origin_length>>1)-1; i >= 0; --i){
        var k = i*2+1;
        if( k+1 < origin_length && origin_array[k+1] > origin_array[k] )
          k++;
        
        this.select_element(i,k,"gray");
        this.static_delay();

        if( origin_array[i] < origin_array[k]){
          var distance = width*(k-i);
          for(var step = 2; step <= distance; step += 2){
            this.move(i,k,step);
            this.delay();
          }
          var temp = origin_array[k];
          origin_array[k] = origin_array[i];
          origin_array[i] = temp;
        }
      }
      this.select_element(0,origin_length-1,"orange");
      this.static_delay();
      var temp = origin_array[0];
      console.log(temp);
      origin_array[0] = origin_array[origin_length-1];
      origin_array[origin_length-1] = temp;
      this.select_element(0,origin_length-1,"orange");
      this.static_delay();
    }
    console.log(origin_array);

    this.setData({
      array: origin_array
    })
  },



  move(index_first, index_second, step) {//移动两个元素(就是上色功能)
    var arr = this.data.array;
    var length = arr.length;
    var i;
    var value = 0;

    var content = wx.createCanvasContext("heap", this);

    var screenWidth = this.data.windowWidth; //获取屏幕宽度
    var screenHeight = this.data.windowHeight;//获取屏幕高度

    var width = this.data.gaspWidth;//获取一个元素的总宽度 包括：矩形以及空隙的宽度
    var e_width = width - 15;//元素宽度
    var start_x = (screenWidth - width * (length - 1) - e_width) / 2;
    var start_y = 0.48 * screenHeight;

    content.setFontSize(10);

    function Elements(index, number) {
      content.beginPath();
      content.rect(start_x + index * width, start_y, e_width, -number * 5);
      content.setFillStyle('green');//设置颜色为绿色
      content.fill();
      content.closePath();

      content.setFillStyle('black');
      content.fillText(number, start_x + index * width + 3, start_y + 10);
    };

    function move_forward(index, number) {
      content.beginPath();
      content.rect(start_x + index * width + step, start_y, e_width, -number * 5);
      content.setFillStyle('red');//设置颜色为绿色
      content.fill();
      content.closePath();

      content.setFillStyle('black');
      content.fillText(number, start_x + index * width + 3, start_y + 10);
    };

    function move_back(index, number) {
      content.beginPath();
      content.rect(start_x + index * width - step, start_y, e_width, -number * 5);
      content.setFillStyle('red');//设置颜色为绿色
      content.fill();
      content.closePath();

      content.setFillStyle('black');
      content.fillText(number, start_x + index * width + 3, start_y + 10);
    };

    for (i = 0; i < length; ++i) {
      value = arr[i];
      if (i == index_first) {
        move_forward(i, value);
      }
      else if (i == index_second) {
        move_back(i, value);
      }
      else {
        Elements(i, value);
      }
    }
    content.draw();
  },

  reset() {
    var origin = this.data.array;
    var length = origin.length;

    for (var index = 0; index < length; ++index) {
      origin[index] = Math.round(Math.random() * 50 + 1);
      console.log(origin[index]);
    }

    this.onReady();
  },

  listen_slider(elements) {
    var delay_level = (100 - elements.detail.value) / 10;
    console.log(delay_level);

    this.setData({
      speed_level: delay_level
    })
  },

  delay() {   //延时函数
    var limmit = this.data.speed_level * 2000000 + 1000000;
    console.log(limmit);
    for (var index = 0; index < limmit; ++index);
  },

  explain: function () {
    wx.navigateTo({
      url: '/pages/sort/heap_explain/heap_explain',
    })
  },


  static_delay() { //延时时间长
    var limmit = this.data.speed_level * 10000000 + 5000000;
    for (var index = 0; index < limmit; ++index);
  }
  //min 1000000 5000000 每次增加200万 每次增加5000000
  //max 11000000 55000000
})