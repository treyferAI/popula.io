window.onload = function () {

    //Initialization
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

    function preload() {
        // Preload all assets/sprites here for use in the game //
        console.log("Initializing...")
        game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);
        game.load.image('background','assets/misc/starfield.jpg');
    }

     //Global
     var population;
     var growthRate;
     var running;
     var time;
     var button;
     var background;

    function create() {
        
        game.stage.backgroundColor = '#182d3b'; //Hex?

        background = game.add.tileSprite(0,0,800,600, 'background');

        button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);

        button.onInputOver.add(over, this);
        button.onInputDown.add(down, this);

        population = 1;
        growthRate = 2.0;
        running = true;
    }

    function update() {
        updatePopulation();
    }

    function up() {
        console.log('button up', arguments);
    }
    
    function down() {
        console.log('button down', arguments);
    }
    
    function over() {
        //console.log('button over');
    }
    
    function out() {
        //console.log('button out');
    }
    
    function actionOnClick () {
    
        background.visible =! background.visible;
    
    }

    function updatePopulation() {

    }

}
