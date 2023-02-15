canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 150;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 434;
greencar_y = 150;


function add() {
	background_imgTag = new Image();
	background_imgTag.src = background_image;
	background_imgTag.onload = uploadBackground;

	greencar_imgTag = new Image();
	greencar_imgTag.src = greencar_image;
	greencar_imgTag.onload = uploadgreencar;

}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if(greencar_y >=5){

greencar_y = greencar_y - 10;
console.log("When up arrow is pressed, x = " + greencar_x +" | y = " + greencar_y);
uploadBackground();
uploadgreencar();

}
}

function down()
{
	if(greencar_y <=435){
greencar_y = greencar_y + 10;
uploadBackground();
uploadgreencar();


	}
}

function left()
{
	if(greencar_x >=5){
greencar_x = greencar_x - 10;
uploadBackground();
uploadgreencar();

	}
}

function right()
{
	if(greencar_x <=715){
greencar_x = greencar_x + 10;
uploadBackground();
uploadgreencar();


	}
}
