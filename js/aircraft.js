
class AirCraft {
  constructor(player) {
    this.player = player;
    this.x = this.player.offsetLeft;
    this.y = this.player.offsetTop;
  }

  moveRight() {
    this.x += 10;
    this.player.style.left = this.x + 'px';
    this.player.style.animation = "walk-right 0.8s steps(4) infinite";
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
  }

  info() {
    console.log('Nuevo player: ', this.x);
  }
}
