/*

シートに入力するデータを配列に詰め込むだ。

*/

var setEvents = function(events, owner){
    for(j = 0; j < events.length; j++) {
    var stime = events[j].getStartTime();
    var etime = events[j].getEndTime();
    var Creator = events[j].getCreators();
    var id = events[j].getId();
    var type = null;
    if(events[j].isAllDayEvent() === true){
     Logger.log(events[j].isAllDayEvent())
     var type = 'allDay'
     var array = ['',id,owner,stime,etime,type];
    }else{
      var array = ['',id,owner,stime,etime];
    }    
    writeSheet(array);
  }
}