function setup() {
  createCanvas(400, 400);
}


//position of the spaceship
var x = 200; 
var y = 200;
var shipHeight = 200
var shipWidth = 200

//create a variable to control the ship's lights 
  //Now if I want to change it, i only have to change 1 variable instead of 6
     //also shifts the objects simultaneously to retain relative orientation
var shipLightsSize = 30; 

  
 
draw = function() {
  // all lines of code inside here will be run repeatedly
  
background(0,0,0);
  
  
//spaceship cockpit 
fill(166,226,75)
ellipse(x,y-25, shipWidth-50, shipHeight);
  
//spaceshipbottom
fill(255,255,0)
ellipse(x,y+20, shipWidth-100, shipHeight-60);
ellipse(x-40,y+15, shipWidth-100, shipHeight-60)
ellipse(x+40,y+15, shipWidth-100, shipHeight-60)
  
//spaceship body
fill(119,151,56)
ellipse(x,y,shipWidth+50, shipHeight-60);

fill(255,0,0)
//line(x1, y1, x2, y2) --> ccoordinates for each end point
line(x-125, y, x+125, y)
  
//spaceship lights 
fill(255,255,0)
ellipse(x-50,y, shipLightsSize,shipLightsSize);
ellipse(x,y,shipLightsSize,shipLightsSize);
ellipse(x+50,y, shipLightsSize,shipLightsSize);
  
//to change position for movement
//for speed increase or decrease x 
//for direction, use (-) for R to L
// x = x+5; 

};