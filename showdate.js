var date = new Date();
var weekday = date.getDay();
var month = date.getMonth()+1;
var day = date.getDate();
var cur_year = date.getFullYear();
var year = (cur_year>200)?cur_year:1900+cur_year;
if(weekday == 0)
    weekday="Sunday";
else if(weekday==1)
    weekday="Monday";
else if(weekday == 2)
    weekday="Tuesday";
else if(weekday==3)
    weekday="Wednesday";
else if(weekday == 4)
    weekday="Tuesday";
else if(weekday==5)
    weekday="Friday";
else if(weekday==6)
    weekday="Saturday";

document.write(year+'-'+month+'-'+day+'-'+weeekday);