window.onerror = function (errorMsg, url, lineNumber) {
  alert(errorMsg + ' ' + lineNumber);
}

now.ready(function(){
  now.sendMsg("Hello from remote.");
});

now.receiveMsg = function(msg){
  console.log(msg);
}

$(document).ready(function(){
  $('.up').click(function() {
    now.sendMsg('up');
  });
});
