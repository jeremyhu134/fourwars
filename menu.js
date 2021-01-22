class MenuScene extends Phaser.Scene {
    constructor() {
		super({ key: 'MenuScene' })
    }

    preload(){
        this.load.image('gameTitle','heroimages/gameTitle.png');
        this.load.image('gameTitleImage','heroimages/gameTitleImage.png');
        this.load.image('missionBriefing','heroimages/missionBriefing.png');
        this.load.image('campaignButton','heroimages/campaignButton.png');
        this.load.image('skirmishButton','heroimages/skirmishButton.png');
        this.load.image('startButton','heroimages/startButton.png');
        this.load.image('backButton','heroimages/backButton.png');
        this.load.image('canyonBg','heroimages/canyonBg.png');
        
        this.load.image('alienBanner','heroimages/alienBanner.png');
        this.load.image('humanBanner','heroimages/humanBanner.png');
        this.load.image('demonBanner','heroimages/demonBanner.png');
        this.load.image('entossBanner','heroimages/entossBanner.png');
        this.load.image('alienDescription','heroimages/alienDescription.png');
        this.load.image('alienCampaignSummary','heroimages/alienCampaignSummary.png');
        this.load.image('humanDescription','heroimages/humanDescription.png');
        this.load.image('humanCampaignSummary','heroimages/humanCampaignSummary.png');
        this.load.image('demonDescription','heroimages/demonDescription.png');
        this.load.image('demonCampaignSummary','heroimages/demonCampaignSummary.png');
        this.load.image('entossDescription','heroimages/entossDescription.png');
        this.load.image('entossCampaignSummary','heroimages/entossCampaignSummary.png');
        
        this.load.image('bullet','heroimages/bullet.png');
        this.load.image('shopBar','heroimages/shopBar.png');
        
        this.load.image('alienhq','heroimages/alienhq.png');
        this.load.image('aliendrone','heroimages/aliendrone.png');
        this.load.image('alienwalker','heroimages/alienwalker.png');
        this.load.image('alienmegawalker','heroimages/alienmegawalker.png');
        this.load.image('alienplasmaship','heroimages/alienplasmaship.png');
        
        this.load.image('alienhqred','heroimages/alienhqred.png');
        this.load.image('aliendronered','heroimages/aliendronered.png');
        this.load.image('alienwalkerred','heroimages/alienwalkerred.png');
        this.load.image('alienmegawalkerred','heroimages/alienmegawalkerred.png');
        this.load.image('alienplasmashipred','heroimages/alienplasmashipred.png');
        
        this.load.image('humanhq','heroimages/humanhq.png');
        this.load.image('humantrooper','heroimages/humantrooper.png');
        this.load.image('humantank','heroimages/humantank.png');
        this.load.image('humanbattlecruiser','heroimages/humanbattlecruiser.png');
        
        this.load.image('humanhqred','heroimages/humanhqred.png');
        this.load.image('humantrooperred','heroimages/humantrooperred.png');
        this.load.image('humantankred','heroimages/humantankred.png');
        this.load.image('humanbattlecruiserred','heroimages/humanbattlecruiserred.png');
        
        this.load.image('demonhq','heroimages/demonhq.png');
        this.load.image('demoncrawler','heroimages/demoncrawler.png');
        this.load.image('demonflarer','heroimages/demonflarer.png');
        this.load.image('demonfly','heroimages/demonfly.png');
        
        this.load.image('demonhqred','heroimages/demonhqred.png');
        this.load.image('demoncrawlerred','heroimages/demoncrawlerred.png');
        this.load.image('demonflarerred','heroimages/demonflarerred.png');
        this.load.image('demonflyred','heroimages/demonflyred.png');
        
        this.load.image('entosshq','heroimages/entosshq.png');
        this.load.image('entossspitter','heroimages/entossspitter.png');
        this.load.image('entossgiant','heroimages/entossgiant.png');
        this.load.image('entossbird','heroimages/entossbird.png');
        
        this.load.image('entosshqred','heroimages/entosshqred.png');
        this.load.image('entossoutpostred','heroimages/entossoutpostred.png');
        this.load.image('entossspitterred','heroimages/entossspitterred.png');
        this.load.image('entossgiantred','heroimages/entossgiantred.png');
        this.load.image('entossbirdred','heroimages/entossbirdred.png');
        
        this.load.image('bg','heroimages/bg.png');
        this.load.image('bullet1','heroimages/bullet1.png');
        this.load.image('bullet2','heroimages/bullet2.png');
        this.load.image('bullet3','heroimages/bullet3.png');
        this.load.image('bullet4','heroimages/bullet4.png');
        this.load.image('bullet5','heroimages/bullet5.png');
        this.load.image('bullet6','heroimages/bullet6.png');
        this.load.image('bullet7','heroimages/bullet7.png');
        this.load.image('bullet8','heroimages/bullet8.png');
        this.load.image('bullet9','heroimages/bullet9.png');
    }
    
    create() {
        gameState.faction = "NONE";
        this.add.image(10,10,'gameTitleImage').setOrigin(0,0).setScale(77/300);
        this.add.image(97,10,'gameTitle').setOrigin(0,0);
         
        var globalScene = this;
        
        var campaignButton = this.add.image(10,120,'campaignButton').setOrigin(0,0).setScale(50/153).setInteractive();
        campaignButton.on('pointerdown', function(pointer){
            globalScene.scene.stop('MenuScene');
            globalScene.scene.start('CampaignScene');
        });
        
        var skirmishButton = this.add.image(10,180,'skirmishButton').setOrigin(0,0).setInteractive();
        skirmishButton.on('pointerdown', function(pointer){
            globalScene.scene.stop('MenuScene');
            globalScene.scene.start('SkirmishScene');
        });
    }
    upload() {
        
    }
}







