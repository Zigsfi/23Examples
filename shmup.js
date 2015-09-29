var MAX_SPEED = 5;
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {preload:preload, create:create, update:update , render:render});

var ship;


function preload() {
    game.load.image('ship', 'assets/ship.png');
    game.load.image('enemy', 'assets/evil.png');
    game.load.image('view', 'assets/view.png');
    game.load.image('rock', 'assets/rock.png');
}

function collisionHandler(ship, enemies) {
    ship.collide();
}

function rock_shipCH(ship, rocks) {
    rocks.collide();
}

function create() {
    game.physics.enable(Phaser.Physics.ARCADE);
    ship = new Ship(game, game.world.centerX, game.world.centerY); 

    enemies = game.add.group();
    rocks = game.add.group();
    viewGroup = game.add.group();

    for (var i = 0; i < 10; i ++) {
        var enemy = Enemy(enemies, 200 + i * 70, 200); 
        var rock = Rock(rocks, 200 + i * 70, 400);
    }
}

function update() {
    game.physics.arcade.overlap(ship, enemies, collisionHandler, null, this);
    game.physics.arcade.overlap(ship, rocks, rock_shipCH, null, this);
}
function render() {

}
