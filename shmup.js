var MAX_SPEED = 5;
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {preload:preload, create:create, update:update , render:render});

var ship;

//Ship.prototype = Phaser.Utils.extend(true, Phaser.Sprite.prototype, PIXI.Sprite.prototype);

function Enemy(group, viewGroup, x, y) {
    var enemyGroup = game.add.group();
    enemyGroup.position.x = x;
    enemyGroup.position.y = y;
    var enemy = enemyGroup.create(0, 0, 'enemy');
    enemy.scale.setTo(0.05, 0.05);
    enemy.anchor.setTo(0.5, 0.5);

    //enemy.pivot.setTo(x+256, y+256);
    //enemy.anchor.setTo(0.5, 0.5);
    var cone = enemyGroup.create(0, -100, 'view');
    cone.anchor.setTo(0.5, 0.5);
    cone.collide = function() {
    };
    game.physics.enable(cone, Phaser.Physics.ARCADE);
    group.add(enemyGroup);
    game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.collide = function() {
        enemyGroup.destroy();
    };
//    enemy.addChild(cone);
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
        var enemy = Enemy(enemies, viewGroup, 200 + i * 70, 200); 
    }
    game.add.sprite(200, 200, 'laser');
}

function update() {
    enemies.forEach(function(group) {
        group.angle++;
        group.forEach(function(group) {
            game.physics.arcade.overlap(ship, group, collisionHandler, null, this);
        });
    });
}
function render() {
    enemies.forEach(function(group) {
        group.forEach(function(thing) {
            game.debug.body(thing);
        });
    });
    game.debug.body(ship);
    game.debug.body(ship);

}
