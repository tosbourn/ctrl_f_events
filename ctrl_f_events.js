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
    isReserved=false;
  }
}
window.onkeydown=function(ev){

  if(modifierKeyPressed(ev.which)) {
       isReserved=true;
  }

  if((isReserved==true)&&(ev.which == F)) {
    console.log("CTRL+F Hit");
  }
}

