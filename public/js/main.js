var GameState = {
	init: function() {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;

	},
	preload: function() {
		this.load.image('backyard', 'assets/images/backyard.png');
		this.load.image('apple', 'assets/images/apple.png');
		this.load.image('candy', 'assets/images/candy.png');
		this.load.image('rotate', 'assets/images/rotate.png');
		this.load.image('toy', 'assets/images/rubber_duck.png');
		this.load.image('arrow', 'assets/images/arrow.png');
		this.load.spritesheet('pet', 'assets/images/pet.png', 97, 83, 5, 1, 1);
	},
	create: function() {

	}
};

var game = new Phaser.Game(360, 640, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState'); 