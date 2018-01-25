class Scenario {
  constructor() {
    this.maxXScreen = window.screen.width;
    this.maxYScreen = window.screen.height;
  }
}

class Bullet {
  constructor(params) {
    this.bullet = document.createElement('div');
    this.bullet.classList.add('bullet');
    this.left = params.x + 170;
    this.top = params.y + 38;
    document.body.appendChild(this.bullet);
    this.bullet.style.left = this.left + 'px';
    this.bullet.style.top = this.top + 'px';
  }

  burst(maxXScreen) {
    var params = {
      bullet: this.bullet,
      left: this.left,
      maxXScreen: maxXScreen
    }
    var line = setInterval(setFire, 0);
    function setFire() {
      if (params.left > params.maxXScreen) {
        params.bullet.remove();
        clearInterval(line);
      } else {
        params.left++;
        params.bullet.style.left = params.left + 'px';
      }
    };
  }
}


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
    this.player.style.animation = "fire 0s infinite";
    var params = {
      x: this.x,
      y: this.y,
    };
    var bullet = new Bullet(params);
    bullet.burst(window.screen.width - 26);
  }

  info() {
    console.log('Nuevo player: ', this.x);
  }
}
