


class AirCraft {
  constructor(player) {
    this.player = player;
    this.x = this.player.offsetLeft;
    this.y = this.player.offsetTop;
  }

  moveRight() {
    this.x += 10;
    this.player.style.left = this.x + 'px';
  }

  moveLeft() {
    this.x -= 10;
    this.player.style.left = this.x + 'px';
  }

  moveUp() {
    this.y -= 10;
    this.player.style.top = this.y + 'px';
  }

  moveDown() {
    this.y += 10;
    this.player.style.top = this.y + 'px';
  }

  fire() {
    this.player.style.animation = "fire .15s infinite";
    this.burst();
  }

  burst() {
    var bullet = document.createElement('div');
    var left = this.x + 170;
    var xScreen = window.screen.width - 26;
    bullet.classList.add('bullet');
    document.body.appendChild(bullet);
    bullet.style.top = this.y + 38 + 'px';
    bullet.style.left = left + 'px';
    var line = setInterval(lineFire, 1);
    function lineFire() {
      if (left > xScreen) {
        console.log('remove bullet');
        bullet.remove()
        clearInterval(line);
      } else {
        left++;
        bullet.style.left = left + 'px';
      }
    }
  }

  info() {
    console.log('Nuevo player: ', this.x);
  }
}
