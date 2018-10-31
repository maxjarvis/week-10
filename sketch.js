var y = 0;
var x = 100;
var speed = 5;
var a = 500;
var b = 200;
var rise = 3;

function setup() {
  createCanvas(600, 200);
  background(204);
}

function draw() {
  background(255);
    y += speed
    if(y > height+60) {
    y = 0;
    x = random(0, width);
  }
  stroke(0, 0, 255);
  line(x*2, y+30, x*2, y+10+30);
  line(x*.5, y-50, x*.5, y+20-50);
  line(x*1.6, y+80, x*1.6, y+20+80);
  line(x*.7, y, x*.7, y+20);
  line(x*1.3, y+10, x*1.3, y+20+10);
  line(x*2, y+80, x*2, y+20+80);
  line(x*2.7, y, x*2.7, y+10);
  line(x*2.3, y+10, x*2.3, y+30+10);
  currentTime = millis();
  if(currentTime > 10000) {
    background(255);
    b -= rise
    if(b < 80) {
      b = 80
    }
    noStroke();
    fill(255, 255, 0);
    ellipse(a, b, 50, 50);
    if(y > height) {
      y = height+50
    }
  }
}
