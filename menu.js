class MenuScene extends Phaser.Scene {
    constructor() {
		super({ key: 'MenuScene' })
	}
    preload(){
        this.load.image('gameTitle','heroimages/gameTitle.png');
        this.load.image('gameTitleImage','heroimages/gameTitleImage.png');
        this.load.image('skirmishButton','heroimages/skirmishButton.png');
        this.load.image('startButton','heroimages/startButton.png');
        
        this.load.image('alienBanner','heroimages/alienBanner.png');
        this.load.image('humanBanner','heroimages/humanBanner.png');
        this.load.image('demonBanner','heroimages/demonBanner.png');
        this.load.image('entossBanner','heroimages/entossBanner.png');
        this.load.image('alienDescription','heroimages/alienDescription.png');
        this.load.image('humanDescription','heroimages/humanDescription.png');
        this.load.image('demonDescription','heroimages/demonDescription.png');
        this.load.image('entossDescription','heroimages/entossDescription.png');
        
        this.load.image('bullet','heroimages/bullet.png');
        this.load.image('shopBar','heroimages/shopBar.png');
        
        this.load.image('alienhq','heroimages/alienhq.png');
        this.load.image('aliendrone','heroimages/aliendrone.png');
        this.load.image('alienwalker','heroimages/alienwalker.png');
        this.load.image('alienmegawalker','heroimages/alienmegawalker.png');
        
        this.load.image('alienhqred','heroimages/alienhqred.png');
        this.load.image('aliendronered','heroimages/aliendronered.png');
        this.load.image('alienwalkerred','heroimages/alienwalkerred.png');
        this.load.image('alienmegawalkerred','heroimages/alienmegawalkerred.png');
        
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
        
        this.load.image('bg','heroimages/bg.png');
        this.load.image('soldier76','heroimages/soldier76.png');
        this.load.image('bullet1','heroimages/bullet1.png');
        this.load.image('bullet2','heroimages/bullet2.png');
        this.load.image('bullet3','heroimages/bullet3.png');
        this.load.image('bullet4','heroimages/bullet4.png');
        this.load.image('bullet5','heroimages/bullet5.png');
        this.load.image('bullet6','heroimages/bullet6.png');
        this.load.image('bullet7','heroimages/bullet7.png');
        
        this.load.image('robot1','heroimages/robot1.png');
        this.load.image('inventoryButton','heroimages/inventoryButton.png');
        this.load.image('invBg','heroimages/invBg.png');
    }
    create() {
        gameState.faction = "NONE";
        this.add.image(10,10,'gameTitleImage').setOrigin(0,0).setScale(77/300);
        this.add.image(97,10,'gameTitle').setOrigin(0,0);
         
        var globalScene = this;
        
        var skirmishButton = this.add.image(10,120,'skirmishButton').setOrigin(0,0).setInteractive();
        skirmishButton.on('pointerdown', function(pointer){
            globalScene.scene.stop('MenuScene');
            globalScene.scene.start('SkirmishScene');
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
            gameState.faction = "human";
        });
        this.add.image(520,305,'entossDescription').setOrigin(0,0).setScale(50/48).setInteractive();
        
        var startButton = this.add.image(10,450,'startButton').setOrigin(0,0).setScale(40/59).setInteractive();
        startButton.on('pointerdown', function(pointer){
            if(gameState.faction !== "NONE"){
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
        
        gameState.enemyfaction = "alien";
        
        gameState.createEnvironment = function(scene){
            gameState.select1 = gameState.team1.create(105,200,`${gameState.faction}hq`).setDepth(0);
            gameState.select1.hhealth = 10000;
            gameState.select1.UT = 'ground';
            gameState.select2 = gameState.team2.create(1850,200,`${gameState.enemyfaction}hqred`).setDepth(0).setFlipX(true);
            gameState.select2.hhealth = 10000;
            gameState.select2.UT = 'ground';
            
            gameState.goldProduction = 10;
            gameState.randomTime = 3000;
            
            var selectElement;
            gameState.shopElements = [];
            selectElement = scene.add.image(0,400,'shopBar').setOrigin(0,0).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( 10, 10, `Gold : ${gameState.gold}`, {fill: '#OOOOOO', fontSize: '25px'}).setDepth(2);
            gameState.shopElements.push(selectElement);
            
            if(gameState.faction == "human"){
                selectElement = scene.add.image(20,420,gameState.humanTrooper.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.humanTrooper.Tcost){
                       gameState.gold -= gameState.humanTrooper.Tcost; 
                        gameState.createTroop(gameState.globalScene,gameState.humanTrooper.Tsprite,gameState.humanTrooper.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.humanTrooper.Thealth,gameState.humanTrooper.Tdamage,gameState.humanTrooper.TSpeed,gameState.humanTrooper.TattackSpeed,
                    gameState.humanTrooper.Trange,gameState.humanTrooper.TprojectileSpeed,gameState.humanTrooper.TunitType,gameState.humanTrooper.TtargetType,gameState.humanTrooper.TattackType,gameState.humanTrooper.TbulletSprite);
                    }
                });


                selectElement = scene.add.image(90,420,gameState.humanTank.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.humanTank.Tcost){
                       gameState.gold -= gameState.humanTank.Tcost; gameState.createTroop(gameState.globalScene,gameState.humanTank.Tsprite,gameState.humanTank.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.humanTank.Thealth,gameState.humanTank.Tdamage,gameState.humanTank.TSpeed,gameState.humanTank.TattackSpeed,
                    gameState.humanTank.Trange,gameState.humanTank.TprojectileSpeed,gameState.humanTank.TunitType,gameState.humanTank.TtargetType,gameState.humanTank.TattackType,gameState.humanTank.TbulletSprite);
                    }
                });


                selectElement = scene.add.image(160,420,gameState.humanBattleCruiser.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.humanBattleCruiser.Tcost){
                       gameState.gold -= gameState.humanBattleCruiser.Tcost; gameState.createTroop(gameState.globalScene,gameState.humanBattleCruiser.Tsprite,gameState.humanBattleCruiser.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.humanBattleCruiser.Thealth,gameState.humanBattleCruiser.Tdamage,gameState.humanBattleCruiser.TSpeed,gameState.humanBattleCruiser.TattackSpeed,
                    gameState.humanBattleCruiser.Trange,gameState.humanBattleCruiser.TprojectileSpeed,gameState.humanBattleCruiser.TunitType,gameState.humanBattleCruiser.TtargetType,gameState.humanBattleCruiser.TattackType,gameState.humanBattleCruiser.TbulletSprite);
                    }
                });
            }
            else if(gameState.faction == "alien"){
                selectElement = scene.add.image(20,420,gameState.alienDrone.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.alienDrone.Tcost){
                       gameState.gold -= gameState.alienDrone.Tcost; 
                        gameState.createTroop(gameState.globalScene,gameState.alienDrone.Tsprite,gameState.alienDrone.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.alienDrone.Thealth,gameState.alienDrone.Tdamage,gameState.alienDrone.TSpeed,gameState.alienDrone.TattackSpeed,
                    gameState.alienDrone.Trange,gameState.alienDrone.TprojectileSpeed,gameState.alienDrone.TunitType,gameState.alienDrone.TtargetType,gameState.alienDrone.TattackType,gameState.alienDrone.TbulletSprite);
                    }
                });


                selectElement = scene.add.image(90,420,gameState.alienWalker.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.alienWalker.Tcost){
                       gameState.gold -= gameState.alienWalker.Tcost; gameState.createTroop(gameState.globalScene,gameState.alienWalker.Tsprite,gameState.alienWalker.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.alienWalker.Thealth,gameState.alienWalker.Tdamage,gameState.alienWalker.TSpeed,gameState.alienWalker.TattackSpeed,
                    gameState.alienWalker.Trange,gameState.alienWalker.TprojectileSpeed,gameState.alienWalker.TunitType,gameState.alienWalker.TtargetType,gameState.alienWalker.TattackType,gameState.alienWalker.TbulletSprite);
                    }
                });


                selectElement = scene.add.image(160,420,gameState.alienMegaWalker.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.alienMegaWalker.Tcost){
                       gameState.gold -= gameState.alienMegaWalker.Tcost; gameState.createTroop(gameState.globalScene,gameState.alienMegaWalker.Tsprite,gameState.alienMegaWalker.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.alienMegaWalker.Thealth,gameState.alienMegaWalker.Tdamage,gameState.alienMegaWalker.TSpeed,gameState.alienMegaWalker.TattackSpeed,
                    gameState.alienMegaWalker.Trange,gameState.alienMegaWalker.TprojectileSpeed,gameState.alienMegaWalker.TunitType,gameState.alienMegaWalker.TtargetType,gameState.alienMegaWalker.TattackType,gameState.alienMegaWalker.TbulletSprite);
                    }
                });
            }
            else if(gameState.faction == "demon"){
                selectElement = scene.add.image(20,420,gameState.demonCrawler.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.demonCrawler.Tcost){
                       gameState.gold -= gameState.demonCrawler.Tcost; 
                        gameState.createTroop(gameState.globalScene,gameState.demonCrawler.Tsprite,gameState.demonCrawler.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.demonCrawler.Thealth,gameState.demonCrawler.Tdamage,gameState.demonCrawler.TSpeed,gameState.demonCrawler.TattackSpeed,
                    gameState.demonCrawler.Trange,gameState.demonCrawler.TprojectileSpeed,gameState.demonCrawler.TunitType,gameState.demonCrawler.TtargetType,gameState.demonCrawler.TattackType,gameState.demonCrawler.TbulletSprite);
                    }
                });


                selectElement = scene.add.image(90,420,gameState.demonFlarer.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.demonFlarer.Tcost){
                       gameState.gold -= gameState.demonFlarer.Tcost; gameState.createTroop(gameState.globalScene,gameState.demonFlarer.Tsprite,gameState.demonFlarer.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.demonFlarer.Thealth,gameState.demonFlarer.Tdamage,gameState.demonFlarer.TSpeed,gameState.demonFlarer.TattackSpeed,
                    gameState.demonFlarer.Trange,gameState.demonFlarer.TprojectileSpeed,gameState.demonFlarer.TunitType,gameState.demonFlarer.TtargetType,gameState.demonFlarer.TattackType,gameState.demonFlarer.TbulletSprite);
                    }
                });


                selectElement = scene.add.image(160,420,gameState.demonFly.Tsprite).setOrigin(0,0).setDepth(2).setInteractive();
                selectElement.setScale(40/selectElement.displayWidth);
                gameState.shopElements.push(selectElement);
                selectElement.on('pointerdown', function(pointer){
                    if(gameState.gold >= gameState.demonFly.Tcost){
                       gameState.gold -= gameState.demonFly.Tcost; gameState.createTroop(gameState.globalScene,gameState.demonFly.Tsprite,gameState.demonFly.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.demonFly.Thealth,gameState.demonFly.Tdamage,gameState.demonFly.TSpeed,gameState.demonFly.TattackSpeed,
                    gameState.demonFly.Trange,gameState.demonFly.TprojectileSpeed,gameState.demonFly.TunitType,gameState.demonFly.TtargetType,gameState.demonFly.TattackType,gameState.demonFly.TbulletSprite);
                    }
                });
            }
        }
        gameState.invOpen = false;
        gameState.gold = 0;
        
        
        
        gameState.createEnvironment(this);
        
        gameState.team1troops = this.physics.add.group();
        gameState.team1troops.getChildren().forEach(troop => {
            
        });
        gameState.bulletTime = function(bullet,scene,Ttarget,bulletSpeed,damage){
            var alive = 0;
            scene.physics.add.overlap(bullet, Ttarget,(robot,ammo)=>{
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
        
        function troopBehavior(scene,select,team,enemies,health,speed,ranges,attSpeed,PS,UT,TT,AT,damage,bulletSprite){
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
                                gameState.bulletTime(selected,scene,target,PS,damage);
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
                delay: 10,
                callback: ()=>{
                    if(select.hhealth > 0){
                        for (var i = 0; i < enemies.length; i++){
                            if(target == 0){
                                var dist = Phaser.Math.Distance.BetweenPoints(enemies[i], select);
                            }
                            else {
                                var dist = Phaser.Math.Distance.BetweenPoints(target, select);
                            }

                            if(dist < ranges && target == 0 && TT == 'ground&air'){
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
        gameState.createTroop = function(scene,sprite,depth,team,xloc,yloc,health,damage,speed,attackSpeed,range,projectileSpeed,unitType,targetType,attackType,bulletSprite){
            if(team == 1){
                gameState.team1.create(xloc,yloc,`${sprite}`).setDepth(depth);
                gameState.first = gameState.team1.getChildren();
                gameState.enemies = gameState.team2.getChildren();
                var selected = gameState.first[gameState.team1.getChildren().length-1];
                selected.hhealth = health;
                selected.UT = unitType;
                console.log(selected.UT);
                troopBehavior(scene,selected,1,gameState.enemies,health,speed,range,attackSpeed,projectileSpeed,unitType,targetType,attackType,damage,bulletSprite);
            }
            else if(team == 2){
                gameState.team2.create(xloc,yloc,`${sprite}`).setDepth(depth);
                gameState.first = gameState.team2.getChildren();
                gameState.enemies = gameState.team1.getChildren();
                var selected = gameState.first[gameState.team2.getChildren().length-1];
                selected.hhealth = health;
                selected.UT = unitType; 
                console.log(selected.UT);
                troopBehavior(scene,selected,2,gameState.enemies,health,speed,range,attackSpeed,projectileSpeed,unitType,targetType,attackType,damage,bulletSprite);
            }
        }
        
        var enemyTroopsTimer = this.time.addEvent({
            delay: (Math.ceil(Math.random()*gameState.randomTime)+gameState.randomTime),
            callback: ()=>{ 
                var random = Math.ceil(Math.random()*63);
                if(random >= 1 && random <= 50){
                    gameState.createTroop(gameState.globalScene,gameState.alienDrone.Tsprite+'red',gameState.alienDrone.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.alienDrone.Thealth,gameState.alienDrone.Tdamage,gameState.alienDrone.TSpeed,gameState.alienDrone.TattackSpeed,
                gameState.alienDrone.Trange,gameState.alienDrone.TprojectileSpeed,gameState.alienDrone.TunitType,gameState.alienDrone.TtargetType,gameState.alienDrone.TattackType,gameState.alienDrone.TbulletSprite);
                }
                else if(random >= 51 && random <= 63){
                    gameState.createTroop(gameState.globalScene,gameState.alienWalker.Tsprite+'red',gameState.alienWalker.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.alienWalker.Thealth,gameState.alienWalker.Tdamage,gameState.alienWalker.TSpeed,gameState.alienWalker.TattackSpeed,
                gameState.alienWalker.Trange,gameState.alienWalker.TprojectileSpeed,gameState.alienWalker.TunitType,gameState.alienWalker.TtargetType,gameState.alienWalker.TattackType,gameState.alienWalker.TbulletSprite);
                }
                else if(random >= 64 && random <= 65){
                    gameState.createTroop(gameState.globalScene,gameState.alienMegaWalker.Tsprite+'red',gameState.alienMegaWalker.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.alienMegaWalker.Thealth,gameState.alienMegaWalker.Tdamage,gameState.alienMegaWalker.TSpeed,gameState.alienMegaWalker.TattackSpeed,
                gameState.alienMegaWalker.Trange,gameState.alienMegaWalker.TprojectileSpeed,gameState.alienMegaWalker.TunitType,gameState.alienMegaWalker.TtargetType,gameState.alienMegaWalker.TattackType,gameState.alienMegaWalker.TbulletSprite);
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
                gameState.randomTime *= 0.5;
                enemyTroopsTimer.delay = (Math.ceil(Math.random()*gameState.randomTime)+gameState.randomTime);
            },  
            startAt: 0,
            timeScale: 1,
            repeat: -1
        }); 
        
        /*this.input.on('pointerdown', function(pointer){
            for(var i = 0; i <1 ; i++){
                gameState.createTroop(gameState.globalScene,gameState.alienMegaWalker.Tsprite,gameState.alienMegaWalker.Tdepth,1,gameState.input.x,gameState.input.y,gameState.alienMegaWalker.Thealth,gameState.alienMegaWalker.Tdamage,gameState.alienMegaWalker.TSpeed,gameState.alienMegaWalker.TattackSpeed,
                gameState.alienMegaWalker.Trange,gameState.alienMegaWalker.TprojectileSpeed,gameState.alienMegaWalker.TattackType,gameState.alienMegaWalker.TbulletSprite);
            }
        });*/
	}
    update(){
        gameState.input=this.input;
        gameState.shopElements[1].setText(`Gold : ${gameState.gold}`);
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
