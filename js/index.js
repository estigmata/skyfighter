window.addEventListener('load', function(event) {
  docReady();
});

var requestAnimFrame = (function(){
  return window.requestAnimationFrame  ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
        window.setTimeout(callback, 1000 / 60);
    };
})();

document.onkeydown = moveAnimation;
document.onkeyup = stopAnimation;

var bullets = [];
var enemies = [];

function docReady () {
  player = document.getElementById('fa45n');
  ship = new AirCraft(player);
  enemy = new Enemy();
  enemy.fly();
  ship.info();
  //requestAnimFrame(docReady);
}

function moveAnimation (keyPress) {
  switch (keyPress.keyCode) {
    case 39:
      ship.moveRight();
      break;
    case 37:
      ship.moveLeft();
      break;
    case 38:
      ship.moveUp();
      break;
    case 40:
      ship.moveDown();
      break;
    case 32:
      ship.fire();
      break;
  }
}

function stopAnimation () {
  player.style.animation = 'face-forward 1s infinite';
}

function choose (e) {
  slider = document.getElementById('slider');
  presentation = document.getElementById('presentation');

  e.preventDefault();

  presentation.style.display = 'none';
  slider.style.display = 'block';
  slider.style.height = '100%';
}

function selectFighter (e, airCraftModel) {
  main = document.getElementById('main');
  scenario = document.getElementById('scenario');

  e.preventDefault();

  main.style.display = 'none';
  scenario.style.display = 'block';
}
