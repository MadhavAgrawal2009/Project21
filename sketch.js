var bullet, wall;

var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,10,50);
  bullet.shapeColor = "yellow";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(22,83));

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  

  if(hasCollided(bullet, wall)) {
      bullet.velocityX = 0;
      var damage = Math.round(0.5 * weight * speed * speed/(thickness * thickness * thickness));
      text("weight: " + weight + "\nspeed: " + speed + "\ndamage: " + damage, 1000,250);
      if(damage > 10) {
          wall.shapeColor = color(255, 0, 0);
      }
      else {
        wall.shapeColor = color(0,255);
      }
  }
  drawSprites();
}
function hasCollided(Ibullet, Iwall) {
  bulletRightEdge = Ibullet.x + Ibullet.width;
  wallLeftEdge = Iwall.x;
  if (bulletRightEdge >= wallLeftEdge) {
      return true;
  }
      return false;
}