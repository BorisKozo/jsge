var JSGE = function() {
    
    var _screen;
    var _sprites = [];
    
    var self = {
        version : "0.1",

        //Starts a game loop and uses the object with screenId as the screen
        start:function(screenId){
            _screen = $("#"+screenId);
            self.gameLoop.start(function(){
               self.tick(); 
            })
        },
        
        addSprite: function(){
            _sprites.push(new JSGE.Sprite(_screen));
        },
        
        ///override this function to get the game loop ticks
        tick: function(){}
    }
    
    return self;
}();


