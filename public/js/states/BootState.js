var BootState = {
	init: function() {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
	},
	preload: function() {
		this.load.images('preloadBar', 'assets/images/bar.png');
		this.load.images('logo', 'assets/images/logo.png');
	},
	create: function() {
		this.game.stage.backgroundColor = '#fff';

		this.state.start('PreloadState');
	}
};