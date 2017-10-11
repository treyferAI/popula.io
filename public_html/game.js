window.onload=function()
{
    start();
}

var population;
var growthRate;
var running;

function start() {
    console.log("Pre-allocation START");

    var canvas = document.getElementById("myCanvas");

    canvas.width = 500;
    canvas.height = 500;
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function init() { 
    population = 1;
    growthRate = 2.0; 
    running = true;
    run();
}

function run() {
    while(running) {
        update();
        draw();
        
    }
}

function update() {
    updatePopulation();
}

function draw() {

}

function updatePopulation() {

}

