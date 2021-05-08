canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_x=100;
rover_y=100;
background_image="mars.jpg";
rover_image="rover.png";
function add(){
    background_load=new Image();
    background_load.onload=uploadBackground;
    background_load.src=background_image;
    rover_load=new Image();
    rover_load.onload=uploadRover;
    rover_load.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_load,0,0,1000,800);
}
function uploadRover(){
    ctx.drawImage(rover_load,rover_x,rover_y,100,100);
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed)
}