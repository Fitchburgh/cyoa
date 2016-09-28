var body = $('body')

$(".game-start-btn").click(function(){
  body.load("game_start.html");
});

$(".deckhand-mess").click(function(){
  body.load("/stages/deckhand_mess.html");
});

$(".hold").click(function(){
  body.load("/stages/hold.html");
});

$(".kitchen").click(function(){
  body.load("/stages/kitchen.html");
});

$(".mid-ship").click(function(){
  body.load("/stages/mid_ship.html");
});

$(".engine-room").click(function(){
  body.load("/stages/engine_room.html");
});

$(".gunroom").click(function(){
  body.load("/stages/gunroom.html");
});

$(".boiler-room").click(function(){
  body.load("/stages/boiler_room.html");
});

$(".ammo-room").click(function(){
  body.load("/stages/ammo_room.html");
});

$(".captains-quarters").click(function(){
  body.load("/stages/captains_quarters.html");
});

$(".deck").click(function(){
  body.load("/stages/deck.html");
});

$(".shark-death").click(function(){
  body.load("/stages/shark_death.html");
});

$(".end-win").click(function(){
  body.load("/cyoa/end_win.html");
});

$(".secret-btn-1").click(function(){
  body.load("/stages/hold.html");
});

(".secret-btn-2").click(function(){
  body.load("/stages/end_win.html");
});
