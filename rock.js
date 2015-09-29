function Rock(group, x, y) {
    var rock = group.create(0, 0, 'rock');
    rock.position.x = x;
    rock.position.y = y;
    rock.scale.setTo(0.25, 0.25);
    rock.anchor.setTo(0.5, 0.5);

    game.physics.enable(rock, Phaser.Physics.ARCADE);
  
    rock.update = function() {
    	this.angle--;
    };
    rock.collide = function(){
        this.kill();
    }
}
