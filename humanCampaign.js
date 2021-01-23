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
        else if(gameState.humanLevel == 2){
            globalScene.add.text( 40, 100, `Excellent victory, part of the \ncanyon is under our control \nnow. To get to the caves we \nmust take complete control of \nthe caves. To the next \noutpost!`, {fill: '#OOOOOO', fontSize: '25px'});
            this.add.image(575,160,'humantrooper').setOrigin(0,0).setScale(50/25);
        }
        else if(gameState.humanLevel == 3){
            globalScene.add.text( 40, 100, `This is it general, the caves\n are beyond this outpost. The \ncave mouth is under siege by\n our forces. Dispel the entoss\n from the canyon once and for \nall!`, {fill: '#OOOOOO', fontSize: '25px'});
            this.add.image(575,160,'humantrooper').setOrigin(0,0).setScale(50/25);
        }
        else if(gameState.humanLevel == 4){
            globalScene.add.text( 40, 100, `At last, the canyon is under\n our control. We will proceed\n into the cave with our forces, \nbut beware general, our scouts \nhave reported what seems to be \ngiant entoss in these caves. \nProceed with caution and good \nluck.`, {fill: '#OOOOOO', fontSize: '25px'});
            this.add.image(575,160,'humantrooper').setOrigin(0,0).setScale(50/25);
        }
        else if(gameState.humanLevel == 5){
            globalScene.add.text( 40, 100, `The mouth of the cave is \nsecure, but our scouts haven't \nreturned from deep in the cave. \nI suspect a creature of \nsomesort came acros their path. \nFear not general, that problem \nwill wait, let us advance!`, {fill: '#OOOOOO', fontSize: '25px'});
            this.add.image(575,160,'humantrooper').setOrigin(0,0).setScale(50/25);
        }
        else if(gameState.humanLevel == 6){
            globalScene.add.text( 40, 100, `We are almost to the cave exit, but I \nfear the problem we have put off is \ninevitable. Our scouts have returned \nand have reported large entoss that \nare abnormally large. The entoss will \nfear our tanks.`, {fill: '#OOOOOO', fontSize: '20px'});
            this.add.image(575,160,'humantrooper').setOrigin(0,0).setScale(50/25);
            this.add.image(650,160,'humantank').setOrigin(0,0).setScale(50/40);
        }
        else if(gameState.humanLevel == 7){
            globalScene.add.text( 40, 100, `Our tanks dealt with those \ngiants well. We have reached \nthe cave exit, our forces will \nsecure the exit and we will \nfinally reach the mountains. \nStarport here we come!`, {fill: '#OOOOOO', fontSize: '25px'});
            this.add.image(575,160,'humantrooper').setOrigin(0,0).setScale(50/25);
            this.add.image(650,160,'humantank').setOrigin(0,0).setScale(50/40);
        }
        
        var backButton = this.add.image(950,440,'backButton').setOrigin(0,0).setInteractive();
        backButton.on('pointerdown', function(pointer){
            globalScene.scene.stop('HumanMissionBriefingScene');
            globalScene.scene.start('CampaignScene');
        });
      
        
        var startButton = this.add.image(10,450,'startButton').setOrigin(0,0).setScale(40/59).setInteractive();
        startButton.on('pointerdown', function(pointer){
            if(gameState.humanLevel == 1){
                globalScene.scene.stop("HumanMissionBriefingScene");
                globalScene.scene.start("HumanCampaignLevelOneScene");
            }
            else if(gameState.humanLevel == 2){
                globalScene.scene.stop("HumanMissionBriefingScene");
                globalScene.scene.start("HumanCampaignLevelTwoScene");
            }
            else if(gameState.humanLevel == 3){
                globalScene.scene.stop("HumanMissionBriefingScene");
                globalScene.scene.start("HumanCampaignLevelThreeScene");
            }
            else if(gameState.humanLevel == 4){
                globalScene.scene.stop("HumanMissionBriefingScene");
                globalScene.scene.start("HumanCampaignLevelFourScene");
            }
            else if(gameState.humanLevel == 5){
                globalScene.scene.stop("HumanMissionBriefingScene");
                globalScene.scene.start("HumanCampaignLevelFiveScene");
            }
            else if(gameState.humanLevel == 6){
                globalScene.scene.stop("HumanMissionBriefingScene");
                globalScene.scene.start("HumanCampaignLevelSixScene");
            }
            else if(gameState.humanLevel == 7){
                globalScene.scene.stop("HumanMissionBriefingScene");
                globalScene.scene.start("HumanCampaignLevelSevenScene");
            }
            //globalScene.add.text( 180, 455, `Campaign not yet available`, {fill: '#OOOOOO', fontSize: '20px'});
        });
    }
    upload() {
        
    }
}




var selectElement;





