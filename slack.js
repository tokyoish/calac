/*

slackに投稿するメッセージを作成するだけ

*/

var tweet = function(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var slist = ss.getSheetByName('Sheet Name');
  var lastrow = slist.getLastRow();

  for (i = 1; i <= lastrow; i++){
    var status = slist.getRange(i, 1).getBackground();
    var range = "A"+i+":"+"D"+i
    var contents = slist.getDataRange().getValues();
    var stime = contents[i-1][3];
    var etime = contents[i-1][4];
    
    // 終日イベントか否かを確認
    if(contents[i-1][5] === 'allDay'){
      var formattedStime = Utilities.formatDate( stime, "Asia/Tokyo", "yyyy/MM/dd");
      var message = '@channel ' + contents[i-1][2] +'さんが'+ formattedStime + '終日在宅勤務します。';
    }else{
      var formattedStime = Utilities.formatDate( stime, "Asia/Tokyo", "yyyy/MM/dd HH:mm:ss");
      var formattedEnd = Utilities.formatDate( etime, "Asia/Tokyo", "yyyy/MM/dd HH:mm:ss");
      var message = '@channel ' + contents[i-1][2] +'さんが'+ formattedStime + 'から'+formattedEnd+'まで在宅勤務します。';
    }
    
    // 既にslackでメッセージされていたらstatusを変更する
    if (status !== '#0000ff'){
      slackPost(message);
      slist.getRange(i, 1).setBackground('blue');
    }
  }
}