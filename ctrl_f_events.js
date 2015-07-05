(function(){
  var CTRL = 17,
      CMD_SAFARI_CHROME = 91,
      CMD_FIREFOX = 224,
      F = 70;

  var isReserved = false;

  var modifierKeyPressed = function(keyCode) {
    return (keyCode == CTRL || keyCode == CMD_SAFARI_CHROME || keyCode == CMD_FIREFOX);
  }

  window.onkeyup=function(ev){
    if(modifierKeyPressed(ev.which)){
      isReserved = false;
    }
  }
  window.onkeydown=function(ev){
    if(modifierKeyPressed(ev.which)) {
      isReserved = true;
      window.setInterval(function(){
        isReserved = false;
      }, 1000);
    }

    if((isReserved==true)&&(ev.which == F)) {
      if (typeof _trackEvent === 'function') {
        _trackEvent("Browser Action", "Internal Page Search");
      } else {
        console.log("Is Google Analytics correctly set up on this page?");
      }
    }
  }
})();
