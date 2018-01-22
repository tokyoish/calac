var ss = SpreadsheetApp.getActiveSpreadsheet();
var slist = ss.getSheetByName('sheet name');
var rowD = slist.getRange(1, 2, slist.getLastRow()).getValues();

function getEvents() {
  var now = new Date();
  var twoHoursFromNow = new Date(now.getTime() + (720 * 60 * 60 * 1000));
  var calendars = CalendarApp.getAllCalendars();
  var ulist = ss.getSheetByName('users');
  var data = ulist.getDataRange().getValues();
  
  for(i = 0; i < calendars.length; i++ ){
    var ownerId = calendars[i].getId();
    for(j = 0; j < data.length; j++ ){
      if (data[j][0] == ownerId ){
        var owner = data[j][1];
      }
    }
    var events = calendars[i].getEvents(now, twoHoursFromNow,{search: '#telework'});
    if(events.length > 0){
      setEvents(events, owner);
    }
  }
}

function removeDuplicates() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var newData = new Array();
  for(i in data){
    var row = data[i];
    var duplicate = false;
    for(j in newData){
      if(row.join() == newData[j].join()){
        duplicate = true;
      }
    }
    if(!duplicate){
      newData.push(row);
    }
  }
  sheet.clearContents();
  sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
  tweet();
  copyEvents();
}