let ball1,ball2
let balls = []
let numOfBalls;

function setup() {
  createCanvas(600, 600);
  noStroke()
  ball1 = new Ball();
  ball2 = new Ball();
  numOfBalls = 0;
}

function mousePressed(){
  balls[numOfBalls] = new Ball();
  numOfBalls++;
  console.log(numOfBalls)
}

function draw() {
  background(0,20);
  fill(255,255,255)
  ball1.show();
  ball1.move();
  ball1.boundaries();
  ball1.pulse();
  ball2.glow()
  ball2.show();
  ball2.move();
  ball2.boundaries();
  
  for(let i = 0; i<balls.length; i++){
    balls[i].show()
    balls[i].move()
    balls[i].boundaries()
    balls[i].pulse()
  }
}

class Ball {
  constructor(){
    this.x = random(20,width-20);
    this.y = random(20,height-20);
    this.xSpeed = random(-3,3);
    this.ySpeed = random(-3,3);
    this.w = 100;
    this.h = 100;
    this.tar = 100;
    this.tar1 = 50;
    this.b = 220;
    this.speed = 2
  }
  
  show(){
    ellipse(this.x,this.y,this.w,this.h)
  }
  
  move(){
    this.x = this.x + this.xSpeed
    this.y = this.y + this.ySpeed
  }
  
  boundaries(){
    if(this.x < 0 || this.x > width){
      this.xSpeed*=-1
    }
    if(this.y < 0 || this.y > height){
      this.ySpeed*=-1
    }
  }
  
  pulse(){
    this.w = lerp(this.w,this.tar,0.01);
    this.h = lerp(this.h,this.tar,0.01);
    
    if(round(this.w) <= round(this.tar)){
      this.tar = 100;
    }
    if(round(this.w) >= round(this.tar)){
      this.tar = 50;
    }
    if(round(this.h) <= round(this.tar)){
      this.tar = 100;
      this.tar - 50;
    }
    if(round(this.h) >= round(this.tar)){
      this.tar = 50;
      this.tar1 = 100;
    }
  }
  
  glow(){
    fill(255,255,this.b)
    this.b+= this.speed
    if(this.b > 255){
      this.speed = -2
    }
    if(this.b < 220){
      this.speed = 2
    }
  }
}