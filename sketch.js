function setup () {
    createCanvas(700, 800);
    background("purpler");
}
function draw() {
    stroke("Black");
    fill("Blue");
    
    if(mouseIsPressed){
        react(mouseX, mouseY, 20, 35);
    }
}