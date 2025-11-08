// Temel ayarlar
function setup() {
  createCanvas(800, 600);
  smooth();
  strokeWeight(2);
  background(173, 216, 230);

  drawScene();
}

function drawScene() {
  // Zemin çizgisi
  strokeWeight(8);
  stroke(0);
  line(20, 550, 780, 550);

  // Çubuk figürler
  strokeWeight(2);
  fill(0);
  ellipse(350, 80, 20, 20); // kafa
  line(350, 100, 350, 150); // gövde
  line(350, 110, 330, 95);  // kol
  line(350, 110, 370, 130); // kol
  line(360, 175, 350, 150); // bacak
  line(330, 90, 350, 150);  // detay

  ellipse(280, 80, 20, 20); // ikinci figür kafası
  line(280, 100, 280, 150); // gövde
  line(250, 100, 320, 100); // kol
  line(250, 170, 280, 150); // bacak
  line(300, 170, 280, 150); // bacak

  // Binalar / dikdörtgenler
  fill(250, 0, 0);
  rect(50, 350, 150, 100);
  fill(255);
  rect(50, 350, 80, 80);
  line(150, 350, 150, 400);
  line(170, 350, 170, 400);

  fill(0, 0, 250);
  rect(50, 50, 150, 100);
  rect(50, 50, 70, 70);
  line(50, 50, 110, 110);
  line(100, 100, 120, 120);
  line(120, 100, 100, 120);
  line(150, 50, 150, 150);
  line(170, 50, 170, 150);
}

// Fareyi takip eden küçük daireler
function draw() {
  fill(255, 0, 0, 100);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);
}

// Fare tıklayınca sahneyi tekrar çiz
function mouseClicked() {
  background(173, 216, 230);
  drawScene();
}