class HumanCampaignLevelOneScene extends Phaser.Scene {
    constructor() {
		super({ key: 'HumanCampaignLevelOneScene' })
	}
    preload(){
        
    }
    create() {
        gameState.faction = "human";
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
        gameState.enemyfaction = "entoss";
        
        gameState.createEnvironment = function(scene){
            scene.add.image(0,0,'canyonBg').setOrigin(0,0);
            gameState.select1 = gameState.team1.create(105,200,`${gameState.faction}hq`).setDepth(0);
            gameState.select1.hhealth = 1000;
            gameState.select1.UT = 'hq';
            gameState.select2 = gameState.team2.create(1850,200,`${gameState.enemyfaction}outpostred`).setDepth(0).setFlipX(true);
            gameState.select2.hhealth = 500;
            gameState.select2.UT = 'hq';
            
            gameState.goldProduction = 5;
            gameState.randomTime = 3000;
            
            gameState.shopElements = [];
            selectElement = scene.add.image(0,400,'shopBar').setOrigin(0,0).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( 10, 10, `Gold : ${gameState.gold}`, {fill: '#FFFFFF',fontSize: 'bold 25px'}).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( 10, 35, `HQ : ${gameState.select1.hhealth}`, {fill: '#FFFFFF', fontSize: 'bold 15px'}).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( window.innerWidth - 450, 15, `Enemy HQ : ${gameState.select2.hhealth}`, {fill: '#FFFFFF', fontSize: 'bold 15px'}).setDepth(2);
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
            }
        }
        gameState.invOpen = false;
        gameState.gold = 0;
        
        
        
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
                var random = Math.ceil(Math.random()*1);
                if(random == 1){ 
                    gameState.createTroop(gameState.globalScene,gameState.entossSpitter.Tsprite+'red',gameState.entossSpitter.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.entossSpitter.Thealth,gameState.entossSpitter.Tdamage,gameState.entossSpitter.TSpeed,gameState.entossSpitter.TattackSpeed,
                    gameState.entossSpitter.Trange,gameState.entossSpitter.TprojectileSpeed,gameState.entossSpitter.TunitType,gameState.entossSpitter.TtargetType,gameState.entossSpitter.TattackType,gameState.entossSpitter.TbulletSprite,gameState.entossSpitter.TsplashRange);
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
            delay: 90000,
            callback: ()=>{
                gameState.goldProduction += 5;
                /*gameState.randomTime *= 0.75;
                enemyTroopsTimer.delay = (Math.ceil(Math.random()*gameState.randomTime)+gameState.randomTime);*/
            },  
            startAt: 0,
            timeScale: 1,
            repeat: -1
        }); 
        
        /*this.input.on('pointerdown', function(pointer){
                gameState.createTroop(gameState.globalScene,gameState.humanTrooper.Tsprite,gameState.humanTrooper.Tdepth,1,gameState.input.x,gameState.input.y,gameState.humanTrooper.Thealth,gameState.humanTrooper.Tdamage,gameState.humanTrooper.TSpeed,gameState.humanTrooper.TattackSpeed,gameState.humanTrooper.Trange,gameState.humanTrooper.TprojectileSpeed,gameState.humanTrooper.TunitType,gameState.humanTrooper.TtargetType,gameState.humanTrooper.TattackType,gameState.humanTrooper.TbulletSprite,gameState.humanTrooper.TsplashRange);
        });*/
	}
    update(){
        console.log(window.innerWidth)
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
        else if(gameState.input.x >= window.innerWidth -330 && gameState.scrollLock < window.innerWidth/15.2){
            gameState.camera.x -= 10;
            for(var i = 0; i <gameState.shopElements.length ; i++){
                gameState.shopElements[i].x += 10;
            }
            gameState.scrollLock ++;
        }
        
        if(gameState.select1.hhealth <= 0){
            for (var i = 0; i < selectElement.length; i ++){
                selectElement[i].destroy();
            }
            gameState.camera.x = 0;
            this.add.text( 500, 250, `Defeat`, {fill: '#FFFFFF',fontSize: 'bold 60px'}).setOrigin(0,0);
            this.physics.pause();
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    this.scene.stop('HumanCampaignLevelOneScene');
                    this.scene.start('CampaignScene');
                },  
                startAt: 0,
                timeScale: 1
            }); 
        }
        else if(gameState.select2.hhealth <= 0){
            for (var i = 0; i < selectElement.length; i ++){
                selectElement[i].destroy();
            }
            gameState.humanLevel = 2;
            gameState.camera.x = 0;
            this.add.text( 500, 250, `Victory`, {fill: '#FFFFFF',fontSize: 'bold 60px'}).setOrigin(0,0);
            this.physics.pause();
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    this.scene.stop('HumanCampaignLevelOneScene');
                    this.scene.start('CampaignScene');
                },  
                startAt: 0,
                timeScale: 1
            });
        }
    }
}










class HumanCampaignLevelTwoScene extends Phaser.Scene {
    constructor() {
		super({ key: 'HumanCampaignLevelTwoScene' })
	}
    preload(){
        
    }
    create() {
        gameState.faction = "human";
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
        gameState.enemyfaction = "entoss";
        
        gameState.createEnvironment = function(scene){
            scene.add.image(0,0,'canyonBg').setOrigin(0,0);
            gameState.select1 = gameState.team1.create(105,200,`${gameState.faction}hq`).setDepth(0);
            gameState.select1.hhealth = 1000;
            gameState.select1.UT = 'hq';
            gameState.select2 = gameState.team2.create(1850,200,`${gameState.enemyfaction}outpostred`).setDepth(0).setFlipX(true);
            gameState.select2.hhealth = 750;
            gameState.select2.UT = 'hq';
            
            gameState.goldProduction = 6;
            gameState.randomTime = 3000;
            
            gameState.shopElements = [];
            selectElement = scene.add.image(0,400,'shopBar').setOrigin(0,0).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( 10, 10, `Gold : ${gameState.gold}`, {fill: '#FFFFFF',fontSize: 'bold 25px'}).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( 10, 35, `HQ : ${gameState.select1.hhealth}`, {fill: '#FFFFFF', fontSize: 'bold 15px'}).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( window.innerWidth - 450, 15, `Enemy HQ : ${gameState.select2.hhealth}`, {fill: '#FFFFFF', fontSize: 'bold 15px'}).setDepth(2);
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
            }
        }
        gameState.invOpen = false;
        gameState.gold = 0;
        
        
        
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
            delay: (Math.ceil(Math.random()*5000)+8500),
            callback: ()=>{ 
                var random = 0;
                var troops = gameState.team1.getChildren().length;
                var random = Math.ceil(Math.random()*1);
                if(random == 1){ 
                    gameState.createTroop(gameState.globalScene,gameState.entossSpitter.Tsprite+'red',gameState.entossSpitter.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.entossSpitter.Thealth,gameState.entossSpitter.Tdamage,gameState.entossSpitter.TSpeed,gameState.entossSpitter.TattackSpeed,
                    gameState.entossSpitter.Trange,gameState.entossSpitter.TprojectileSpeed,gameState.entossSpitter.TunitType,gameState.entossSpitter.TtargetType,gameState.entossSpitter.TattackType,gameState.entossSpitter.TbulletSprite,gameState.entossSpitter.TsplashRange);
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
            delay: 90000,
            callback: ()=>{
                gameState.goldProduction += 5;
                /*gameState.randomTime *= 0.75;
                enemyTroopsTimer.delay = (Math.ceil(Math.random()*gameState.randomTime)+gameState.randomTime);*/
            },  
            startAt: 0,
            timeScale: 1,
            repeat: -1
        }); 
        
