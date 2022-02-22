status="";
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function preload(){
}
function draw(){
    image(video,0,0,480,380);
    }
function start(){
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("detected").innerHTML= "Status= detecting objects";
    inputvar=document.getElementById("input").value;
}
function modelLoaded(){
    console.log("model is loaded");
    status=true;
}