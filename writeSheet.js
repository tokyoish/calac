/*

シートにデータを登録するだけ

*/

var writeSheet = function(array){
  var lastrow = slist.getLastRow();
  slist.appendRow(array);
  var contents = slist.getRange(lastrow+1, 1);
}