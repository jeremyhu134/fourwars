class HumanMissionBriefingScene extends Phaser.Scene {
    constructor() {
		super({ key: 'HumanMissionBriefingScene' })
	}
    preload(){
        
    }
    create() {
        var globalScene = this;
        
        this.add.image(10,10,'missionBriefing').setOrigin(0,0).setScale(1);
        if(gameState.humanLevel == 1){
            globalScene.add.text( 40, 100, `General, our first battle is \nnow. Guide our troops to \nvictory. There is a small \nentoss outpost right outside \nthe main headquarters. \nCapturing it is essential in \nprogressing towards the port.`, {fill: '#OOOOOO', fontSize: '25px'});
            this.add.image(575,160,'humantrooper').setOrigin(0,0).setScale(50/25);
        }
        
        var backButton = this.add.image(950,440,'backButton').setOrigin(0,0).setInteractive();
        backButton.on('pointerdown', function(pointer){
            globalScene.scene.stop('HumanMissionBriefingScene');
            globalScene.scene.start('CampaignScene');
        });
      
        
        var startButton = this.add.image(10,450,'startButton').setOrigin(0,0).setScale(40/59).setInteractive();
        startButton.on('pointerdown', function(pointer){
            globalScene.add.text( 180, 455, `Campaign not yet available`, {fill: '#OOOOOO', fontSize: '20px'});
        });
    }
    upload() {
        
    }
}