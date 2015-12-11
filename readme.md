# jDate #
## Easily format and return time and date in jQuery. ##
---
### Formatted Date ###
To get the date in a DD-MM-YYYY or MM-DD-YYYY format you can use the `formatDate` function where you can set the separator, use:

`jDate.formatDate('-');` //"10-12-2015"

`jDate.formatDate('-', 'us');` //"12-10-2015"

`jDate.formatDate('*', 'us');` //"12*1*2015"

### Get Time ###
This will return an object or string with the time of jDate init and timezone.

`jDate.getTime();` //"11:07:58"

`jDate.getTime(true)`//Object {time: "11:07:58", timezone: "GMT+0000"}



### Get Month ###
This will return an object with the month name and month integer.

`jDate.month();` //Object {month: "Dec", int: 12}


### Get Day ###
This will return an object with the Week day name and day in the month.

`jDate.day();` //Object {day: "Fri", int: 11}

To get the Week day as an integer, simply do:

`jDate.toNumber(jDate.day().day)` //5
