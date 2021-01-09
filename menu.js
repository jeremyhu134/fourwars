class MenuScene extends Phaser.Scene {
    constructor() {
		super({ key: 'MenuScene' })
	}
    preload(){
        this.load.image('bullet','heroimages/bullet.png');
        this.load.image('alienhq','heroimages/alienhq.png');
        this.load.image('aliendrone','heroimages/aliendrone.png');
        this.load.image('alienwalker','heroimages/alienwalker.png');
        this.load.image('alienmegawalker','heroimages/alienmegawalker.png');
        
        this.load.image('aliendronered','heroimages/aliendronered.png');
        this.load.image('alienwalkerred','heroimages/alienwalkerred.png');
        this.load.image('alienmegawalkerred','heroimages/alienmegawalkerred.png');
        
        this.load.image('humantrooper','heroimages/humantrooper.png');
        this.load.image('humantank','heroimages/humantank.png');
        this.load.image('humanbattlecruiser','heroimages/humanbattlecruiser.png');
        
        this.load.image('bg','heroimages/bg.png');
        this.load.image('soldier76','heroimages/soldier76.png');
        this.load.image('bullet1','heroimages/bullet1.png');
        this.load.image('bullet2','heroimages/bullet2.png');
        this.load.image('bullet3','heroimages/bullet3.png');
        this.load.image('bullet4','heroimages/bullet4.png');
        this.load.image('bullet5','heroimages/bullet5.png');
        
        this.load.image('robot1','heroimages/robot1.png');
        this.load.image('inventoryButton','heroimages/inventoryButton.png');
        this.load.image('invBg','heroimages/invBg.png');
    }
    create() {
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
            gameState.bg = scene.add.sprite(0,0,'bg').setOrigin(0,0).setDepth(0);  
            gameState.inventoryButton = scene.add.sprite(940,440,'inventoryButton').setOrigin(0,0).setInteractive().setDepth(0);
            //scene.scene.launch('InventoryScene');
        }
        gameState.invOpen = false;
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
        
        function troopBehavior(scene,select,team,enemies,health,speed,ranges,attSpeed,PS,AT,damage,bulletSprite){
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

                            if(dist < ranges && target == 0){
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
        gameState.createTroop = function(scene,sprite,depth,team,xloc,yloc,health,damage,speed,attackSpeed,range,projectileSpeed,attackType,bulletSprite){
            if(team == 1){
                gameState.team1.create(xloc,yloc,`${sprite}`).setDepth(depth);
                gameState.first = gameState.team1.getChildren();
                gameState.enemies = gameState.team2.getChildren();
                var selected = gameState.first[gameState.team1.getChildren().length-1];
                selected.hhealth = health;
                troopBehavior(scene,selected,1,gameState.enemies,health,speed,range,attackSpeed,projectileSpeed,attackType,damage,bulletSprite);
            }
            else if(team == 2){
                gameState.team2.create(xloc,yloc,`${sprite}`).setDepth(depth);
                gameState.first = gameState.team2.getChildren();
                gameState.enemies = gameState.team1.getChildren();
                var selected = gameState.first[gameState.team2.getChildren().length-1];
                selected.hhealth = health;
                troopBehavior(scene,selected,2,gameState.enemies,health,speed,range,attackSpeed,projectileSpeed,attackType,damage,bulletSprite);
            }
        }
        
         gameState.createTroop(gameState.globalScene,gameState.alienMegaWalker.Tsprite,1,10000,10000,gameState.alienMegaWalker.Thealth,gameState.alienMegaWalker.Tdamage,gameState.alienMegaWalker.TSpeed,gameState.alienMegaWalker.TattackSpeed,
                gameState.alienMegaWalker.Trange,gameState.alienMegaWalker.TprojectileSpeed,gameState.alienMegaWalker.TattackType);
        gameState.createTroop(gameState.globalScene,gameState.alienMegaWalker.Tsprite,2,10000,1000,gameState.alienMegaWalker.Thealth,gameState.alienMegaWalker.Tdamage,gameState.alienMegaWalker.TSpeed,gameState.alienMegaWalker.TattackSpeed,
                gameState.alienMegaWalker.Trange,gameState.alienMegaWalker.TprojectileSpeed,gameState.alienMegaWalker.TattackType);
        
        
        this.time.addEvent({
            delay: (Math.ceil(Math.random()*200)+200),
            callback: ()=>{ 
                var random = Math.ceil(Math.random()*8);
                if(random == 1 || random == 2 || random == 3 || random == 4 || random == 5){ gameState.createTroop(gameState.globalScene,gameState.humanTrooper.Tsprite,gameState.humanTrooper.Tdepth,2,1100,Math.ceil(Math.random()*400)+50,gameState.humanTrooper.Thealth,gameState.humanTrooper.Tdamage,gameState.humanTrooper.TSpeed,gameState.humanTrooper.TattackSpeed,
                gameState.humanTrooper.Trange,gameState.humanTrooper.TprojectileSpeed,gameState.humanTrooper.TattackType,gameState.humanTrooper.TbulletSprite);
                }
                else if (random == 6 || random == 7 ){ gameState.createTroop(gameState.globalScene,gameState.humanTank.Tsprite,gameState.humanTank.Tdepth,2,1100,Math.ceil(Math.random()*400)+50,gameState.humanTank.Thealth,gameState.humanTank.Tdamage,gameState.humanTank.TSpeed,gameState.humanTank.TattackSpeed,
                gameState.humanTank.Trange,gameState.humanTank.TprojectileSpeed,gameState.humanTank.TattackType,gameState.humanTank.TbulletSprite);
                }
                else if (random == 8){ gameState.createTroop(gameState.globalScene,gameState.humanBattleCruiser.Tsprite,gameState.humanBattleCruiser.Tdepth,2,1100,Math.ceil(Math.random()*400)+50,gameState.humanBattleCruiser.Thealth,gameState.humanBattleCruiser.Tdamage,gameState.humanBattleCruiser.TSpeed,gameState.humanBattleCruiser.TattackSpeed,
                gameState.humanBattleCruiser.Trange,gameState.humanBattleCruiser.TprojectileSpeed,gameState.humanBattleCruiser.TattackType,gameState.humanBattleCruiser.TbulletSprite);
                }
            },  
            startAt: 0,
            timeScale: 1,
            repeat: -1
        }); 
        
        this.time.addEvent({
            delay: (Math.ceil(Math.random()*200)+200),
            callback: ()=>{ 
                var random = Math.ceil(Math.random()*8);
                if(random == 1 || random == 2 || random == 3 || random == 4 || random == 5){
                    gameState.createTroop(gameState.globalScene,gameState.alienDrone.Tsprite,gameState.alienDrone.Tdepth,1,0,Math.ceil(Math.random()*400)+50,gameState.alienDrone.Thealth,gameState.alienDrone.Tdamage,gameState.alienDrone.TSpeed,gameState.alienDrone.TattackSpeed,
                gameState.alienDrone.Trange,gameState.alienDrone.TprojectileSpeed,gameState.alienDrone.TattackType,gameState.alienDrone.TbulletSprite);
                }
                else if(random == 6 || random == 7){
                    gameState.createTroop(gameState.globalScene,gameState.alienWalker.Tsprite,gameState.alienWalker.Tdepth,1,0,Math.ceil(Math.random()*400)+50,gameState.alienWalker.Thealth,gameState.alienWalker.Tdamage,gameState.alienWalker.TSpeed,gameState.alienWalker.TattackSpeed,
                gameState.alienWalker.Trange,gameState.alienWalker.TprojectileSpeed,gameState.alienWalker.TattackType,gameState.alienWalker.TbulletSprite);
                }
                else if(random == 8){
                    gameState.createTroop(gameState.globalScene,gameState.alienMegaWalker.Tsprite,gameState.alienMegaWalker.Tdepth,1,0,Math.ceil(Math.random()*400)+50,gameState.alienMegaWalker.Thealth,gameState.alienMegaWalker.Tdamage,gameState.alienMegaWalker.TSpeed,gameState.alienMegaWalker.TattackSpeed,
                gameState.alienMegaWalker.Trange,gameState.alienMegaWalker.TprojectileSpeed,gameState.alienMegaWalker.TattackType,gameState.alienMegaWalker.TbulletSprite);
                }
            },  
            startAt: 0,
            timeScale: 1,
            repeat: -1
        }); 
        
        this.input.on('pointerdown', function(pointer){
            if(gameState.invOpen == false){
                gameState.createTroop(gameState.globalScene,gameState.alienMegaWalker.Tsprite,1,gameState.input.x,gameState.input.y,gameState.alienMegaWalker.Thealth,gameState.alienMegaWalker.Tdamage,gameState.alienMegaWalker.TSpeed,gameState.alienMegaWalker.TattackSpeed,
                gameState.alienMegaWalker.Trange,gameState.alienMegaWalker.TprojectileSpeed,gameState.alienMegaWalker.TattackType,gameState.alienMegaWalker.TbulletSprite);
            }
        });
        
        
	}
    update(){
        gameState.input=this.input;
    }
}

class InventoryScene extends Phaser.Scene {
    constructor() {
		super({ key: 'InventoryScene' })
	}
    create() {
        gameState.invbg = this.add.sprite(0,0,'invBg').setOrigin(0,0).setDepth(0);
    }
    upload() {
        
    }
}