var MAX_SPEED = 5;
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {preload:preload, create:create, update:update , render:render});

var ship;

//Ship.prototype = Phaser.Utils.extend(true, Phaser.Sprite.prototype, PIXI.Sprite.prototype);

function Enemy(group, x, y) {
    var enemy = group.create(0, 0, 'enemy');
    enemy.position.x = x;
    enemy.position.y = y;
    enemy.scale.setTo(0.05, 0.05);
    enemy.anchor.setTo(0.5, 0.5);

    game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.collide = function() {
        this.destroy();
    };
}

function Laser(group, x, y, angle) {
    group.create(x, y, 'laser');
}

function preload() {
    game.load.image('ship', 'assets/ship.png');
    game.load.image('enemy', 'assets/evil.png');
    game.load.image('laser', 'assets/laser.png');
    game.load.image('view', 'assets/view.png');
}

function collisionHandler(player, collider) {
    collider.collide();
}

function create() {
    game.physics.enable(Phaser.Physics.ARCADE);
    ship = new Ship(game, game.world.centerX, game.world.centerY); 

    enemies = game.add.group();
    viewGroup = game.add.group();
    for (var i = 0; i < 10; i ++) {
        var enemy = Enemy(enemies, 200 + i * 70, 200); 
    }
    game.add.sprite(200, 200, 'laser');
}

function update() {
    enemies.forEach(function(enemy) {
        enemy.angle++;
    });
}
function render() {

}