        /*this.input.on('pointerdown', function(pointer){
                gameState.createTroop(gameState.globalScene,gameState.humanTrooper.Tsprite,gameState.humanTrooper.Tdepth,1,gameState.input.x,gameState.input.y,gameState.humanTrooper.Thealth,gameState.humanTrooper.Tdamage,gameState.humanTrooper.TSpeed,gameState.humanTrooper.TattackSpeed,gameState.humanTrooper.Trange,gameState.humanTrooper.TprojectileSpeed,gameState.humanTrooper.TunitType,gameState.humanTrooper.TtargetType,gameState.humanTrooper.TattackType,gameState.humanTrooper.TbulletSprite,gameState.humanTrooper.TsplashRange);
        });*/
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
        else if(gameState.input.x >= window.innerWidth -330 && gameState.scrollLock < window.innerWidth/15.2){
            gameState.camera.x -= 10;
            for(var i = 0; i <gameState.shopElements.length ; i++){
                gameState.shopElements[i].x += 10;
            }
            gameState.scrollLock ++;
        }
        
        if(gameState.select1.hhealth <= 0){
            for (var i = 0; i < selectElement.length; i ++){
                selectElement[i].destroy();
            }
            gameState.camera.x = 0;
            this.add.text( 500, 250, `Defeat`, {fill: '#FFFFFF',fontSize: 'bold 60px'}).setOrigin(0,0);
            this.physics.pause();
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    this.scene.stop('HumanCampaignLevelTwoScene');
                    this.scene.start('CampaignScene');
                },  
                startAt: 0,
                timeScale: 1
            }); 
        }
        else if(gameState.select2.hhealth <= 0){
            for (var i = 0; i < selectElement.length; i ++){
                selectElement[i].destroy();
            }
            gameState.humanLevel = 3;
            gameState.camera.x = 0;
            this.add.text( 500, 250, `Victory`, {fill: '#FFFFFF',fontSize: 'bold 60px'}).setOrigin(0,0);
            this.physics.pause();
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    this.scene.stop('HumanCampaignLevelTwoScene');
                    this.scene.start('CampaignScene');
                },  
                startAt: 0,
                timeScale: 1
            });
        }
    }
}










class HumanCampaignLevelThreeScene extends Phaser.Scene {
    constructor() {
		super({ key: 'HumanCampaignLevelThreeScene' })
	}
    preload(){
        
    }
    create() {
        gameState.faction = "human";
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
        gameState.enemyfaction = "entoss";
        
        gameState.createEnvironment = function(scene){
            scene.add.image(0,0,'canyonCaveBg').setOrigin(0,0);
            gameState.select1 = gameState.team1.create(105,200,`${gameState.faction}hq`).setDepth(0);
            gameState.select1.hhealth = 1000;
            gameState.select1.UT = 'hq';
            gameState.select2 = gameState.team2.create(1850,200,`${gameState.enemyfaction}outpostred`).setDepth(0).setFlipX(true);
            gameState.select2.hhealth = 1000;
            gameState.select2.UT = 'hq';
            
            gameState.goldProduction = 7;
            gameState.randomTime = Math.ceil(Math.random()*5000)+6000;
            
            gameState.shopElements = [];
            selectElement = scene.add.image(0,400,'shopBar').setOrigin(0,0).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( 10, 10, `Gold : ${gameState.gold}`, {fill: '#FFFFFF',fontSize: 'bold 25px'}).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( 10, 35, `HQ : ${gameState.select1.hhealth}`, {fill: '#FFFFFF', fontSize: 'bold 15px'}).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( window.innerWidth - 450, 15, `Enemy HQ : ${gameState.select2.hhealth}`, {fill: '#FFFFFF', fontSize: 'bold 15px'}).setDepth(2);
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
            }
        }
        gameState.invOpen = false;
        gameState.gold = 0;
        
        
        
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
            delay: gameState.randomTime,
            callback: ()=>{ 
                var random = 0;
                var troops = gameState.team1.getChildren().length;
                var random = Math.ceil(Math.random()*1);
                if(random == 1){ 
                    gameState.createTroop(gameState.globalScene,gameState.entossSpitter.Tsprite+'red',gameState.entossSpitter.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.entossSpitter.Thealth,gameState.entossSpitter.Tdamage,gameState.entossSpitter.TSpeed,gameState.entossSpitter.TattackSpeed,gameState.entossSpitter.Trange,gameState.entossSpitter.TprojectileSpeed,gameState.entossSpitter.TunitType,gameState.entossSpitter.TtargetType,gameState.entossSpitter.TattackType,gameState.entossSpitter.TbulletSprite,gameState.entossSpitter.TsplashRange);
                    gameState.randomTime = Math.ceil(Math.random()*3000)+4000;
                    enemyTroopsTimer.delay = gameState.randomTime;
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
            delay: 120000,
            callback: ()=>{
                gameState.goldProduction = 10;
                /*gameState.randomTime *= 0.75;
                enemyTroopsTimer.delay = (Math.ceil(Math.random()*gameState.randomTime)+gameState.randomTime);*/
            },  
            startAt: 0,
            timeScale: 1,
            repeat: -1
        }); 
        
