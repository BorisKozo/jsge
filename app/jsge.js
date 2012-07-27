var JSGE = function() {
    
    var _screen;
    var _sprites = [];
    var checkScreen = function(){
            if (_screen === undefined){
                throw new Error("The screen is undefined, call setScreen with the screen id to initialize it");
            }
        
    };
    
    var self = {
        version : "0.1",
        
        setScreen:function(screenId){
            _screen = $("#"+screenId);
            if (_screen === undefined){
                throw new Error("Failed to set screen with id " + screenId);
            }
            _screen.css("z-index", 0);
            _screen.css("position","relative");
        },

        //Starts a game loop and uses the object with screenId as the screen
        start:function(){
            checkScreen();
            self.gameLoop.start(function(){
               self.tick(); 
            })
        },
        
        addSprite: function(){
            checkScreen();
            _sprites.push(new JSGE.Sprite(_screen));
        },
        
        getScreen:function(){
            checkScreen();
            return _screen;
        }
        
        ///override this function to get the game loop ticks
        tick: function(){}
    }
    
    return self;
}();


