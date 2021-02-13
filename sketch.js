var gameState = "homeScreen";
var intro, introImg;
var coughSol, coughSolImg;
var coughButtonImg, coughButton;

function preload() {
  homeImg = loadImage("home1.png");
  coughSolImg = loadImage("CoughSolution.png");
  introImg = loadImage("intro1.png");
  coughButtonImg = loadImage("coughButton.png");
}

function setup() {
  createCanvas(600, 600);

  coughSol = createSprite(170, 300, 30, 30);
  coughSol.addImage(coughSolImg);
  // coughSol.scale = 0.4;
  coughSol.visible = false;

  intro = createSprite(250, 150, 30, 30);
  intro.addImage(introImg);
  intro.visible = true;

  coughButton = createSprite(180, 380, 30, 30);
  coughButton.addImage(coughButtonImg);

  homeButton = createSprite(560, 30, 10, 10);
  homeButton.addImage(homeImg);
  homeButton.visible = false;
  homeButton.scale = 0.1;
}

function draw() {
  background(138, 219, 208);

  if (gameState === "homeScreen") {
    console.log("homescreen");
    intro.visible = true;
  }

  if (mousePressedOver(coughButton)) {
    gameState = "cough";

    intro.visible = false;
  }

  if (gameState === "cough") {
    console.log("coughscreen");
    coughButton.visible = false;
    coughSol.visible = true;
    homeButton.visible = true;
  }

  if (mousePressedOver(homeButton)) {
    homeButton.visible = false;
    coughButton.visible = true;
    coughSol.visible = false;
    gameState = "homeScreen";
  }

  drawSprites();
}