        /*this.input.on('pointerdown', function(pointer){
                gameState.createTroop(gameState.globalScene,gameState.humanTrooper.Tsprite,gameState.humanTrooper.Tdepth,1,gameState.input.x,gameState.input.y,gameState.humanTrooper.Thealth,gameState.humanTrooper.Tdamage,gameState.humanTrooper.TSpeed,gameState.humanTrooper.TattackSpeed,gameState.humanTrooper.Trange,gameState.humanTrooper.TprojectileSpeed,gameState.humanTrooper.TunitType,gameState.humanTrooper.TtargetType,gameState.humanTrooper.TattackType,gameState.humanTrooper.TbulletSprite,gameState.humanTrooper.TsplashRange);
        });*/
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
        else if(gameState.input.x >= window.innerWidth -330 && gameState.scrollLock < window.innerWidth/15.2){
            gameState.camera.x -= 10;
            for(var i = 0; i <gameState.shopElements.length ; i++){
                gameState.shopElements[i].x += 10;
            }
            gameState.scrollLock ++;
        }
        
        if(gameState.select1.hhealth <= 0){
            for (var i = 0; i < selectElement.length; i ++){
                selectElement[i].destroy();
            }
            gameState.camera.x = 0;
            this.add.text( 500, 250, `Defeat`, {fill: '#FFFFFF',fontSize: 'bold 60px'}).setOrigin(0,0);
            this.physics.pause();
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    this.scene.stop('HumanCampaignLevelThreeScene');
                    this.scene.start('CampaignScene');
                },  
                startAt: 0,
                timeScale: 1
            }); 
        }
        else if(gameState.select2.hhealth <= 0){
            for (var i = 0; i < selectElement.length; i ++){
                selectElement[i].destroy();
            }
            gameState.humanLevel = 4;
            gameState.camera.x = 0;
            this.add.text( 500, 250, `Victory`, {fill: '#FFFFFF',fontSize: 'bold 60px'}).setOrigin(0,0);
            this.physics.pause();
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    this.scene.stop('HumanCampaignLevelThreeScene');
                    this.scene.start('CampaignScene');
                },  
                startAt: 0,
                timeScale: 1
            });
        }
    }
}








class HumanCampaignLevelFourScene extends Phaser.Scene {
    constructor() {
		super({ key: 'HumanCampaignLevelFourScene' })
	}
    preload(){
        
    }
    create() {
        gameState.faction = "human";
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
        gameState.enemyfaction = "entoss";
        
        gameState.createEnvironment = function(scene){
            scene.add.image(0,0,'caveCanyonBg').setOrigin(0,0);
            gameState.select1 = gameState.team1.create(105,200,`${gameState.faction}hq`).setDepth(0);
            gameState.select1.hhealth = 1000;
            gameState.select1.UT = 'hq';
            gameState.select2 = gameState.team2.create(1850,200,`${gameState.enemyfaction}outpostred`).setDepth(0).setFlipX(true);
            gameState.select2.hhealth = 1000;
            gameState.select2.UT = 'hq';
            
            gameState.goldProduction = 7;
            gameState.randomTime = Math.ceil(Math.random()*5000)+6000;
            
            gameState.shopElements = [];
            selectElement = scene.add.image(0,400,'shopBar').setOrigin(0,0).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( 10, 10, `Gold : ${gameState.gold}`, {fill: '#FFFFFF',fontSize: 'bold 25px'}).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( 10, 35, `HQ : ${gameState.select1.hhealth}`, {fill: '#FFFFFF', fontSize: 'bold 15px'}).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( window.innerWidth - 450, 15, `Enemy HQ : ${gameState.select2.hhealth}`, {fill: '#FFFFFF', fontSize: 'bold 15px'}).setDepth(2);
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
            }
        }
        gameState.invOpen = false;
        gameState.gold = 0;
        
        
        
        gameState.createEnvironment(this);
        
