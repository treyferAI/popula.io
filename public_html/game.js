window.onload=function()
{
    start();
}

var population;
var growthRate;
var running;
var time;

function start() {
    console.log("Pre-allocation START");

    var canvas = document.getElementById("myCanvas");

    canvas.width = 500;
    canvas.height = 500;
    
    init();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function init() { 
    population = 1;
    growthRate = 2.0; 
    running = true;
    time = new Date();
    run();
}

function run() {
    while(running) {
        update();
        draw();
        window.requestAnimationFrame(loop)
    }
}

function update() {
    updatePopulation();
}

function draw() {
    document.getElementById("popCounter").innerHTML = population;
}

function updatePopulation() {
    population++;
}

