

let Car={
    color: black,
    doors: 4,
    brand: Honda,
    fourWheel: false,
    
    }
    
    function drawCar(){
    x = 30
    y = 40
    circle(mouseX,mouseY,x,y)
    }
    
    function setup(){
    
    createCanvas(800,600)
    }
    
    function draw(){
        
    drawCar()
    }