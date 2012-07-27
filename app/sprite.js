JSGE.Sprite = function(mainScreen){
  var div = $("<div></div>").css("background-color","yellow");
  div.css("z-index",100);
  div.css("width",10);
  div.css("height",10);
  div.css("position","absolute");
  div.css("top",0);
  div.css("left",0);
  mainScreen.append(div);
}

JSGE.Sprite.prototype.left = 0;

JSGE.Sprite.prototype.top = 0;