/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, mx, my) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.mx = mx;
  this.my = my;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.move = function () {
    if (this.left + this.size >= window.innerWidth || this.left < 0) {
      this.mx = -this.mx;
    }
    if (this.top + this.size >= window.innerHeight || this.top < 0) {
      this.my = -this.my;
    }
    this.left += this.mx;
    this.top += this.my;
  }

  this.speedUp = function(){
    if(this.mx > 0 && this.mx <100){
      this.mx ++;
    }
    if(this.mx < 0 && this.mx > -100){
      this.mx --;
    }
    if(this.my > 0 && this.my <100){
      this.my ++;
    }
    if(this.my < 0 && this.my > -100){
      this.my --;
    }
  }

  this.speedDown = function(){
    if(this.mx > 0 && this.mx <100){
      this.mx --;
    }
    if(this.mx < 0 && this.mx > -100){
      this.mx ++;
    }
    if(this.my > 0 && this.my <100){
      this.my --;
    }
    if(this.my < 0 && this.my > -100){
      this.my ++;
    }
  }

}
var mx = Math.random() * 5 - 5;
var my = Math.random() * 5 - 5;
var hero = new Hero('run.gif', 20, 30, 200, mx, my);

function start() {
  hero.move();
  document.getElementById('game').innerHTML = hero.getHeroElement();
  // setTimeout(start, 100);
  requestAnimationFrame(start);
}

start();