        gameState.team1troops = this.physics.add.group();
        gameState.team1troops.getChildren().forEach(troop => {
            
        });
        gameState.bulletTime = function(bullet,scene,Ttarget,bulletSpeed,damage,enemies,splashRange){
            var alive = 0;
            scene.physics.add.overlap(bullet, Ttarget,(robot,ammo)=>{
                var array = [];
                
                for (var i = 0; i < enemies.length; i++){
                    var dist = Phaser.Math.Distance.BetweenPoints(enemies[i], bullet);
                    console.log(splashRange);
                    if(dist < splashRange && enemies[i].UT !== "air"){
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
            delay: gameState.randomTime,
            callback: ()=>{ 
                var random = 0;
                var troops = gameState.team1.getChildren().length;
                var random = Math.ceil(Math.random()*1);
                if(random == 1){ 
                    gameState.createTroop(gameState.globalScene,gameState.entossSpitter.Tsprite+'red',gameState.entossSpitter.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.entossSpitter.Thealth,gameState.entossSpitter.Tdamage,gameState.entossSpitter.TSpeed,gameState.entossSpitter.TattackSpeed,gameState.entossSpitter.Trange,gameState.entossSpitter.TprojectileSpeed,gameState.entossSpitter.TunitType,gameState.entossSpitter.TtargetType,gameState.entossSpitter.TattackType,gameState.entossSpitter.TbulletSprite,gameState.entossSpitter.TsplashRange);
                    gameState.randomTime = Math.ceil(Math.random()*5000)+7000;
                    enemyTroopsTimer.delay = gameState.randomTime;
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
            delay: 120000,
            callback: ()=>{
                gameState.goldProduction = 10;
                /*gameState.randomTime *= 0.75;
                enemyTroopsTimer.delay = (Math.ceil(Math.random()*gameState.randomTime)+gameState.randomTime);*/
            },  
            startAt: 0,
            timeScale: 1,
            repeat: -1
        }); 
        
        /*this.input.on('pointerdown', function(pointer){
                gameState.createTroop(gameState.globalScene,gameState.humanTrooper.Tsprite,gameState.humanTrooper.Tdepth,1,gameState.input.x,gameState.input.y,gameState.humanTrooper.Thealth,gameState.humanTrooper.Tdamage,gameState.humanTrooper.TSpeed,gameState.humanTrooper.TattackSpeed,gameState.humanTrooper.Trange,gameState.humanTrooper.TprojectileSpeed,gameState.humanTrooper.TunitType,gameState.humanTrooper.TtargetType,gameState.humanTrooper.TattackType,gameState.humanTrooper.TbulletSprite,gameState.humanTrooper.TsplashRange);
        });*/
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
        else if(gameState.input.x >= window.innerWidth -330 && gameState.scrollLock < window.innerWidth/15.2){
            gameState.camera.x -= 10;
            for(var i = 0; i <gameState.shopElements.length ; i++){
                gameState.shopElements[i].x += 10;
            }
            gameState.scrollLock ++;
        }
        
        if(gameState.select1.hhealth <= 0){
            for (var i = 0; i < selectElement.length; i ++){
                selectElement[i].destroy();
            }
            gameState.camera.x = 0;
            this.add.text( 500, 250, `Defeat`, {fill: '#FFFFFF',fontSize: 'bold 60px'}).setOrigin(0,0);
            this.physics.pause();
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    this.scene.stop('HumanCampaignLevelFourScene');
                    this.scene.start('CampaignScene');
                },  
                startAt: 0,
                timeScale: 1
            }); 
        }
        else if(gameState.select2.hhealth <= 0){
            for (var i = 0; i < selectElement.length; i ++){
                selectElement[i].destroy();
            }
            gameState.humanLevel = 5;
            gameState.camera.x = 0;
            this.add.text( 500, 250, `Victory`, {fill: '#FFFFFF',fontSize: 'bold 60px'}).setOrigin(0,0);
            this.physics.pause();
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    this.scene.stop('HumanCampaignLevelFourScene');
                    this.scene.start('CampaignScene');
                },  
                startAt: 0,
                timeScale: 1
            });
        }
    }
}









class HumanCampaignLevelFiveScene extends Phaser.Scene {
    constructor() {
		super({ key: 'HumanCampaignLevelFiveScene' })
	}
    preload(){
        
    }
    create() {
        gameState.faction = "human";
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
        gameState.enemyfaction = "entoss";
        
        gameState.createEnvironment = function(scene){
            scene.add.image(0,0,'caveBg').setOrigin(0,0);
            gameState.select1 = gameState.team1.create(105,200,`${gameState.faction}hq`).setDepth(0);
            gameState.select1.hhealth = 1000;
            gameState.select1.UT = 'hq';
            gameState.select2 = gameState.team2.create(1850,200,`${gameState.enemyfaction}outpostred`).setDepth(0).setFlipX(true);
            gameState.select2.hhealth = 1250;
            gameState.select2.UT = 'hq';
            
            gameState.goldProduction = 8;
            gameState.randomTime = Math.ceil(Math.random()*5000)+6000;
            
            gameState.shopElements = [];
            selectElement = scene.add.image(0,400,'shopBar').setOrigin(0,0).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( 10, 10, `Gold : ${gameState.gold}`, {fill: '#FFFFFF',fontSize: 'bold 25px'}).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( 10, 35, `HQ : ${gameState.select1.hhealth}`, {fill: '#FFFFFF', fontSize: 'bold 15px'}).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( window.innerWidth - 450, 15, `Enemy HQ : ${gameState.select2.hhealth}`, {fill: '#FFFFFF', fontSize: 'bold 15px'}).setDepth(2);
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
            }
        }
        gameState.invOpen = false;
        gameState.gold = 0;
        
        
        
        gameState.createEnvironment(this);
        
