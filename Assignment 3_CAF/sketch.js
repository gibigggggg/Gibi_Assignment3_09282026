let x,y,d;
let colorPalette = [ '#ef268e', '#33FF57', '#cb1ba2', '#F3FF33', '#FF33A1' ];
let numCircles;
let spacing;
function setup() {

  createCanvas(windowWidth, windowHeight);

  x = width/2;
  y = height/2;
  d = width/2;
  numCircles = 7;
  spacing = d / numCircles;
  noFill();
  strokeWeight(5);
}

function draw() {
  background(0);
  d = width/2;
  for ( i = 0; i < 10; i++) {

    fill(colorPalette[i]);
    circle(x, y, d);
    d = d - spacing;
  }
}