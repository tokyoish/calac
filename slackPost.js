/*

いつものslackPost機能

*/

var slackPost = function(slackMessage){
  var url        = 'https://slack.com/api/chat.postMessage';
  var token      = 'Your token Here';
  var channel    = 'hoge';
  var username   = '新垣結衣';
  var parse      = 'full';
  var icon_url = 'https://blog-001.west.edge.storage-yahoo.jp/res/blog-b6-40/heavenly_days922/folder/1817257/29/66499929/img_5?1398206831';
  var method     = 'post'; 
  var text = slackMessage;
  var payload = {
      'token'      : token,
      'channel'    : channel,
      'text'       : text,
      'username'   : username,
      'parse'      : parse,
      'icon_url' : icon_url
  };
  var params = {
      'method' : method,
      'payload' : payload
  };
  var response = UrlFetchApp.fetch(url, params);
}