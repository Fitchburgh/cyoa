var html = $('html')

$(".game-start-btn").click(function(){
  html.load("game_start.html");
});

$(".deckhand-mess").click(function(){
  html.load("/stages/deckhand_mess.html");
});

$(".hold").click(function(){
  html.load("/stages/hold.html");
});

$(".kitchen").click(function(){
  html.load("/stages/kitchen.html");
});

$(".mid-ship").click(function(){
  html.load("/stages/mid_ship.html");
});

$(".engine-room").click(function(){
  html.load("/stages/engine_room.html");
});

$(".gunroom").click(function(){
  html.load("/stages/gunroom.html");
});

$(".boiler-room").click(function(){
  html.load("/stages/boiler_room.html");
});

$(".ammo-room").click(function(){
  html.load("/stages/ammo_room.html");
});

$(".captains-quarters").click(function(){
  html.load("/stages/captains_quarters.html");
});

$(".deck").click(function(){
  html.load("/stages/deck.html");
});

$(".shark-death").click(function(){
  html.load("/stages/shark_death.html");
});

$(".end-win").click(function(){
  html.load("/cyoa/end_win.html");
});

$(".secret-btn-1").click(function(){
  html.load("/stages/hold.html");
});

(".secret-btn-2").click(function(){
  html.load("/stages/end_win.html");
});
