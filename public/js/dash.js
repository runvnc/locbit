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

left = function () {
  $('.active').removeClass('active').prev().addClass('active');
}

right = function () {
  $('.active').removeClass('active').next().addClass('active');
}

up = function () {
  $('.active').removeClass('active').prev().addClass('active');
}

down = function () {
  $('.active').removeClass('active').next().addClass('active');
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

