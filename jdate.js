var date;
var jDate = {
    
  init:function() {
    var that = this;
    date = new Date().toString();
    date = date.split(' ');
  },
  
  month:function() {
    var that = this;
    return {month: date[1], int: that.toNumber(date[1])};
  },
  
  day:function() {
    var that = this;
    return {day: date[0], int: parseInt(date[2])};
  },
  
  formatDate:function(delim, format) {
    var that = this;
    var strDate = that.toNumber(date[2]) + delim + that.toNumber(date[1]) + delim + date[3]; 
    if(format == "us") {
      strDate = that.toNumber(date[1]) + delim + that.toNumber(date[2]) + delim + date[3]; 
    }
    return strDate;
  },
  
  getTime:function(timezone) {
    if(timezone) {
      return {time: date[4], timezone: date[5]};
    } else {
      return date[4];
    }
  },
  
  toNumber:function(day) {
    switch(day) {
      case 'Mon':
      case 'Jan':
          return 01;
          break;
      case 'Tue':
      case 'Feb':
          return 02;
          break;
      case 'Wed':
      case 'Mar':
          return 03;
          break;
      case 'Thu':
      case 'Apr':
          return 04;
          break;
      case 'Fri':
      case 'May':
          return 05;
          break;
      case 'Sat':
      case 'Jun':
          return 06;
          break;
      case 'Sun':
      case 'Jul':
          return 07;
          break;
      case 'Aug':
          return 08;
          break;
      case 'Sep':
          return 09;
          break;
      case 'Oct':
          return 10;
          break;
      case 'Nov':
          return 11;
          break;
      case 'Dec':
          return 12;
          break;
      default:
          return 01;
          break;
     }
  }
};

jDate.init();
