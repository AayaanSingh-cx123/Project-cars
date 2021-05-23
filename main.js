canvas = document.getElementById('mycanvas');
ctx = canvas.getContext("2d");

rover.width=100;
rover.height=90;

car.width=100;
car.height=90;

background_image="https://i.postimg.cc/bv5d35nK/racing.jpg";
rover_image="https://postimg.cc/9rqYz9HM";
car_image="https://postimg.cc/9rqYz9HM";

rover_x=10;
rover_y=10;

car_x=10;
car_y=10;
function add() {
    background_imgTag  = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;


    rover_imgTag  = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src =rover_image;

    car_imgTag  = new Image();
    car_imgTag.onload = uploadRover;
   car_imgTag.src =rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover.width,rover.height);
}
function uploadCar(){
    ctx.drawImage(car_imgTag,car_x,car_y,car.width,car.height);
}
window.addEventListener("keydown",my_keyDown);
function my_keyDown(e)
{
    
    keyPressed = e.keyCode; 
    console.log(keyPressed);
     if(keyPressed == '38')
      { up();
         console.log("up");
     } 
     if(keyPressed == '40')
      { down();
         console.log("down");
         } 
         if(keyPressed == '37') 
         { left();
             console.log("left");
             }
              if(keyPressed == '39')
               { right(); console.log("right");
             } 
}