        gameState.team1troops = this.physics.add.group();
        gameState.team1troops.getChildren().forEach(troop => {
            
        });
        gameState.bulletTime = function(bullet,scene,Ttarget,bulletSpeed,damage,enemies,splashRange){
            var alive = 0;
            scene.physics.add.overlap(bullet, Ttarget,(robot,ammo)=>{
                var array = [];
                
                for (var i = 0; i < enemies.length; i++){
                    var dist = Phaser.Math.Distance.BetweenPoints(enemies[i], bullet);
                    console.log(splashRange);
                    if(dist < splashRange && enemies[i].UT !== "air"){
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
            delay: gameState.randomTime,
            callback: ()=>{ 
                var random = 0;
                var troops = gameState.team1.getChildren().length;
                var random = Math.ceil(Math.random()*1);
                if(random == 1){ 
                    gameState.createTroop(gameState.globalScene,gameState.entossSpitter.Tsprite+'red',gameState.entossSpitter.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.entossSpitter.Thealth,gameState.entossSpitter.Tdamage,gameState.entossSpitter.TSpeed,gameState.entossSpitter.TattackSpeed,gameState.entossSpitter.Trange,gameState.entossSpitter.TprojectileSpeed,gameState.entossSpitter.TunitType,gameState.entossSpitter.TtargetType,gameState.entossSpitter.TattackType,gameState.entossSpitter.TbulletSprite,gameState.entossSpitter.TsplashRange);
                    gameState.randomTime = Math.ceil(Math.random()*5500)+6500;
                    enemyTroopsTimer.delay = gameState.randomTime;
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
            delay: 120000,
            callback: ()=>{
                gameState.goldProduction = 10;
                /*gameState.randomTime *= 0.75;
                enemyTroopsTimer.delay = (Math.ceil(Math.random()*gameState.randomTime)+gameState.randomTime);*/
            },  
            startAt: 0,
            timeScale: 1,
            repeat: -1
        }); 
        
        /*this.input.on('pointerdown', function(pointer){
                gameState.createTroop(gameState.globalScene,gameState.humanTrooper.Tsprite,gameState.humanTrooper.Tdepth,1,gameState.input.x,gameState.input.y,gameState.humanTrooper.Thealth,gameState.humanTrooper.Tdamage,gameState.humanTrooper.TSpeed,gameState.humanTrooper.TattackSpeed,gameState.humanTrooper.Trange,gameState.humanTrooper.TprojectileSpeed,gameState.humanTrooper.TunitType,gameState.humanTrooper.TtargetType,gameState.humanTrooper.TattackType,gameState.humanTrooper.TbulletSprite,gameState.humanTrooper.TsplashRange);
        });*/
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
        else if(gameState.input.x >= window.innerWidth -330 && gameState.scrollLock < window.innerWidth/15.2){
            gameState.camera.x -= 10;
            for(var i = 0; i <gameState.shopElements.length ; i++){
                gameState.shopElements[i].x += 10;
            }
            gameState.scrollLock ++;
        }
        
        if(gameState.select1.hhealth <= 0){
            for (var i = 0; i < selectElement.length; i ++){
                selectElement[i].destroy();
            }
            gameState.camera.x = 0;
            this.add.text( 500, 250, `Defeat`, {fill: '#FFFFFF',fontSize: 'bold 60px'}).setOrigin(0,0);
            this.physics.pause();
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    this.scene.stop('HumanCampaignLevelFiveScene');
                    this.scene.start('CampaignScene');
                },  
                startAt: 0,
                timeScale: 1
            }); 
        }
        else if(gameState.select2.hhealth <= 0){
            for (var i = 0; i < selectElement.length; i ++){
                selectElement[i].destroy();
            }
            gameState.humanLevel = 6;
            gameState.camera.x = 0;
            this.add.text( 500, 250, `Victory`, {fill: '#FFFFFF',fontSize: 'bold 60px'}).setOrigin(0,0);
            this.physics.pause();
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    this.scene.stop('HumanCampaignLevelFiveScene');
                    this.scene.start('CampaignScene');
                },  
                startAt: 0,
                timeScale: 1
            });
        }
    }
}








