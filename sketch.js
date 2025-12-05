//when i tried to introduce movement to the spaceship, portions of the code would not react in proportion to the rest. Now I realize that it's because the ratios are off and I was using fixed offsets to change the positions of each shape.According to chatgpt, the fixed number don't shrink but the variables do.
//IM STILL NOT SURE WHY THIS MATTERS

//Adding an alien pilot
//Under Sketch do Add Folder (name = images)
//Upload image (god.png, PythSoc.png) to Folder

function setup() {
  createCanvas(600, 600);
  //delays/slows the gif as soon as the canvas is rendered
  moonimg.delay(150);
  earthimg.delay(150);
  
}
//these are all the images uploaded to the project file
  function preload(){
      alienimg = loadImage("images/alienpeace.png");
      moonimg =  loadImage("images/fullmoon.gif");
      starimg = loadImage("images/stars.gif");
      earthimg = loadImage("images/earth.gif");
}

//position of the spaceship
//instead of creating variables for the ship width and height, i removed them to only have 3 variables:
//s = 1 is the scale factor, itll start at 1
var x = 300;
var y = 300;
var s = 1;

//variables for timeclock


draw = function () {
  // all lines of code inside here will be run repeatedly
  background(0, 0, 0);

  // p5.js is a library in javascript that simplifies the coding process which is why push can also be used outside of appending arrays.
  // push();
  // noStroke();
  // fill(242,242,242)
  // ellipse(120,120, 210,210);
  // fill(160,160,160)
  // ellipse(120,120, 200,200);
  // pop();
  image(starimg, 0, 0, 600, 600);
  image(moonimg, 0, 0, 425,300);
  image(earthimg, 50, 300, 900, 600)
  
  
  push(); //saves default drawing state,
  translate(x, y); //moves the origin from (0,0) located in the upper left corner to a select position on the canvas which becomes the new origin (ex: (0,0)) --> (50,50). We left it at (x,y) so itll adopt the specified measurments for each shape then when we want to move it, it'll go based on each shapes og origin point
  //Example: translate(50,50). Now when we draw a shape at coordinates at ellipse(0, 0, 20, 50) it will actually originate our x and y coordinates at (50,50) 
  scale(s); //scale(amount to scale) or scale(s,y,z) shrinks and stretches everything uniformly based on the coordinates to make shapes appear as different sizes. it'll scale everything written after it. so when we call it at the end * 0.99 it'll shrink
   // Draw a square(30, 20, 40); it will be big, if we want to scale the coordinate system by a factor of 0.5 then write scale(0.5); everything written afterwards will be scaled accordingly, so if we create a new square(30,20,40), ti will appear at (15, 10) after scaling right above our previous square. 
  
  
  //the spaceship drawing
  noStroke();
  // Cockpit
  fill(229, 204, 255);
  ellipse(0, -25, 150, 200);
    // Draw the alien image. image(imagename,x, y, w, h)
  image(alienimg, -50, -130, 100, 105);
  describe('An image of an alien showing the peace sign');

  // fill(224,224,224);
  // ellipse(0, -90, 35, 45);
  
 // Bottom pods - push/pop for the stroke lines
push();
  stroke(0,0,0);
  fill(255,255,153)
  ellipse(0, 20, 100, 120);
  fill(255,255,204);
  ellipse(-40, 15, 100, 120);
  ellipse(40, 15, 100, 120);
pop();

  // Body
  fill(0, 151, 56);
  ellipse(0, 0, 250, 130);

  // Midline
  stroke(255);
  line(-125, 0, 125, 0);

  // Lights
  fill(255, 255, 0);
  ellipse(-50, 0, 30, 30);
  ellipse(0, 0, 30, 30);
  ellipse(50, 0, 30, 30);
  


  pop(); // restore default drawing state
  

  //to change position for movement
  //for speed increase or decrease x
  //for direction, use (-) for R to L
  //put a conditional statement/loop here so that the space ship comes in, stops, does an action, then leaves. right now it only goes in one direction.
//    x = x+5;
//    y -= 5;
  
//    s *= 0.99
  
  
  
//INTERACTIVITY 
  
//Move the spaceship using arrow keys 
//uses conditional statement (if)
  
let vx = 0, vy = 0;

if (keyIsDown(UP_ARROW)) vy -= 0.5;
if (keyIsDown(DOWN_ARROW)) vy += 0.5;
if (keyIsDown(LEFT_ARROW)) vx -= 0.5;
if (keyIsDown(RIGHT_ARROW)) vx += 0.5;

x += vx;
y += vy;

// friction
vx *= 0.98;
vy *= 0.98;
  
//code the alient to appear and leave when the enter key is pressed
//add an audio for key interaction 
  
  
  

  
};
