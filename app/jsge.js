var JSGE = function() {
    
    
    var self = {
        version : "0.1",

        //Starts a game loop and uses the object with screenId as the screen
        start:function(screenId){
        //$(screenId).setStyle("position","absolute");
            self.gameLoop.start(function(){
            })
        }
    }
    
    return self;
}();


