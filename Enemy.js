function Enemy(group, x, y) {
    var enemy = group.create(0, 0, 'enemy');
    enemy.position.x = x;
    enemy.position.y = y;
    enemy.scale.setTo(0.05, 0.05);
    enemy.anchor.setTo(0.5, 0.5);

    game.physics.enable(enemy, Phaser.Physics.ARCADE);

    enemy.update = function() {
    	this.angle++;
    };
}
