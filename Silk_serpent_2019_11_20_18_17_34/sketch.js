let play = false;
let button
let press
let sliderGroup = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let h = 20;
let man

function preload() {
 man = loadModel('stickman.obj', true);
}

function setup() {
 createCanvas(640, 500, WEBGL);
    for (var i = 0; i < 6; i++) {
    if (i === 2) {
      sliderGroup[i] = createSlider(10, 400, 200);
    } else {
      sliderGroup[i] = createSlider(-400, 400, 0);
    }
    h = map(i, 0, 6, 5, 85);
    sliderGroup[i].position(10, height + h);
    sliderGroup[i].style('width', '80px');
  }
  
    press = 
    createVideo(['Shapes.mp4']);
  button = createButton('play');
  button.mousePressed(toggleVid);
  
}

function toggleVid() {
 if (play) { 
   press.pause();
   button.html('play');
 
 } else {
   press.loop();
   button.html('pause')
 }
  play = !play;
}

function draw() {
  background(0);
    X = sliderGroup[0].value();
  Y = sliderGroup[1].value();
  Z = sliderGroup[2].value();
  centerX = sliderGroup[3].value();
  centerY = sliderGroup[4].value();
  centerZ = sliderGroup[5].value();
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);
  let light1 = mouseX - height / 4;
  let light2 = mouseY - width / 5;
  
  
  

 ambientLight(30,30,30);
  pointLight(250, light1, light2, 100, 50, 50);
  
  translate(15, 50, -140);
  push();
  noStroke();
  rotateZ(frameCount * 0.03);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  cylinder(60, 60);
  pop();
  
  push();
  translate(width / 35, height / 50, 10);
  rotateZ(frameCount * 0.15);
  rotateX(frameCount * 0.15);
  rotateY(frameCount * 0.15);
  specularMaterial(250);
  torus(110, 20, 80, 80);
  pop();

  translate(0 * 2, -185, 0);
push();
  noStroke();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  cone(70, 70);
  pop();

translate(100,0,0);
  push();
  scale(1.0);
 normalMaterial();
  specularMaterial(200);
  model(man);
  pop();


}