var puppy, bone, pitbull, gameOver, restart, field;

var puppyImg, boneImg, pitbullImg, gameOverImg, restartImg, fieldImg;

var clickSound, barkSound, gameOverSound;

var bones = 0;

var gameState = 1;

function preload() {
  puppyImg = loadImage("Puppy.png");
  pitbullImg = loadImage("BullDog.png");
  boneImg = loadImage("Bone.png");
  fieldImg = loadImage("Field.png");
  gameOverImg = loadImage("GameOver.png");
  restartImg = loadImage("Restart.png");
  clickSound = loadSound("Click.mp3");
  barkSound = loadSound("Dog Barking.mp3");
  gameOverSound = loadSound("Game Over.mp3");


}

function setup() {
  createCanvas(600, 300);

  field = createSprite(300, 220, 600, 300);
  field.addImage(fieldImg);
  field.scale = 0.2;

  puppy = createSprite(80, 230, 40, 40);
  puppy.addImage(puppyImg);
  puppy.scale = 0.1;

}

function draw() {
  background("white");
  drawSprites();

  if (gameState === 1) {
    field.velocityX = -3;
    if (field.x < 180) {
      field.x = 160;

    }

  }

}