class HumanCampaignLevelSixScene extends Phaser.Scene {
    constructor() {
		super({ key: 'HumanCampaignLevelSixScene' })
	}
    preload(){
        
    }
    create() {
        gameState.faction = "human";
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
        gameState.enemyfaction = "entoss";
        
        gameState.createEnvironment = function(scene){
            scene.add.image(0,0,'caveBg').setOrigin(0,0);
            gameState.select1 = gameState.team1.create(105,200,`${gameState.faction}hq`).setDepth(0);
            gameState.select1.hhealth = 1100;
            gameState.select1.UT = 'hq';
            gameState.select2 = gameState.team2.create(1850,200,`${gameState.enemyfaction}outpostred`).setDepth(0).setFlipX(true);
            gameState.select2.hhealth = 1500;
            gameState.select2.UT = 'hq';
            
            gameState.goldProduction = 8;
            gameState.randomTime = Math.ceil(Math.random()*5000)+6000;
            
            gameState.shopElements = [];
            selectElement = scene.add.image(0,400,'shopBar').setOrigin(0,0).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( 10, 10, `Gold : ${gameState.gold}`, {fill: '#FFFFFF',fontSize: 'bold 25px'}).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( 10, 35, `HQ : ${gameState.select1.hhealth}`, {fill: '#FFFFFF', fontSize: 'bold 15px'}).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( window.innerWidth - 450, 15, `Enemy HQ : ${gameState.select2.hhealth}`, {fill: '#FFFFFF', fontSize: 'bold 15px'}).setDepth(2);
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
                       gameState.gold -= gameState.humanTank.Tcost; 
                        gameState.createTroop(gameState.globalScene,gameState.humanTank.Tsprite,gameState.humanTank.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.humanTank.Thealth,gameState.humanTank.Tdamage,gameState.humanTank.TSpeed,gameState.humanTank.TattackSpeed,
                    gameState.humanTank.Trange,gameState.humanTank.TprojectileSpeed,gameState.humanTank.TunitType,gameState.humanTank.TtargetType,gameState.humanTank.TattackType,gameState.humanTank.TbulletSprite,gameState.humanTank.TsplashRange);
                    }
                });
                selectElement = scene.add.text( 90, 470, `${gameState.humanTank.Tcost}g`, {fill: '#OOOOOO', fontSize: '15px'}).setDepth(2);
                gameState.shopElements.push(selectElement);
            }
        }
        gameState.invOpen = false;
        gameState.gold = 0;
        
        
        
        gameState.createEnvironment(this);
        
        gameState.bulletTime = function(bullet,scene,Ttarget,bulletSpeed,damage,enemies,splashRange){
            var alive = 0;
            console.log(enemies.length);
            scene.physics.add.overlap(bullet, Ttarget,(robot,ammo)=>{
                var array = [];
                
                for (var i = 0; i < enemies.length; i++){
                    var dist = Phaser.Math.Distance.BetweenPoints(enemies[i], bullet);
                    if(dist < splashRange && enemies[i].UT !== "air"){
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
            delay: gameState.randomTime,
            callback: ()=>{ 
                var random = 0;
                var troops = gameState.team1.getChildren().length;
                var random = Math.ceil(Math.random()*30);
                if(random >= 1 && random <= 27){ 
                    gameState.createTroop(gameState.globalScene,gameState.entossSpitter.Tsprite+'red',gameState.entossSpitter.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.entossSpitter.Thealth,gameState.entossSpitter.Tdamage,gameState.entossSpitter.TSpeed,gameState.entossSpitter.TattackSpeed,gameState.entossSpitter.Trange,gameState.entossSpitter.TprojectileSpeed,gameState.entossSpitter.TunitType,gameState.entossSpitter.TtargetType,gameState.entossSpitter.TattackType,gameState.entossSpitter.TbulletSprite,gameState.entossSpitter.TsplashRange);
                    gameState.randomTime = Math.ceil(Math.random()*3500)+4000;
                    enemyTroopsTimer.delay = gameState.randomTime;
                }
                else { 
                    gameState.createTroop(gameState.globalScene,gameState.entossGiant.Tsprite+'red',gameState.entossGiant.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.entossGiant.Thealth,gameState.entossGiant.Tdamage,gameState.entossGiant.TSpeed,gameState.entossGiant.TattackSpeed,gameState.entossGiant.Trange,gameState.entossGiant.TprojectileSpeed,gameState.entossGiant.TunitType,gameState.entossGiant.TtargetType,gameState.entossGiant.TattackType,gameState.entossGiant.TbulletSprite,gameState.entossGiant.TsplashRange);
                    gameState.randomTime = Math.ceil(Math.random()*5000)+5000;
                    enemyTroopsTimer.delay = gameState.randomTime;
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
            delay: 120000,
            callback: ()=>{
                gameState.goldProduction = gameState.goldProduction+ 1;
                /*gameState.randomTime *= 0.75;
                enemyTroopsTimer.delay = (Math.ceil(Math.random()*gameState.randomTime)+gameState.randomTime);*/
            },  
            startAt: 0,
            timeScale: 1,
            repeat: -1
        }); 
        
        this.input.on('pointerdown', function(pointer){
                /*gameState.createTroop(gameState.globalScene,gameState.humanTrooper.Tsprite,gameState.humanTrooper.Tdepth,1,gameState.input.x+gameState.camera.x,gameState.input.y,gameState.humanTrooper.Thealth,gameState.humanTrooper.Tdamage,gameState.humanTrooper.TSpeed,gameState.humanTrooper.TattackSpeed,gameState.humanTrooper.Trange,gameState.humanTrooper.TprojectileSpeed,gameState.humanTrooper.TunitType,gameState.humanTrooper.TtargetType,gameState.humanTrooper.TattackType,gameState.humanTrooper.TbulletSprite,gameState.humanTrooper.TsplashRange);
                console.log(Phaser.Math.Distance.BetweenPoints(gameState.team1.getChildren()[gameState.team1.getChildren().length-1], gameState.select1));*/
            console.log(gameState.team1.getChildren().length);
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
        else if(gameState.input.x >= window.innerWidth -330 && gameState.scrollLock < window.innerWidth/15.2){
            gameState.camera.x -= 10;
            for(var i = 0; i <gameState.shopElements.length ; i++){
                gameState.shopElements[i].x += 10;
            }
            gameState.scrollLock ++;
        }
        
        if(gameState.select1.hhealth <= 0){
            for (var i = 0; i < selectElement.length; i ++){
                selectElement[i].destroy();
            }
            gameState.camera.x = 0;
            this.add.text( 500, 250, `Defeat`, {fill: '#FFFFFF',fontSize: 'bold 60px'}).setOrigin(0,0);
            this.physics.pause();
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    this.scene.stop('HumanCampaignLevelSixScene');
                    this.scene.start('CampaignScene');
                },  
                startAt: 0,
                timeScale: 1
            }); 
        }
        else if(gameState.select2.hhealth <= 0){
            for (var i = 0; i < selectElement.length; i ++){
                selectElement[i].destroy();
            }
            gameState.humanLevel = 7;
            gameState.camera.x = 0;
            this.add.text( 500, 250, `Victory`, {fill: '#FFFFFF',fontSize: 'bold 60px'}).setOrigin(0,0);
            this.physics.pause();
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    this.scene.stop('HumanCampaignLevelSixScene');
                    this.scene.start('CampaignScene');
                },  
                startAt: 0,
                timeScale: 1
            });
        }
    }
}










