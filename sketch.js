function setup() {
  createCanvas(400, 400);
}

function draw() {
  
//Changing the background color RGB
//must be at the top of the program or it will overlay the other code
  background(164, 196, 0)
  
  
//Variables 
  
  
    // turn off stroke for face shapes
  noStroke();

  
  //The Ellipse Function 

//where to draw the ellipse and what size 
//ellipse(how far the ellipse from the left side, moves vertically, makes wider/thinner, changes height)
//the first two parameters control the position, the second two the size
      //ellipse(x, y, width, height )
  
// face
  //fill function - will color every shape that comes after this command

fill(130,90,44)
ellipse(202, 208, 300, 300);
  
// eyes
fill(0,0,0);
ellipse(157, 151, 40, 40);
ellipse(304, 142, 40, 40);

// mouth
fill(255, 0, 0)
ellipse(257, 240, 120, 136);
  
//Making Rectangles - rect()
  //(x,y, width, height)
  //parameters adjust based on the upper left corner of the rectangle
fill(130,90,44)
rect(160, 350, 95, 50)
 
strokeWeight(33);
stroke(250,0,242);
line(83,116, 271,74);

}