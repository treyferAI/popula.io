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
    init();
}

function onClick(elementID) {
    switch(elementID) {
        case 1:
            population++;
            console.log(population);
        break;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function init() { 
    population = 1;
    growthRate = 2.0; 
    running = false;
    time = new Date();
    run();
}

function run() {
    while(running) {
        update();
        draw();
        window.requestAnimationFrame(run);
    }
}

function update() {
    updatePopulation();
}

function draw() {
    document.getElementById("population_count").innerHTML = population;
}

function updatePopulation() {
    population++;
}