class CampaignScene extends Phaser.Scene {
    constructor() {
		super({ key: 'CampaignScene' })
	}
    preload(){
        
    }
    create() {
        var globalScene = this;
        
        this.add.image(10,10,'gameTitleImage').setOrigin(0,0).setScale(77/300);
        this.add.image(97,10,'gameTitle').setOrigin(0,0);
        
        var backButton = this.add.image(950,440,'backButton').setOrigin(0,0).setInteractive();
        backButton.on('pointerdown', function(pointer){
            globalScene.scene.stop('CampaignScene');
            globalScene.scene.start('MenuScene');
        });
        
        var campaignSummary = this.add.image(10,200,'humanCampaignSummary').setOrigin(0,0);
        
        gameState.faction = "human";
        
        var globalScene = this;
        
        var humanButton = this.add.image(10,120,'humanBanner').setOrigin(0,0).setScale(50/153).setInteractive();
        humanButton.on('pointerdown', function(pointer){
            gameState.faction = "human";
            campaignSummary.destroy();
            campaignSummary = globalScene.add.image(10,200,'humanCampaignSummary').setOrigin(0,0);
        });
        
        var alienButton = this.add.image(70,120,'alienBanner').setOrigin(0,0).setScale(50/153).setInteractive();
        alienButton.on('pointerdown', function(pointer){
            gameState.faction = "alien";
            campaignSummary.destroy();
            campaignSummary = globalScene.add.image(10,200,'alienCampaignSummary').setOrigin(0,0);
        });
        
        var demonButton = this.add.image(130,120,'demonBanner').setOrigin(0,0).setScale(50/153).setInteractive();
        demonButton.on('pointerdown', function(pointer){
            gameState.faction = "demon";
            campaignSummary.destroy();
            campaignSummary = globalScene.add.image(10,200,'demonCampaignSummary').setOrigin(0,0);
        });
        
        var entossButton = this.add.image(190,120,'entossBanner').setOrigin(0,0).setScale(50/153).setInteractive();
        entossButton.on('pointerdown', function(pointer){
            gameState.faction = "entoss";
            campaignSummary.destroy();
            campaignSummary = globalScene.add.image(10,200,'entossCampaignSummary').setOrigin(0,0);
        });
        
        var startButton = this.add.image(10,450,'startButton').setOrigin(0,0).setScale(40/59).setInteractive();
        startButton.on('pointerdown', function(pointer){
            if(gameState.faction == "human"){
                globalScene.scene.stop('CampaignScene');
                globalScene.scene.start('HumanMissionBriefingScene');
            }
        });
    }
    upload() {
        
    }
}










class SkirmishScene extends Phaser.Scene {
    constructor() {
		super({ key: 'SkirmishScene' })
	}
    preload(){
        
    }
    create() {
        this.add.image(10,10,'gameTitleImage').setOrigin(0,0).setScale(77/300);
        this.add.image(97,10,'gameTitle').setOrigin(0,0);
        
        var backButton = this.add.image(950,440,'backButton').setOrigin(0,0).setInteractive();
        backButton.on('pointerdown', function(pointer){
            globalScene.scene.stop('SkirmishScene');
            globalScene.scene.start('MenuScene');
        });
        
        var globalScene = this;
        
        var humanButton = this.add.image(10,120,'humanBanner').setOrigin(0,0).setScale(50/153).setInteractive();
        humanButton.on('pointerdown', function(pointer){
            gameState.faction = "human";
        });
        this.add.image(10,175,'humanDescription').setOrigin(0,0).setScale(50/48).setInteractive();
        
        var alienButton = this.add.image(515,120,'alienBanner').setOrigin(0,0).setScale(50/153).setInteractive();
        alienButton.on('pointerdown', function(pointer){
            gameState.faction = "alien";
        });
        this.add.image(515,175,'alienDescription').setOrigin(0,0).setScale(50/48).setInteractive();
        
        var demonButton = this.add.image(10,250,'demonBanner').setOrigin(0,0).setScale(50/153).setInteractive();
        demonButton.on('pointerdown', function(pointer){
            gameState.faction = "demon";
        });
        this.add.image(5,305,'demonDescription').setOrigin(0,0).setScale(50/48).setInteractive();
        
        var entossButton = this.add.image(515,250,'entossBanner').setOrigin(0,0).setScale(50/153).setInteractive();
        entossButton.on('pointerdown', function(pointer){
            gameState.faction = "entoss";
        });
        this.add.image(520,305,'entossDescription').setOrigin(0,0).setScale(50/48).setInteractive();
        
        var startButton = this.add.image(10,450,'startButton').setOrigin(0,0).setScale(40/59).setInteractive();
        startButton.on('pointerdown', function(pointer){
            if(gameState.faction !== "NONE"){
                var NUM = Math.ceil(Math.random()*4);
                if (NUM == 1){
                    gameState.enemyfaction = "human";
                }
                else if (NUM == 2){
                    gameState.enemyfaction = "alien";
                }
                else if (NUM == 3){
                    gameState.enemyfaction = "demon";
                }
                else {
                    gameState.enemyfaction = "entoss";
                }
                globalScene.scene.stop('SkirmishScene');
                globalScene.scene.start('GameScene');
            }
        });
    }
    upload() {
        
    }
}













