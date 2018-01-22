/*

登録されたイベントをシートから抜きだし別カレンダーに再投稿するだけ

*/

var copyEvents = function(){
  var calendar = CalendarApp.getCalendarById(
     'Calendar ID');  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var slist = ss.getSheetByName('poop');
  var lastrow = slist.getLastRow();

  for (i = 1; i <= lastrow; i++){
    var status = slist.getRange(i, 2).getBackground();
    var range = "A"+i+":"+"D"+i
    var contents = slist.getDataRange().getValues();
    var stime = contents[i-1][3];
    var etime = contents[i-1][4];
    if (status !== '#0000ff'){
      if(contents[i-1][5] === 'allDay'){
        calendar.createAllDayEvent('【'+contents[i-1][2]+'】在宅勤務',stime);
      }else{
        calendar.createEvent('【'+contents[i-1][2]+'】在宅勤務',stime,etime);
      }
      slist.getRange(i, 2).setBackground('blue');
    }
  }
}