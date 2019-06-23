Page({
  data: {
    name: "QuickSort",
    array: [12, 28, 30, 22, 19, 7, 45, 28, 6, 32, 38],
    windowWidth: 0,
    windowHeight: 0,
    gaspWidth: 30,
    speed_level: 5
  },

  onReady: function () {
    var draw_array = this.data.array;//利用draw_array
    var length = draw_array.length;
    var content = wx.createCanvasContext("quick");
    
    var screenWidth = wx.getSystemInfoSync().windowWidth;
    var screenHeight = wx.getSystemInfoSync().windowHeight;

    var width = this.data.gaspWidth;
    var e_width = width-15;
    var start_x = (screenWidth-width*length)/2;
    var start_y = 0.48*screenHeight;
    
    console.log("X的位置："+start_x);
    console.log("Y的位置："+start_y);

    content.setFontSize(10);

    function Elements(index, number) {
      content.beginPath();
      content.rect(start_x + index * width, start_y, e_width, -number * 5);
      content.setFillStyle('green');
      content.fill();
      content.closePath();

      content.setFillStyle('black');
      content.fillText(number, start_x + index * width+3, start_y+10);
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
  
  Process() {

    var origin = this.data.array;

    origin = this.Qk_Sort(0, origin.length-1, origin);

  },

  Qk_Sort(left, right, array){

    if(left >= right )
      return array;
    
    var head = left;
    var base_value = array[head];//基准值
    var tail = right;

    this.QuickDraw(head, left, right, tail);

    while( left != right ){
      while( right > left && array[right] >= base_value){
        --right;
        this.QuickDraw(head, left, right, tail);
      }

      while( left < right && array[left] <= base_value){
        ++left;
        this.QuickDraw(head, left, right, tail);
      }

      var temp = array[right];
      array[right] = array[left];
      array[left] = temp;
      this.QuickDraw(head, left, right, tail);
    }

    array[head] = array[left];
    array[left] = base_value;
    this.QuickDraw(head, left, right, tail);

    array = this.Qk_Sort(head,left-1, array);
    array = this.Qk_Sort(right+1,tail,array);

    return array;
  },

  QuickDraw(head, left, right, tail){
    this.QuickDraw_Process(head, left, right, tail);
    this.delay();
  },

  QuickDraw_Process(head, left, right, tail){
    var draw_array = this.data.array;
    var length = draw_array.length;

    var screenWidth = this.data.windowWidth;
    var screenHeight = this.data.windowHeight;

    var width = this.data.gaspWidth;
    var e_width = width - 15;
    var start_x = (screenWidth - width * length) / 2;
    var start_y = 0.48 * screenHeight;


    var content = wx.createCanvasContext('quick', this);
    var number = 0;
    content.setFontSize(10);

    function base(index, number){
      content.beginPath();
      content.rect(start_x + index * width, start_y, e_width, -number * 5);
      content.setFillStyle('orange');//基准为橙色
      content.fill();
      content.closePath();

      content.setFillStyle('black');
      content.fillText(number, start_x + index * width + 3, start_y + 10);
    }

    function left_elements(index, number){
      content.beginPath();
      content.rect(start_x + index * width, start_y, e_width, -number * 5);
      content.setFillStyle('blue');//左侧为蓝色
      content.fill();
      content.closePath();

      content.setFillStyle('black');
      content.fillText(number, start_x + index * width + 3, start_y + 10);
    }

    function right_elements(index, number){
      content.beginPath();
      content.rect(start_x + index * width, start_y, e_width, -number * 5);
      content.setFillStyle('red');//右侧为红色
      content.fill();
      content.closePath();

      content.setFillStyle('black');
      content.fillText(number, start_x + index * width + 3, start_y + 10);
    }

    function elements(index, number){
      content.beginPath();
      content.rect(start_x + index * width, start_y, e_width, -number * 5);
      content.setFillStyle('green');//设置颜色为绿色
      content.fill();
      content.closePath();

      content.setFillStyle('black');
      content.fillText(number, start_x + index * width + 3, start_y + 10);
    }

    for(var index = 0; index < length; ++index){
      number = draw_array[index];
      if( index == head )
        base(index, number);
      else if( index > head && index <= left )
        left_elements(index, number);
      else if( index <= tail && index >= right )
        right_elements(index, number);
      else
        elements(index, number);
    }

    content.draw();
    console.log(draw_array);
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

  static_delay() {
    var limmit = this.data.speed_level * 10000000 + 5000000;
    for (var index = 0; index < limmit; ++index);
  },

  explain: function () {
    wx.navigateTo({
      url: '/pages/sort/quick_explain/quick_explain',
    })

  }

})