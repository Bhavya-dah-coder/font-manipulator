                                                          
difference = 0;
rightWristX = 0;
leftWristX = 0;

function preload()
{

}


function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 500);
    canvas.position(570,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;

    difference = floor(leftWristX-rightWristX);

    console.log("leftWristX = "+ leftWristX + " rightWristX = "+ rightWristX + " difference = "+ difference);
    }

}
function draw()
{
    background('#f2cece');

    textSize(difference);

    fill('#630328');

    text("Bhavya", 30, 300);

}



 

