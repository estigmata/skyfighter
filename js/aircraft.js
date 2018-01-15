
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
    var $bullet = $("<div>", { "class": "bullet" });
    $bullet.css({
      left: this.x + 170,
      top: this.y + 38
    });
    $bullet
      .appendTo($('body'))
      .animate({left: this.x + window.screen.width - 26}, 1000, function() {
        $(this).remove();
      });
  }

  info() {
    console.log('Nuevo player: ', this.x);
  }
}
