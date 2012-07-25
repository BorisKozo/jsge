JSGE.gameLoop = function(){
    
    var _interval = 32; //The interval that would be used for the main game loop (in ms)
    var _currentTick = 0; //The current tick of the game loop
    var _callback;


    var _prevTickTime = Date.now();
    var _fps = -1;
    //Calculates and updates the _fps variable
    var calculateFps = function(){
        var currentTickTime = Date.now();
        if (currentTickTime === _prevTickTime){
            _fps = -1;
        } else {
            
            _fps = 1000/(currentTickTime - _prevTickTime);
        }
        _prevTickTime = currentTickTime;
    }
    


    var _tick = function(){
        calculateFps(); //TODO: Put this only for debug build
        _currentTick++;
        
        _callback();
        setTimeout(_tick,_interval);
    }
    
    var self = {
        //Returns the current game tick
        getTick: function(){
            return currentTick;
        },
        
        getFps: function(){
            return _fps;  
        },
        
        //Starts the game loop
        start: function(callback, options){
            if (options != undefined){
                if (options.interval){
                    _interval = options.interval;
                }
            }
            _callback = callback;
            setTimeout(_tick,_interval);
        }
    };
    
    return self;
}();