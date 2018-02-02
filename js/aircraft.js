class Scenario {
  constructor () {
    this.maxXScreen = window.screen.width;
    this.maxYScreen = window.screen.height;
  }
}

var scenario = new Scenario();

class Bullet {
  constructor (params) {
    this.bullet = document.createElement('div');
    this.bullet.classList.add('bullet');
    this.left = params.x + 170;
    this.top = params.y + 38;
    document.body.appendChild(this.bullet);
    this.bullet.style.left = this.left + 'px';
    this.bullet.style.top = this.top + 'px';
  }

  burst (maxXScreen) {
    var params = {
      bullet: this.bullet,
      left: this.left,
      maxXScreen: maxXScreen
    }
    var line = setInterval(setFire, 0);
    function setFire () {
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

class Enemy {
  constructor () {
    this.enemy = document.createElement('div');
    this.enemy.classList.add('enemy');
    document.body.appendChild(this.enemy);
    this.enemy.style.left = scenario.maxXScreen - 100 + 'px';
    this.enemy.style.top = 50 + '%';
    this.positionX = scenario.maxXScreen - 100;
  }

  fly () {
    var params = {
      enemy: this.enemy,
      positionX: this.positionX
    }
    var live = setInterval(liveCycle, 0);
    function liveCycle () {
      if (params.positionX == 0) {
        params.enemy.remove();
        clearInterval(live);
      } else {
        params.positionX--;
        params.enemy.style.left = params.positionX + 'px';
      }
    }
  }
}

class AirCraft {
  constructor (player) {
    this.player = player;
    this.playerModel = this.player.getAttribute('id');
    this.x = this.player.offsetLeft;
    this.y = this.player.offsetTop;
  }

  moveRight () {
    this.x += 10;
    this.player.style.left = this.x + 'px';
  }

  moveLeft () {
    this.x -= 10;
    this.player.style.left = this.x + 'px';
  }

  moveUp () {
    this.y -= 10;
    this.player.style.top = this.y + 'px';
  }

  moveDown () {
    this.y += 10;
    this.player.style.top = this.y + 'px';
  }

  fire () {
    this.player.style.animation = 'fire-' + this.playerModel + ' 0.25s infinite';
    var params = {
      x: this.x,
      y: this.y,
    };
    var bullet = new Bullet(params);
    bullet.burst(window.screen.width - 26);
    bullets.push(bullet);
  }

  info () {
    console.log('Nuevo player: ', this.playerModel);
  }
}
