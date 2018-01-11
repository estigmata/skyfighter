window.addEventListener('load', function(event) {
  docReady();
});

document.onkeydown = moveAnimation;
document.onkeyup = stopAnimation;

var left = 0;
var airCraft;

function docReady() {
  player = document.getElementById('air-craft');
}

function moveAnimation(keyPress) {
  if (keyPress.keyCode == 39) { //right arrow
    player.style.left = (player.offsetLeft += 5) + 'px';
    player.style.animation = "walk-right 0.8s steps(4) infinite";
  }
  else if (keyPress.keyCode == 37) { //left arrow
    player.style.left = (player.offsetLeft -= 5) + 'px';
    player.style.animation = "walk-left 0.8s steps(4) infinite";
  }
  else if (keyPress.keyCode == 38) { //up arrow
    player.style.top = (player.offsetTop -= 5) + 'px';
  }
  else if (keyPress.keyCode == 40) { //down arrow
    player.style.top = (player.offsetTop += 5) + 'px';
  }
  else if (keyPress.keyCode == 32) { //space for fire                
    player.style.animation = "fire .15s infinite";
  }
}

/*function moveAnimation(keyPress) {
  if (keyPress.keyCode == 39) { //right arrow
    airplane.moveLeft();
  }
  else if (keyPress.keyCode == 37) { //left arrow
    airplane.moveRight();
  }
  else if (keyPress.keyCode == 38) { //up arrow
    airplane.moveUp();
  }
  else if (keyPress.keyCode == 40) { //down arrow
    airplane.moveDown();
  }
  else if (keyPress.keyCode == 32) { //space for fire                
    airplane.fire();
  }
}*/


function stopAnimation() {
  player.style.animation = "face-forward 1s infinite";
}
