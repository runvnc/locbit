now.ready(function(){
  now.sendMsg("Hello from application selector.");
});

now.receiveMsg = function(msg){
  console.log('received msg');
  console.log(msg);
  switch (msg) {
    case 'up':
      up();
      break;
    case 'down':
      down();
      break;
    case 'left':
      left();
      break;
    case 'right':
      right();
      break;
    case 'select':
      select();
      break;
  }
}

swapActive = function (newActive, old) {
  old.removeClass('active');
  newActive.addClass('active')
}

left = function () {
  swapActive($('.active').prev(), $('.active'));
}

right = function () {
  swapActive($('.active').next(), $('.active'));
}

up = function () {
  swapActive($('.active').prev(), $('.active'));
}

down = function () {
  wapActive($('.active').next(), $('.active'));
}

select = function() {
  $('.active').click();
}

$(document).ready(function() {
  $('li').first().addClass('active');
  $('.up').click(function() { now.sendMsg('up'); });
  $('.down').click(function() { now.sendMsg('down'); });
  $('.left').click(function() { now.sendMsg('left'); });
  $('.right').click(function() { now.sendMsg('right'); });
});