class GameScene extends Phaser.Scene {
    constructor() {
		super({ key: 'GameScene' })
	}
    preload(){
        
    }
    create() {
        gameState.camera = this.cameras.main;
        gameState.scrollLock = 0;
        
        gameState.globalScene = this;
        gameState.camera = this.cameras.main;
        gameState.input=this.input;
        gameState.mouse=this.input.mousePointer;
        gameState.cursors = this.input.keyboard.createCursorKeys();
        gameState.keys = this.input.keyboard.addKeys('W,S,A,D,R,I,J,K,L,SPACE,SHIFT,ONE,TWO');
        gameState.bullets = this.physics.add.group();
        gameState.team1 = this.physics.add.group();
        gameState.team2 = this.physics.add.group(); 
        
        gameState.createEnvironment = function(scene){
            scene.add.image(0,0,'canyonBg').setOrigin(0,0);
            gameState.select1 = gameState.team1.create(105,200,`${gameState.faction}hq`).setDepth(0);
            gameState.select1.hhealth = 10000;
            gameState.select1.UT = 'hq';
            gameState.select2 = gameState.team2.create(1850,200,`${gameState.enemyfaction}hqred`).setDepth(0).setFlipX(true);
            gameState.select2.hhealth = 10000;
            gameState.select2.UT = 'hq';
            
            gameState.goldProduction = 10;
            gameState.randomTime = 3000;
            
            var selectElement;
            gameState.shopElements = [];
            selectElement = scene.add.image(0,400,'shopBar').setOrigin(0,0).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( 10, 10, `Gold : ${gameState.gold}`, {fill: '#FFFFFF',fontSize: 'bold 25px'}).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( 10, 35, `HQ : ${gameState.select1.hhealth}`, {fill: '#FFFFFF', fontSize: 'bold 15px'}).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( 900, 15, `Enemy HQ : ${gameState.select2.hhealth}`, {fill: '#FFFFFF', fontSize: 'bold 15px'}).setDepth(2);
            gameState.shopElements.push(selectElement);
            
            if(gameState.faction == "human"){
                selectElement = scene.add.image(20,420,gameState.humanTrooper.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.humanTrooper.Tcost){
                       gameState.gold -= gameState.humanTrooper.Tcost; 
                        gameState.createTroop(gameState.globalScene,gameState.humanTrooper.Tsprite,gameState.humanTrooper.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.humanTrooper.Thealth,gameState.humanTrooper.Tdamage,gameState.humanTrooper.TSpeed,gameState.humanTrooper.TattackSpeed,
                    gameState.humanTrooper.Trange,gameState.humanTrooper.TprojectileSpeed,gameState.humanTrooper.TunitType,gameState.humanTrooper.TtargetType,gameState.humanTrooper.TattackType,gameState.humanTrooper.TbulletSprite,gameState.humanTrooper.TsplashRange);
                    }
                });
                selectElement = scene.add.text( 20, 470, `${gameState.humanTrooper.Tcost}g`, {fill: '#OOOOOO', fontSize: '15px'}).setDepth(2);
                gameState.shopElements.push(selectElement);


                selectElement = scene.add.image(90,420,gameState.humanTank.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.humanTank.Tcost){
                       gameState.gold -= gameState.humanTank.Tcost; gameState.createTroop(gameState.globalScene,gameState.humanTank.Tsprite,gameState.humanTank.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.humanTank.Thealth,gameState.humanTank.Tdamage,gameState.humanTank.TSpeed,gameState.humanTank.TattackSpeed,
                    gameState.humanTank.Trange,gameState.humanTank.TprojectileSpeed,gameState.humanTank.TunitType,gameState.humanTank.TtargetType,gameState.humanTank.TattackType,gameState.humanTank.TbulletSprite,gameState.humanTank.TsplashRange);
                    }
                });
                selectElement = scene.add.text( 90, 470, `${gameState.humanTank.Tcost}g`, {fill: '#OOOOOO', fontSize: '15px'}).setDepth(2);
                gameState.shopElements.push(selectElement);


                selectElement = scene.add.image(160,420,gameState.humanBattleCruiser.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.humanBattleCruiser.Tcost){
                       gameState.gold -= gameState.humanBattleCruiser.Tcost; gameState.createTroop(gameState.globalScene,gameState.humanBattleCruiser.Tsprite,gameState.humanBattleCruiser.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.humanBattleCruiser.Thealth,gameState.humanBattleCruiser.Tdamage,gameState.humanBattleCruiser.TSpeed,gameState.humanBattleCruiser.TattackSpeed,
                    gameState.humanBattleCruiser.Trange,gameState.humanBattleCruiser.TprojectileSpeed,gameState.humanBattleCruiser.TunitType,gameState.humanBattleCruiser.TtargetType,gameState.humanBattleCruiser.TattackType,gameState.humanBattleCruiser.TbulletSprite,gameState.humanBattleCruiser.TsplashRange);
                    }
                });
                selectElement = scene.add.text( 160, 470, `${gameState.humanBattleCruiser.Tcost}g`, {fill: '#OOOOOO', fontSize: '15px'}).setDepth(2);
                gameState.shopElements.push(selectElement);
            }
            else if(gameState.faction == "alien"){
                selectElement = scene.add.image(20,420,gameState.alienDrone.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.alienDrone.Tcost){
                       gameState.gold -= gameState.alienDrone.Tcost; 
                        gameState.createTroop(gameState.globalScene,gameState.alienDrone.Tsprite,gameState.alienDrone.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.alienDrone.Thealth,gameState.alienDrone.Tdamage,gameState.alienDrone.TSpeed,gameState.alienDrone.TattackSpeed,
                    gameState.alienDrone.Trange,gameState.alienDrone.TprojectileSpeed,gameState.alienDrone.TunitType,gameState.alienDrone.TtargetType,gameState.alienDrone.TattackType,gameState.alienDrone.TbulletSprite,gameState.alienDrone.TsplashRange);
                    }
                });
                selectElement = scene.add.text( 20, 470, `${gameState.alienDrone.Tcost}g`, {fill: '#OOOOOO', fontSize: '15px'}).setDepth(2);
                gameState.shopElements.push(selectElement);

                selectElement = scene.add.image(90,420,gameState.alienWalker.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.alienWalker.Tcost){
                       gameState.gold -= gameState.alienWalker.Tcost; gameState.createTroop(gameState.globalScene,gameState.alienWalker.Tsprite,gameState.alienWalker.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.alienWalker.Thealth,gameState.alienWalker.Tdamage,gameState.alienWalker.TSpeed,gameState.alienWalker.TattackSpeed,
                    gameState.alienWalker.Trange,gameState.alienWalker.TprojectileSpeed,gameState.alienWalker.TunitType,gameState.alienWalker.TtargetType,gameState.alienWalker.TattackType,gameState.alienWalker.TbulletSprite,gameState.alienWalker.TsplashRange);
                    }
                });
                selectElement = scene.add.text( 90, 470, `${gameState.alienWalker.Tcost}g`, {fill: '#OOOOOO', fontSize: '15px'}).setDepth(2);
                gameState.shopElements.push(selectElement);

                selectElement = scene.add.image(160,420,gameState.alienMegaWalker.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.alienMegaWalker.Tcost){
                       gameState.gold -= gameState.alienMegaWalker.Tcost; gameState.createTroop(gameState.globalScene,gameState.alienMegaWalker.Tsprite,gameState.alienMegaWalker.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.alienMegaWalker.Thealth,gameState.alienMegaWalker.Tdamage,gameState.alienMegaWalker.TSpeed,gameState.alienMegaWalker.TattackSpeed,
                    gameState.alienMegaWalker.Trange,gameState.alienMegaWalker.TprojectileSpeed,gameState.alienMegaWalker.TunitType,gameState.alienMegaWalker.TtargetType,gameState.alienMegaWalker.TattackType,gameState.alienMegaWalker.TbulletSprite,gameState.alienMegaWalker.TsplashRange);
                    }
                });
                selectElement = scene.add.text( 160, 470, `${gameState.alienMegaWalker.Tcost}g`, {fill: '#OOOOOO', fontSize: '15px'}).setDepth(2);
                gameState.shopElements.push(selectElement);
                
                selectElement = scene.add.image(230,420,gameState.alienPlasmaShip.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.alienPlasmaShip.Tcost){
                       gameState.gold -= gameState.alienPlasmaShip.Tcost; gameState.createTroop(gameState.globalScene,gameState.alienPlasmaShip.Tsprite,gameState.alienPlasmaShip.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.alienPlasmaShip.Thealth,gameState.alienPlasmaShip.Tdamage,gameState.alienPlasmaShip.TSpeed,gameState.alienPlasmaShip.TattackSpeed,
                    gameState.alienPlasmaShip.Trange,gameState.alienPlasmaShip.TprojectileSpeed,gameState.alienPlasmaShip.TunitType,gameState.alienPlasmaShip.TtargetType,gameState.alienPlasmaShip.TattackType,gameState.alienPlasmaShip.TbulletSprite,gameState.alienPlasmaShip.TsplashRange);
                    }
                });
                selectElement = scene.add.text( 230, 470, `${gameState.alienPlasmaShip.Tcost}g`, {fill: '#OOOOOO', fontSize: '15px'}).setDepth(2);
                gameState.shopElements.push(selectElement);
            }
            else if(gameState.faction == "demon"){
                selectElement = scene.add.image(20,420,gameState.demonCrawler.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.demonCrawler.Tcost){
                       gameState.gold -= gameState.demonCrawler.Tcost; 
                        gameState.createTroop(gameState.globalScene,gameState.demonCrawler.Tsprite,gameState.demonCrawler.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.demonCrawler.Thealth,gameState.demonCrawler.Tdamage,gameState.demonCrawler.TSpeed,gameState.demonCrawler.TattackSpeed,
                    gameState.demonCrawler.Trange,gameState.demonCrawler.TprojectileSpeed,gameState.demonCrawler.TunitType,gameState.demonCrawler.TtargetType,gameState.demonCrawler.TattackType,gameState.demonCrawler.TbulletSprite,gameState.demonCrawler.TsplashRange);
                    }
                });
                selectElement = scene.add.text( 20, 470, `${gameState.demonCrawler.Tcost}g`, {fill: '#OOOOOO', fontSize: '15px'}).setDepth(2);
                gameState.shopElements.push(selectElement);


                selectElement = scene.add.image(90,420,gameState.demonFlarer.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.demonFlarer.Tcost){
                       gameState.gold -= gameState.demonFlarer.Tcost; gameState.createTroop(gameState.globalScene,gameState.demonFlarer.Tsprite,gameState.demonFlarer.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.demonFlarer.Thealth,gameState.demonFlarer.Tdamage,gameState.demonFlarer.TSpeed,gameState.demonFlarer.TattackSpeed,
                    gameState.demonFlarer.Trange,gameState.demonFlarer.TprojectileSpeed,gameState.demonFlarer.TunitType,gameState.demonFlarer.TtargetType,gameState.demonFlarer.TattackType,gameState.demonFlarer.TbulletSprite,gameState.demonFlarer.TsplashRange);
                    }
                });
                selectElement = scene.add.text( 90, 470, `${gameState.demonFlarer.Tcost}g`, {fill: '#OOOOOO', fontSize: '15px'}).setDepth(2);
                gameState.shopElements.push(selectElement);

                selectElement = scene.add.image(160,420,gameState.demonFly.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.demonFly.Tcost){
                       gameState.gold -= gameState.demonFly.Tcost; gameState.createTroop(gameState.globalScene,gameState.demonFly.Tsprite,gameState.demonFly.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.demonFly.Thealth,gameState.demonFly.Tdamage,gameState.demonFly.TSpeed,gameState.demonFly.TattackSpeed,
                    gameState.demonFly.Trange,gameState.demonFly.TprojectileSpeed,gameState.demonFly.TunitType,gameState.demonFly.TtargetType,gameState.demonFly.TattackType,gameState.demonFly.TbulletSprite,gameState.demonFly.TsplashRange);
                    }
                });
                selectElement = scene.add.text( 160, 470, `${gameState.demonFly.Tcost}g`, {fill: '#OOOOOO', fontSize: '15px'}).setDepth(2);
                gameState.shopElements.push(selectElement);
            }
            else if(gameState.faction == "entoss"){
                selectElement = scene.add.image(20,420,gameState.entossSpitter.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.entossSpitter.Tcost){
                       gameState.gold -= gameState.entossSpitter.Tcost; 
                        gameState.createTroop(gameState.globalScene,gameState.entossSpitter.Tsprite,gameState.entossSpitter.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.entossSpitter.Thealth,gameState.entossSpitter.Tdamage,gameState.entossSpitter.TSpeed,gameState.entossSpitter.TattackSpeed,
                    gameState.entossSpitter.Trange,gameState.entossSpitter.TprojectileSpeed,gameState.entossSpitter.TunitType,gameState.entossSpitter.TtargetType,gameState.entossSpitter.TattackType,gameState.entossSpitter.TbulletSprite,gameState.entossSpitter.TsplashRange);
                    }
                });
                selectElement = scene.add.text( 20, 470, `${gameState.entossSpitter.Tcost}g`, {fill: '#OOOOOO', fontSize: '15px'}).setDepth(2);
                gameState.shopElements.push(selectElement);
                
                selectElement = scene.add.image(90,420,gameState.entossGiant.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayHeight);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.entossGiant.Tcost){
                       gameState.gold -= gameState.entossGiant.Tcost; gameState.createTroop(gameState.globalScene,gameState.entossGiant.Tsprite,gameState.entossGiant.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.entossGiant.Thealth,gameState.entossGiant.Tdamage,gameState.entossGiant.TSpeed,gameState.entossGiant.TattackSpeed,
                    gameState.entossGiant.Trange,gameState.entossGiant.TprojectileSpeed,gameState.entossGiant.TunitType,gameState.entossGiant.TtargetType,gameState.entossGiant.TattackType,gameState.entossGiant.TbulletSprite,gameState.entossGiant.TsplashRange);
                    }
                });
                selectElement = scene.add.text( 90, 470, `${gameState.entossGiant.Tcost}g`, {fill: '#OOOOOO', fontSize: '15px'}).setDepth(2);
                gameState.shopElements.push(selectElement);
                
                selectElement = scene.add.image(160,420,gameState.entossBird.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayHeight);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.entossBird.Tcost){
                       gameState.gold -= gameState.entossBird.Tcost; gameState.createTroop(gameState.globalScene,gameState.entossBird.Tsprite,gameState.entossBird.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.entossBird.Thealth,gameState.entossBird.Tdamage,gameState.entossBird.TSpeed,gameState.entossBird.TattackSpeed,
                    gameState.entossBird.Trange,gameState.entossBird.TprojectileSpeed,gameState.entossBird.TunitType,gameState.entossBird.TtargetType,gameState.entossBird.TattackType,gameState.entossBird.TbulletSprite,gameState.entossBird.TsplashRange);
                    }
                });
                selectElement = scene.add.text( 160, 470, `${gameState.entossBird.Tcost}g`, {fill: '#OOOOOO', fontSize: '15px'}).setDepth(2);
                gameState.shopElements.push(selectElement);
            }
        }
        gameState.invOpen = false;
        gameState.gold = 10;
        
        
        
        gameState.createEnvironment(this);
        
        gameState.team1troops = this.physics.add.group();
        gameState.team1troops.getChildren().forEach(troop => {
            
        });
        gameState.bulletTime = function(bullet,scene,Ttarget,bulletSpeed,damage,enemies,splashRange){
            var alive = 0;
            scene.physics.add.overlap(bullet, Ttarget,(robot,ammo)=>{
                var array = [];
                
                for (var i = 0; i < gameState.team2.getChildren().length; i++){
                    var dist = Phaser.Math.Distance.BetweenPoints(gameState.team2.getChildren()[i], bullet);
                    console.log(splashRange);
                    if(dist < splashRange && gameState.team2.getChildren()[i].UT !== "air"){
                        array.push(enemies[i]);
                    }
                }
                for (var i = 0; i < array.length; i++){
                    array[i].hhealth -= damage;
                    if(array[i].hhealth <= 0){
                        array[i].destroy();
                    }
                }
                bullet.destroy();
                alive = 1;
                Ttarget.hhealth -= damage;
                if(Ttarget.hhealth <= 0){
                    Ttarget.destroy();
                }
            });
            var timer = scene.time.addEvent({
                delay: 1,
                callback: ()=>{
                    if(Ttarget.hhealth <= 0){
                        timer.destroy();
                        bullet.destroy();
                        alive = 1;
                    }
                    else {
                        if(alive == 0){
                            scene.physics.moveTo(bullet,Ttarget.x, Ttarget.y,bulletSpeed);
                        }
                        else {
                            timer.destroy();
                            alive = 1;
                        }
                    }
                },  
                startAt: 0,
                timeScale: 1,
                repeat: -1
            }); 
        }
        gameState.readyFire = true;
        var preset = false;
        
        gameState.createEnemy = function(scene,sprite,xloc,yloc,speed,maxHealth){
            gameState.team2.create(xloc,yloc,`${sprite}`);
            gameState.first = gameState.team2.getChildren();
            var selected = gameState.first[gameState.team2.getChildren().length-1];
            selected.setVelocityX(-speed);
            selected.health = maxHealth;
        }
        
        function troopBehavior(scene,select,team,enemies,health,speed,ranges,attSpeed,PS,UT,TT,AT,damage,bulletSprite,splashRange){
            var targeted = false;
            var target = 0;
            var timer = scene.time.addEvent({
                delay: attSpeed,
                callback: ()=>{
                    if(select.hhealth > 0){
                        targeted = false;
                        if(target !== 0){
                            if(targeted == false){
                                var selected = gameState.bullets.create(select.x,select.y,bulletSprite);
                                gameState.bulletTime(selected,scene,target,PS,damage,enemies,splashRange);
                                gameState.angle=Phaser.Math.Angle.Between(select.x,select.y,target.x,target.y,30);
                                selected.setRotation(gameState.angle); 
                                targeted = true;
                            }
                        }
                    }
                    else {
                        timer.destroy();
                    }
                },  
                startAt: 0,
                timeScale: 1,
                repeat: -1
            }); 
            var timer2 = scene.time.addEvent({
                delay: 1,
                callback: ()=>{
                    if(select.hhealth > 0){
                        for (var i = 0; i < enemies.length; i++){
                            if(target == 0){
                                var dist = Phaser.Math.Distance.BetweenPoints(enemies[i], select);
                            }
                            else {
                                var dist = Phaser.Math.Distance.BetweenPoints(target, select);
                            }

                            if(dist < ranges && target == 0 && TT == 'ground&air' || dist < ranges && target == 0 && enemies[i].UT == 'hq'){
                                target = enemies[i];
                            }
                            else if(dist < ranges && target == 0 && TT == 'ground' && enemies[i].UT == 'ground'){
                                target = enemies[i];
                            }
                            else if(dist < ranges && target == 0 && TT == 'air' && enemies[i].UT == 'air'){
                                target = enemies[i];
                            }
                            else if(dist > ranges || target.hhealth <= 0){
                                target = 0;
                            }
                        }
                        if(target == 0){
                            if(team == 1){
                                select.setVelocityX(speed);
                            }
                            else if (team == 2){
                                select.setVelocityX(-speed);
                            }
                            if(team == 1){
                                gameState.angle=Phaser.Math.Angle.Between(select.x,select.y,select.x+1,select.y,30);
                                select.setRotation(gameState.angle);
                            }
                            else if (team == 2) {
                                gameState.angle=Phaser.Math.Angle.Between(select.x,select.y,select.x-1,select.y,30);
                                select.setRotation(gameState.angle);
                            }
                        }
                        else {
                            select.setVelocityX(0);
                            gameState.angle=Phaser.Math.Angle.Between(select.x,select.y,target.x,target.y,30);
                            select.setRotation(gameState.angle);
                        }
                    }
                    else {
                        timer.destroy();
                    }
                },  
                startAt: 0,
                timeScale: 1,
                repeat: -1
            }); 
        }
        gameState.createTroop = function(scene,sprite,depth,team,xloc,yloc,health,damage,speed,attackSpeed,range,projectileSpeed,unitType,targetType,attackType,bulletSprite,splashRange){
            if(team == 1){
                gameState.team1.create(xloc,yloc,`${sprite}`).setDepth(depth);
                gameState.first = gameState.team1.getChildren();
                gameState.enemies = gameState.team2.getChildren();
                var selected = gameState.first[gameState.team1.getChildren().length-1];
                selected.hhealth = health;
                selected.UT = unitType;
                troopBehavior(scene,selected,1,gameState.enemies,health,speed,range,attackSpeed,projectileSpeed,unitType,targetType,attackType,damage,bulletSprite,splashRange);
            }
            else if(team == 2){
                gameState.team2.create(xloc,yloc,`${sprite}`).setDepth(depth);
                gameState.first = gameState.team2.getChildren();
                gameState.enemies = gameState.team1.getChildren();
                var selected = gameState.first[gameState.team2.getChildren().length-1];
                selected.hhealth = health;
                selected.UT = unitType; 
                troopBehavior(scene,selected,2,gameState.enemies,health,speed,range,attackSpeed,projectileSpeed,unitType,targetType,attackType,damage,bulletSprite,splashRange);
            }
        }
        
        var enemyTroopsTimer = this.time.addEvent({
            delay: (Math.ceil(Math.random()*5000)+10000),
            callback: ()=>{ 
                var random = 0;
                var troops = gameState.team1.getChildren().length;
                var random = Math.ceil(Math.random()*2);
                if(gameState.enemyfaction == 'alien') {
                   if(troops >= 3 && troops <= 10){
                       console.log(troops);
                       random = Math.ceil(Math.random()*2);
                       if(random == 1){
                           for (var i = 0; i < 4 ; i++) {
                               gameState.createTroop(gameState.globalScene,gameState.alienDrone.Tsprite+'red',gameState.alienDrone.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.alienDrone.Thealth,gameState.alienDrone.Tdamage,gameState.alienDrone.TSpeed,gameState.alienDrone.TattackSpeed, gameState.alienDrone.Trange, gameState.alienDrone.TprojectileSpeed, gameState.alienDrone.TunitType,gameState.alienDrone.TtargetType,gameState.alienDrone.TattackType,gameState.alienDrone.TbulletSprite,gameState.alienDrone.TsplashRange);
                           }
                       }
                       else if(random == 2){
                           for (var i = 0; i < 3 ; i++) {
                               gameState.createTroop(gameState.globalScene,gameState.alienDrone.Tsprite+'red',gameState.alienDrone.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.alienDrone.Thealth,gameState.alienDrone.Tdamage,gameState.alienDrone.TSpeed,gameState.alienDrone.TattackSpeed,gameState.alienDrone.Trange,gameState.alienDrone.TprojectileSpeed,gameState.alienDrone.TunitType,gameState.alienDrone.TtargetType,gameState.alienDrone.TattackType,gameState.alienDrone.TbulletSprite,gameState.alienDrone.TsplashRange);
                           }
                       }
                    }
                    else if(troops >= 11 && troops <= 19){
                        random = Math.ceil(Math.random()*3);
                        if(random == 1){
                           for (var i = 0; i < 10 ; i++) {
                               gameState.createTroop(gameState.globalScene,gameState.alienDrone.Tsprite+'red',gameState.alienDrone.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.alienDrone.Thealth,gameState.alienDrone.Tdamage,gameState.alienDrone.TSpeed,gameState.alienDrone.TattackSpeed, gameState.alienDrone.Trange, gameState.alienDrone.TprojectileSpeed, gameState.alienDrone.TunitType,gameState.alienDrone.TtargetType,gameState.alienDrone.TattackType,gameState.alienDrone.TbulletSprite,gameState.alienDrone.TsplashRange);
                           }
                            for (var i = 0; i < 5 ; i++) {
                               gameState.createTroop(gameState.globalScene,gameState.alienWalker.Tsprite+'red',gameState.alienWalker.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.alienWalker.Thealth,gameState.alienWalker.Tdamage,gameState.alienWalker.TSpeed,gameState.alienWalker.TattackSpeed, gameState.alienWalker.Trange, gameState.alienWalker.TprojectileSpeed, gameState.alienWalker.TunitType,gameState.alienWalker.TtargetType,gameState.alienWalker.TattackType,gameState.alienWalker.TbulletSprite,gameState.alienWalker.TsplashRange);
                           }
                       }
                       else if(random == 2){
                           for (var i = 0; i < 12 ; i++) {
                               gameState.createTroop(gameState.globalScene,gameState.alienWalker.Tsprite+'red',gameState.alienWalker.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.alienWalker.Thealth,gameState.alienWalker.Tdamage,gameState.alienWalker.TSpeed,gameState.alienWalker.TattackSpeed, gameState.alienWalker.Trange, gameState.alienWalker.TprojectileSpeed, gameState.alienWalker.TunitType,gameState.alienWalker.TtargetType,gameState.alienWalker.TattackType,gameState.alienWalker.TbulletSprite,gameState.alienWalker.TsplashRange);
                           }
                       }
                        else if(random == 3){
                           for (var i = 0; i < 5 ; i++) {
                               gameState.createTroop(gameState.globalScene,gameState.alienDrone.Tsprite+'red',gameState.alienDrone.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.alienDrone.Thealth,gameState.alienDrone.Tdamage,gameState.alienDrone.TSpeed,gameState.alienDrone.TattackSpeed, gameState.alienDrone.Trange, gameState.alienDrone.TprojectileSpeed, gameState.alienDrone.TunitType,gameState.alienDrone.TtargetType,gameState.alienDrone.TattackType,gameState.alienDrone.TbulletSprite,gameState.alienDrone.TsplashRange);
                           }
                            gameState.createTroop(gameState.globalScene,gameState.alienMegaWalker.Tsprite+'red',gameState.alienMegaWalker.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.alienMegaWalker.Thealth,gameState.alienMegaWalker.Tdamage,gameState.alienMegaWalker.TSpeed,gameState.alienMegaWalker.TattackSpeed,gameState.alienMegaWalker.Trange,gameState.alienMegaWalker.TprojectileSpeed,gameState.alienMegaWalker.TunitType,gameState.alienMegaWalker.TtargetType,gameState.alienMegaWalker.TattackType,gameState.alienMegaWalker.TbulletSprite,gameState.alienMegaWalker.TsplashRange);
                       }
                    }
                    else if(troops >= 20){
                       random = Math.ceil(Math.random()*4);
                       if(random == 1){
                           for (var i = 0; i < 25 ; i++) {
                               gameState.createTroop(gameState.globalScene,gameState.alienWalker.Tsprite+'red',gameState.alienWalker.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.alienWalker.Thealth,gameState.alienWalker.Tdamage,gameState.alienWalker.TSpeed,gameState.alienWalker.TattackSpeed, gameState.alienWalker.Trange, gameState.alienWalker.TprojectileSpeed, gameState.alienWalker.TunitType,gameState.alienWalker.TtargetType,gameState.alienWalker.TattackType,gameState.alienWalker.TbulletSprite,gameState.alienWalker.TsplashRange);
                           }
                       }
                       else if(random == 2){
                           for (var i = 0; i < 10 ; i++) {
                               gameState.createTroop(gameState.globalScene,gameState.alienDrone.Tsprite+'red',gameState.alienDrone.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.alienDrone.Thealth,gameState.alienDrone.Tdamage,gameState.alienDrone.TSpeed,gameState.alienDrone.TattackSpeed, gameState.alienDrone.Trange, gameState.alienDrone.TprojectileSpeed, gameState.alienDrone.TunitType,gameState.alienDrone.TtargetType,gameState.alienDrone.TattackType,gameState.alienDrone.TbulletSprite,gameState.alienDrone.TsplashRange);
                           }
                           for (var i = 0; i < 10 ; i++) {
                               gameState.createTroop(gameState.globalScene,gameState.alienWalker.Tsprite+'red',gameState.alienWalker.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.alienWalker.Thealth,gameState.alienWalker.Tdamage,gameState.alienWalker.TSpeed,gameState.alienWalker.TattackSpeed, gameState.alienWalker.Trange, gameState.alienWalker.TprojectileSpeed, gameState.alienWalker.TunitType,gameState.alienWalker.TtargetType,gameState.alienWalker.TattackType,gameState.alienWalker.TbulletSprite,gameState.alienWalker.TsplashRange);
                           }
                           gameState.createTroop(gameState.globalScene,gameState.alienMegaWalker.Tsprite+'red',gameState.alienMegaWalker.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.alienMegaWalker.Thealth,gameState.alienMegaWalker.Tdamage,gameState.alienMegaWalker.TSpeed,gameState.alienMegaWalker.TattackSpeed,gameState.alienMegaWalker.Trange,gameState.alienMegaWalker.TprojectileSpeed,gameState.alienMegaWalker.TunitType,gameState.alienMegaWalker.TtargetType,gameState.alienMegaWalker.TattackType,gameState.alienMegaWalker.TbulletSprite,gameState.alienMegaWalker.TsplashRange);
                       } 
                        else if(random == 3){
                           for (var i = 0; i < 3 ; i++) {
                               gameState.createTroop(gameState.globalScene,gameState.alienMegaWalker.Tsprite+'red',gameState.alienMegaWalker.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.alienMegaWalker.Thealth,gameState.alienMegaWalker.Tdamage,gameState.alienMegaWalker.TSpeed,gameState.alienMegaWalker.TattackSpeed, gameState.alienMegaWalker.Trange, gameState.alienMegaWalker.TprojectileSpeed, gameState.alienMegaWalker.TunitType,gameState.alienMegaWalker.TtargetType,gameState.alienMegaWalker.TattackType,gameState.alienMegaWalker.TbulletSprite,gameState.alienMegaWalker.TsplashRange);
                           }
                       }
                        else if(random == 4){
                           for (var i = 0; i < 5 ; i++) {
                               gameState.createTroop(gameState.globalScene,gameState.alienPlasmaShip.Tsprite+'red',gameState.alienPlasmaShip.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.alienPlasmaShip.Thealth,gameState.alienPlasmaShip.Tdamage,gameState.alienPlasmaShip.TSpeed,gameState.alienPlasmaShip.TattackSpeed, gameState.alienPlasmaShip.Trange, gameState.alienPlasmaShip.TprojectileSpeed, gameState.alienPlasmaShip.TunitType,gameState.alienPlasmaShip.TtargetType,gameState.alienPlasmaShip.TattackType,gameState.alienPlasmaShip.TbulletSprite,gameState.alienPlasmaShip.TsplashRange);
                           }
                       }
                    }
                    else {
                        random = Math.ceil(Math.random()*2);
                       if(random == 1){
                           for (var i = 0; i < 2 ; i++) {
                               gameState.createTroop(gameState.globalScene,gameState.alienDrone.Tsprite+'red',gameState.alienDrone.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.alienDrone.Thealth,gameState.alienDrone.Tdamage,gameState.alienDrone.TSpeed,gameState.alienDrone.TattackSpeed, gameState.alienDrone.Trange, gameState.alienDrone.TprojectileSpeed, gameState.alienDrone.TunitType,gameState.alienDrone.TtargetType,gameState.alienDrone.TattackType,gameState.alienDrone.TbulletSprite,gameState.alienDrone.TsplashRange);
                           }
                       }
                       else if(random == 2){
                           gameState.createTroop(gameState.globalScene,gameState.alienDrone.Tsprite+'red',gameState.alienDrone.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.alienDrone.Thealth,gameState.alienDrone.Tdamage,gameState.alienDrone.TSpeed,gameState.alienDrone.TattackSpeed,gameState.alienDrone.Trange,gameState.alienDrone.TprojectileSpeed,gameState.alienDrone.TunitType,gameState.alienDrone.TtargetType,gameState.alienDrone.TattackType,gameState.alienDrone.TbulletSprite,gameState.alienDrone.TsplashRange);
                       }
                    }
                }
                else if(gameState.enemyfaction == 'human') {
                   if(random >= 1 && random <= 50){ gameState.createTroop(gameState.globalScene,gameState.humanTrooper.Tsprite+'red',gameState.humanTrooper.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.humanTrooper.Thealth,gameState.humanTrooper.Tdamage,gameState.humanTrooper.TSpeed,gameState.humanTrooper.TattackSpeed,
                    gameState.humanTrooper.Trange,gameState.humanTrooper.TprojectileSpeed,gameState.humanTrooper.TunitType,gameState.humanTrooper.TtargetType,gameState.humanTrooper.TattackType,gameState.humanTrooper.TbulletSprite,gameState.humanTrooper.TsplashRange);
                    }
                    else if(random >= 51 && random <= 63){
                        gameState.createTroop(gameState.globalScene,gameState.humanTank.Tsprite+'red',gameState.humanTank.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.humanTank.Thealth,gameState.humanTank.Tdamage,gameState.humanTank.TSpeed,gameState.humanTank.TattackSpeed,
                    gameState.humanTank.Trange,gameState.humanTank.TprojectileSpeed,gameState.humanTank.TunitType,gameState.humanTank.TtargetType,gameState.humanTank.TattackType,gameState.humanTank.TbulletSprite,gameState.humanTank.TsplashRange);
                    }
                    else if(random >= 64 && random <= 65){
                        gameState.createTroop(gameState.globalScene,gameState.humanBattleCruiser.Tsprite+'red',gameState.humanBattleCruiser.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.humanBattleCruiser.Thealth,gameState.humanBattleCruiser.Tdamage,gameState.humanBattleCruiser.TSpeed,gameState.humanBattleCruiser.TattackSpeed,gameState.humanBattleCruiser.Trange,gameState.humanBattleCruiser.TprojectileSpeed,gameState.humanBattleCruiser.TunitType,gameState.humanBattleCruiser.TtargetType,gameState.humanBattleCruiser.TattackType,gameState.humanBattleCruiser.TbulletSprite,gameState.humanBattleCruiser.TsplashRange);
                    }
                }
                else if(gameState.enemyfaction == 'demon') {
                   if(random >= 1 && random <= 50){ gameState.createTroop(gameState.globalScene,gameState.demonCrawler.Tsprite+'red',gameState.demonCrawler.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.demonCrawler.Thealth,gameState.demonCrawler.Tdamage,gameState.demonCrawler.TSpeed,gameState.demonCrawler.TattackSpeed,
                    gameState.demonCrawler.Trange,gameState.demonCrawler.TprojectileSpeed,gameState.demonCrawler.TunitType,gameState.demonCrawler.TtargetType,gameState.demonCrawler.TattackType,gameState.demonCrawler.TbulletSprite,gameState.demonCrawler.TsplashRange);
                    }
                    else if(random >= 51 && random <= 63){
                        gameState.createTroop(gameState.globalScene,gameState.demonFlarer.Tsprite+'red',gameState.demonFlarer.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.demonFlarer.Thealth,gameState.demonFlarer.Tdamage,gameState.demonFlarer.TSpeed,gameState.demonFlarer.TattackSpeed,
                    gameState.demonFlarer.Trange,gameState.demonFlarer.TprojectileSpeed,gameState.demonFlarer.TunitType,gameState.demonFlarer.TtargetType,gameState.demonFlarer.TattackType,gameState.demonFlarer.TbulletSprite,gameState.demonFlarer.TsplashRange);
                    }
                    else if(random >= 64 && random <= 65){
                        gameState.createTroop(gameState.globalScene,gameState.demonFly.Tsprite+'red',gameState.demonFly.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.demonFly.Thealth,gameState.demonFly.Tdamage,gameState.demonFly.TSpeed,gameState.demonFly.TattackSpeed,
                    gameState.demonFly.Trange,gameState.demonFly.TprojectileSpeed,gameState.demonFly.TunitType,gameState.demonFly.TtargetType,gameState.demonFly.TattackType,gameState.demonFly.TbulletSprite,gameState.demonFly.TsplashRange);
                    }
                }
                else if(gameState.enemyfaction == 'entoss') {
                   if(random >= 1 && random <= 50){ gameState.createTroop(gameState.globalScene,gameState.entossSpitter.Tsprite+'red',gameState.entossSpitter.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.entossSpitter.Thealth,gameState.entossSpitter.Tdamage,gameState.entossSpitter.TSpeed,gameState.entossSpitter.TattackSpeed,
                    gameState.entossSpitter.Trange,gameState.entossSpitter.TprojectileSpeed,gameState.entossSpitter.TunitType,gameState.entossSpitter.TtargetType,gameState.entossSpitter.TattackType,gameState.entossSpitter.TbulletSprite,gameState.entossSpitter.TsplashRange);
                    }
                    else if(random >= 51 && random <= 63){
                        gameState.createTroop(gameState.globalScene,gameState.entossGiant.Tsprite+'red',gameState.entossGiant.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.entossGiant.Thealth,gameState.entossGiant.Tdamage,gameState.entossGiant.TSpeed,gameState.entossGiant.TattackSpeed,
                    gameState.entossGiant.Trange,gameState.entossGiant.TprojectileSpeed,gameState.entossGiant.TunitType,gameState.entossGiant.TtargetType,gameState.entossGiant.TattackType,gameState.entossGiant.TbulletSprite,gameState.entossGiant.TsplashRange);
                    }
                    else if(random >= 64 && random <= 65){
                        
                    }
                }
            
            },  
            startAt: 0,
            timeScale: 1,
            repeat: -1
        }); 
        
        this.time.addEvent({
            delay: 1000,
            callback: ()=>{
                gameState.gold += gameState.goldProduction;
            },  
            startAt: 0,
            timeScale: 1,
            repeat: -1
        }); 
        this.time.addEvent({
            delay: 60000,
            callback: ()=>{
                gameState.goldProduction += 5;
                /*gameState.randomTime *= 0.75;
                enemyTroopsTimer.delay = (Math.ceil(Math.random()*gameState.randomTime)+gameState.randomTime);*/
            },  
            startAt: 0,
            timeScale: 1,
            repeat: -1
        }); 
        
        this.input.on('pointerdown', function(pointer){
                gameState.createTroop(gameState.globalScene,gameState.humanTrooper.Tsprite,gameState.humanTrooper.Tdepth,1,gameState.input.x,gameState.input.y,gameState.humanTrooper.Thealth,gameState.humanTrooper.Tdamage,gameState.humanTrooper.TSpeed,gameState.humanTrooper.TattackSpeed,gameState.humanTrooper.Trange,gameState.humanTrooper.TprojectileSpeed,gameState.humanTrooper.TunitType,gameState.humanTrooper.TtargetType,gameState.humanTrooper.TattackType,gameState.humanTrooper.TbulletSprite,gameState.humanTrooper.TsplashRange);
        });
	}
    update(){
        gameState.input=this.input;
        gameState.shopElements[1].setText(`Gold : ${gameState.gold}`);
        gameState.shopElements[2].setText(`HQ : ${Math.ceil(gameState.select1.hhealth)}`);
        gameState.shopElements[3].setText(`Enemy HQ : ${Math.ceil(gameState.select2.hhealth)}`);
        if(gameState.input.x <= 10 && gameState.scrollLock > 0){
            gameState.camera.x += 10;
            for(var i = 0; i <gameState.shopElements.length ; i++){
                gameState.shopElements[i].x -= 10;
            }
            gameState.scrollLock --;
        }
        else if(gameState.input.x >= window.innerWidth -330 && gameState.scrollLock < 90){
            gameState.camera.x -= 10;
            for(var i = 0; i <gameState.shopElements.length ; i++){
                gameState.shopElements[i].x += 10;
            }
            gameState.scrollLock ++;
        }
        
        if(gameState.select1.hhealth <= 0 || gameState.select2.hhealth <= 0){
            this.scene.stop('GameScene');
            this.scene.start('MenuScene');
        }
    }
}
