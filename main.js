

objects=[];
status="";

function setup(){
    canvas = createCanvas(400 , 400);
    canvas.center();
    
}

function preload(){
    video = createVideo("video.mp4");
    video.hide();
}

function draw(){
    image(video,0,0,400,400);
    if(status!= ""){
        objectDetector.detect(video, gotResults);
        for(i = 0; i< object.length; i++){
            document.getElementById("objects").innerHTML="Number of objects detected are : "+objects.length;

            fill("red");
            stroke("red");
            noFill();
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + ""+ percent+"%", objects[i].x + 15, objects[i].y+15);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            if(objects[i].label==objectname){
                objectDetector.detect(gotResults);
                document.getElementById("status").innerHTML= objectname+" Found ";

            }
            else{
                document.getElementById("status").innerHTML= objectname+" Not Found "; 
            }
        }
    }
}
 function start(){
     objectDetector = ml5.objectDetector("cocossd",modelLoaded);
     document.getElementById("status").innerHTML="Status Detecting Objects";
     objectname= document.getElementById("AI").value;

 }

 function modelLoaded(){
    console.log("Model is Loaded");
    video.loop();
    video.volume(0);
    video.speed(1);

 }

 function gotResults(error,results){
     if(error){
         console.error(error);
     }
     else{
         console.log(results);
         objects = results;

     }
 }
