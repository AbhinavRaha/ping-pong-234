img="";
sholderX=0;
sholderY=0;
function preload() {
	world_start = loadSound("world_start.wav");
mario_gameover=loadSound("gameover.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);
	video=creatCapture(VIDEO);
	video.size (800,400 );
	video.parent('game_console');
	poseNet = ml5.poseNet(video, modelLoaded);
	 poseNet.on('pose', gotPoses);
}
function modelLoaded()
 { console.log('Model Loaded!');

}
function gotPoses(results) { if(results.length > 0) { console.log(results); sholderX = results[0].pose.sholder.x; sholderY = results[0].pose.sholder.y; } }
function draw() {
	game()
}
