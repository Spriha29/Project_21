var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);

    surface1 = createSprite(90,680,150,30);
    surface1.shapeColor = "blue";

    surface2 = createSprite(290,680,150,30);
    surface2.shapeColor = "yellow";

    surface3 = createSprite(490,680,150,30);
    surface3.shapeColor = "red";

    surface4 = createSprite(690,680,150,30);
    surface4.shapeColor = "green";

    box = createSprite(random(20,740),200,20,20);
    box.shapeColor = "white";
    box.velocityX = 4;
    box.velocityY = -4;
}

function draw() {
    background(rgb(169,169,169));
    
    if(box.isTouching(surface1) && box.bounceOff(surface1)){
        box.shapeColor = "blue";
        music.playSound = true;
    }

    if(box.isTouching(surface2) && box.bounceOff(surface2)){
        box.shapeColor = "yellow";
        music.playSound = true;
    }

    if(box.isTouching(surface3) && box.bounceOff(surface3)){
        box.shapeColor = "red";
        music.playSound = true;
    }

    if(box.isTouching(surface4)){
        box.shapeColor = "green";
        box.velocityX = 0;
        box.velocityY = 0;
        music.playSound = false;
    }

    edges=createEdgeSprites(); 
    box.bounceOff(edges);
    
    drawSprites();
}
