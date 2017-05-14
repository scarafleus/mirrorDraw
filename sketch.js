var xol;
var yol;
var temp = 5;
var colr;
var colg;
var colb;
var wei;

function setup() {
  createCanvas(windowWidth -5, windowHeight -5);
  background(51);
  stroke(255);
  strokeWeight(5);
  colr = createSlider(0, 255, 255);
  colr.position(20, 20);
  colg = createSlider(0, 255, 255);
  colg.position(20, 40);
  colb = createSlider(0, 255, 255);
  colb.position(20, 60);
  wei = createSlider(0, 20, 4);
  wei.position(20, 80);
  text("red", colr.x * 2 + colr.width, 35);
  text("green", colg.x * 2 + colg.width, 55);
  text("blue", colb.x * 2 + colb.width, 75);
  text("thickness", wei.x * 2 + wei.width, 95);
}

function draw() {
  temp++;
  if (temp = 5) {
    temp = 0;
    xol = mouseX;
    yol = mouseY;
  }
}

function mouseDragged() {
  if (temp = 5 && mouseY >= height / 2) {
  stroke(colr.value(), colg.value(), colb.value());
  strokeWeight(wei.value());
  line(mouseX, mouseY, xol, yol);
  line(mouseX, dist(0, mouseY, 0, height), xol, dist(0, yol, 0, height));
  //console.log("lel");
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    background(51);
    stroke(255);
    strokeWeight(5);
    text("red", colr.x * 2 + colr.width, 35);
    text("green", colg.x * 2 + colg.width, 55);
    text("blue", colb.x * 2 + colb.width, 75);
    text("thickness", wei.x * 2 + wei.width, 95);
  }
}
