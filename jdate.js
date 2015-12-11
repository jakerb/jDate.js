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
          return 1;
          break;
      case 'Tue':
      case 'Feb':
          return 2;
          break;
      case 'Wed':
      case 'Mar':
          return 3;
          break;
      case 'Thu':
      case 'Apr':
          return 4;
          break;
      case 'Fri':
      case 'May':
          return 5;
          break;
      case 'Sat':
      case 'Jun':
          return 6;
          break;
      case 'Sun':
      case 'Jul':
          return 7;
          break;
      case 'Aug':
          return 8;
          break;
      case 'Sep':
          return 9;
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
          return 1;
          break;
     }
  }
};

jDate.init();