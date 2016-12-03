/*var app = (function(){
    var init = function(){};
    return {init:init}
})();*/
var param='abcd';
var app = (function(){
    var init = function(){

    };
    var move = function(url){

      location.href = url;
      param = '';
    };
    return {
       init:init,
       move:move,
       third : function(){}
    }
})();
