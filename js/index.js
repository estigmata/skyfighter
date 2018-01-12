window.addEventListener('load', function(event) {
  docReady();
});

document.onkeydown = moveAnimation;
document.onkeyup = stopAnimation;

function docReady() {
  player = document.getElementById('air-craft');
  ship = new AirCraft(player);
  ship.info();
}

function moveAnimation(keyPress) {
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

function stopAnimation() {
  player.style.animation = "face-forward 1s infinite";
}