class HumanCampaignLevelSevenScene extends Phaser.Scene {
    constructor() {
		super({ key: 'HumanCampaignLevelSevenScene' })
	}
    preload(){
        
    }
    create() {
        gameState.faction = "human";
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
        gameState.enemyfaction = "entoss";
        
        gameState.createEnvironment = function(scene){
            scene.add.image(0,0,'canyonCave2Bg').setOrigin(0,0);
            gameState.select1 = gameState.team1.create(105,200,`${gameState.faction}hq`).setDepth(0);
            gameState.select1.hhealth = 1200;
            gameState.select1.UT = 'hq';
            gameState.select2 = gameState.team2.create(1850,200,`${gameState.enemyfaction}outpostred`).setDepth(0).setFlipX(true);
            gameState.select2.hhealth = 1750;
            gameState.select2.UT = 'hq';
            
            gameState.goldProduction = 10;
            gameState.randomTime = Math.ceil(Math.random()*5000)+6000;
            
            gameState.shopElements = [];
            selectElement = scene.add.image(0,400,'shopBar').setOrigin(0,0).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( 10, 10, `Gold : ${gameState.gold}`, {fill: '#FFFFFF',fontSize: 'bold 25px'}).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( 10, 35, `HQ : ${gameState.select1.hhealth}`, {fill: '#FFFFFF', fontSize: 'bold 15px'}).setDepth(2);
            gameState.shopElements.push(selectElement);
            selectElement = scene.add.text( window.innerWidth - 450, 15, `Enemy HQ : ${gameState.select2.hhealth}`, {fill: '#FFFFFF', fontSize: 'bold 15px'}).setDepth(2);
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
                       gameState.gold -= gameState.humanTank.Tcost; 
                        gameState.createTroop(gameState.globalScene,gameState.humanTank.Tsprite,gameState.humanTank.Tdepth,1,-100,Math.ceil(Math.random()*100)+150,gameState.humanTank.Thealth,gameState.humanTank.Tdamage,gameState.humanTank.TSpeed,gameState.humanTank.TattackSpeed,
                    gameState.humanTank.Trange,gameState.humanTank.TprojectileSpeed,gameState.humanTank.TunitType,gameState.humanTank.TtargetType,gameState.humanTank.TattackType,gameState.humanTank.TbulletSprite,gameState.humanTank.TsplashRange);
                    }
                });
                selectElement = scene.add.text( 90, 470, `${gameState.humanTank.Tcost}g`, {fill: '#OOOOOO', fontSize: '15px'}).setDepth(2);
                gameState.shopElements.push(selectElement);
            }
        }
        gameState.invOpen = false;
        gameState.gold = 0;
        
        
        
        gameState.createEnvironment(this);
        
        gameState.bulletTime = function(bullet,scene,Ttarget,bulletSpeed,damage,enemies,splashRange){
            var alive = 0;
            console.log(enemies.length);
            scene.physics.add.overlap(bullet, Ttarget,(robot,ammo)=>{
                var array = [];
                
                for (var i = 0; i < enemies.length; i++){
                    var dist = Phaser.Math.Distance.BetweenPoints(enemies[i], bullet);
                    if(dist < splashRange && enemies[i].UT !== "air"){
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
            delay: gameState.randomTime,
            callback: ()=>{ 
                var random = 0;
                var troops = gameState.team1.getChildren().length;
                var random = Math.ceil(Math.random()*30);
                if(random >= 1 && random <= 25){ 
                    gameState.createTroop(gameState.globalScene,gameState.entossSpitter.Tsprite+'red',gameState.entossSpitter.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.entossSpitter.Thealth,gameState.entossSpitter.Tdamage,gameState.entossSpitter.TSpeed,gameState.entossSpitter.TattackSpeed,gameState.entossSpitter.Trange,gameState.entossSpitter.TprojectileSpeed,gameState.entossSpitter.TunitType,gameState.entossSpitter.TtargetType,gameState.entossSpitter.TattackType,gameState.entossSpitter.TbulletSprite,gameState.entossSpitter.TsplashRange);
                    gameState.randomTime = Math.ceil(Math.random()*3000)+4000;
                    enemyTroopsTimer.delay = gameState.randomTime;
                }
                else { 
                    gameState.createTroop(gameState.globalScene,gameState.entossGiant.Tsprite+'red',gameState.entossGiant.Tdepth,2,2100,Math.ceil(Math.random()*150)+100,gameState.entossGiant.Thealth,gameState.entossGiant.Tdamage,gameState.entossGiant.TSpeed,gameState.entossGiant.TattackSpeed,gameState.entossGiant.Trange,gameState.entossGiant.TprojectileSpeed,gameState.entossGiant.TunitType,gameState.entossGiant.TtargetType,gameState.entossGiant.TattackType,gameState.entossGiant.TbulletSprite,gameState.entossGiant.TsplashRange);
                    gameState.randomTime = Math.ceil(Math.random()*4500)+5000;
                    enemyTroopsTimer.delay = gameState.randomTime;
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
            delay: 120000,
            callback: ()=>{
                gameState.goldProduction = gameState.goldProduction + 5;
                /*gameState.randomTime *= 0.75;
                enemyTroopsTimer.delay = (Math.ceil(Math.random()*gameState.randomTime)+gameState.randomTime);*/
            },  
            startAt: 0,
            timeScale: 1,
            repeat: -1
        }); 
        
        this.input.on('pointerdown', function(pointer){
                /*gameState.createTroop(gameState.globalScene,gameState.humanTrooper.Tsprite,gameState.humanTrooper.Tdepth,1,gameState.input.x+gameState.camera.x,gameState.input.y,gameState.humanTrooper.Thealth,gameState.humanTrooper.Tdamage,gameState.humanTrooper.TSpeed,gameState.humanTrooper.TattackSpeed,gameState.humanTrooper.Trange,gameState.humanTrooper.TprojectileSpeed,gameState.humanTrooper.TunitType,gameState.humanTrooper.TtargetType,gameState.humanTrooper.TattackType,gameState.humanTrooper.TbulletSprite,gameState.humanTrooper.TsplashRange);
                console.log(Phaser.Math.Distance.BetweenPoints(gameState.team1.getChildren()[gameState.team1.getChildren().length-1], gameState.select1));*/
            console.log(gameState.team1.getChildren().length);
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
        else if(gameState.input.x >= window.innerWidth -330 && gameState.scrollLock < window.innerWidth/15.2){
            gameState.camera.x -= 10;
            for(var i = 0; i <gameState.shopElements.length ; i++){
                gameState.shopElements[i].x += 10;
            }
            gameState.scrollLock ++;
        }
        
        if(gameState.select1.hhealth <= 0){
            for (var i = 0; i < selectElement.length; i ++){
                selectElement[i].destroy();
            }
            gameState.camera.x = 0;
            this.add.text( 500, 250, `Defeat`, {fill: '#FFFFFF',fontSize: 'bold 60px'}).setOrigin(0,0);
            this.physics.pause();
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    this.scene.stop('HumanCampaignLevelSevenScene');
                    this.scene.start('CampaignScene');
                },  
                startAt: 0,
                timeScale: 1
            }); 
        }
        else if(gameState.select2.hhealth <= 0){
            for (var i = 0; i < selectElement.length; i ++){
                selectElement[i].destroy();
            }
            gameState.humanLevel = 8;
            gameState.camera.x = 0;
            this.add.text( 500, 250, `Victory`, {fill: '#FFFFFF',fontSize: 'bold 60px'}).setOrigin(0,0);
            this.physics.pause();
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    this.scene.stop('HumanCampaignLevelSevenScene');
                    this.scene.start('CampaignScene');
                },  
                startAt: 0,
                timeScale: 1
            });
        }
    }
}