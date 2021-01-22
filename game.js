const config = {
    type: Phaser.AUTO,
    width : 2000,
    height: 500,
    backgroundColor: "#C0C0C0",
    audio: {
        disableWebAudio: true
      },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0},
            enableBody: true
            //debug: true
        }
    },
    scene:[MenuScene, CampaignScene, SkirmishScene, HumanMissionBriefingScene, HumanCampaignLevelOneScene, HumanCampaignLevelTwoScene, GameScene],
    scale: {
        zoom: 1.3
    }
};

const game = new Phaser.Game(config);

let gameState = {
    humanLevel: 1,
    alienDrone: {
        Tsprite: 'aliendrone',
        Tcost: 50,
        Tdepth : 0,
        Tdamage: 12,
        Thealth: 60,
        TattackSpeed : 860,
        TSpeed : 100,
        Trange: 110,
        TprojectileSpeed: 1000,
        TunitType: 'ground',
        TtargetType: 'ground',
        TattackType: 'single',
        TsplashRange: 0,
        TbulletSprite: 'bullet1'
    },
    alienWalker: {
        Tsprite: 'alienwalker',
        Tcost: 75,
        Tdepth : 0,
        Tdamage: 20,
        Thealth: 85,
        TattackSpeed : 1333,
        TSpeed : 90,
        Trange: 225,
        TprojectileSpeed: 700,
        TunitType: 'ground',
        TtargetType: 'ground&air',
        TattackType: 'single',
        TsplashRange: 0,
        TbulletSprite: 'bullet1'
    },
    alienMegaWalker: {
        Tsprite: 'alienmegawalker',
        Tcost: 300,
        Tdepth : 0,
        Tdamage: 0.8,
        Thealth: 400,
        TattackSpeed : 10,
        TSpeed : 100,
        Trange: 250,
        TprojectileSpeed: 1500,
        TunitType: 'ground',
        TtargetType: 'ground',
        TattackType: 'single',
        TsplashRange: 0,
        TbulletSprite: 'bullet4'
    },
    alienPlasmaShip: {
        Tsprite: 'alienplasmaship',
        Tcost: 200,
        Tdepth : 1,
        Tdamage: 0.6,
        Thealth: 150,
        TattackSpeed : 10,
        TSpeed : 60,
        Trange: 200,
        TprojectileSpeed: 1500,
        TunitType: 'air',
        TtargetType: 'ground&air',
        TattackType: 'single',
        TsplashRange: 0,
        TbulletSprite: 'bullet4'
    },
    
    
   humanTrooper: {
        Tsprite: 'humantrooper',
        Tcost: 20,
        Tdepth : 0,
        Tdamage: 2,
        Thealth: 15,
        TattackSpeed : 250,
        TSpeed : 80,
        Trange: 175,
        TprojectileSpeed: 1500,
        TunitType: 'ground',
        TtargetType: 'ground&air',
        TattackType: 'single',
        TsplashRange: 0,
        TbulletSprite: 'bullet2'
    },
    humanTank: {
        Tsprite: 'humantank',
        Tcost: 125,
        Tdepth : 0,
        Tdamage: 70,
        Thealth: 150,
        TattackSpeed : 5000,
        TSpeed : 50,
        Trange: 350,
        TprojectileSpeed: 2000,
        TunitType: 'ground',
        TtargetType: 'ground',
        TattackType: 'splash',
        TsplashRange: 40,
        TbulletSprite: 'bullet3'
    },
    humanBattleCruiser: {
        Tsprite: 'humanbattlecruiser',
        Tcost: 400,
        Tdepth : 1,
        Tdamage: 65,
        Thealth: 450,
        TattackSpeed : 2500,
        TSpeed : 30,
        Trange: 275,
        TprojectileSpeed: 2000,
        TunitType: 'air',
        TtargetType: 'ground&air',
        TattackType: 'single',
        TsplashRange: 0,
        TbulletSprite: 'bullet5'
    },
    
    demonCrawler: {
        Tsprite: 'demoncrawler',
        Tcost: 10,
        Tdepth : 0,
        Tdamage: 5,
        Thealth: 20,
        TattackSpeed : 500,
        TSpeed : 160,
        Trange: 60,
        TprojectileSpeed: 1000,
        TunitType: 'ground',
        TtargetType: 'ground',
        TattackType: 'single',
        TsplashRange: 0,
        TbulletSprite: 'bullet6'
    },
    demonFlarer: {
        Tsprite: 'demonflarer',
        Tcost: 30,
        Tdepth : 0,
        Tdamage: 10,
        Thealth: 40,
        TattackSpeed : 750,
        TSpeed : 130,
        Trange: 150,
        TprojectileSpeed: 1000,
        TunitType: 'ground',
        TtargetType: 'ground&air',
        TattackType: 'single',
        TsplashRange: 0,
        TbulletSprite: 'bullet7'
    },
    demonFly: {
        Tsprite: 'demonfly',
        Tcost: 75,
        Tdepth : 1,
        Tdamage: 30,
        Thealth: 125,
        TattackSpeed : 1000,
        TSpeed : 175,
        Trange: 125,
        TprojectileSpeed: 1000,
        TunitType: 'air',
        TtargetType: 'ground&air',
        TattackType: 'single',
        TsplashRange: 0,
        TbulletSprite: 'bullet7'
    },
    
    entossSpitter: {
        Tsprite: 'entossspitter',
        Tcost: 75,
        Tdepth : 0,
        Tdamage: 40,
        Thealth: 100,
        TattackSpeed : 2000,
        TSpeed : 100,
        Trange: 160,
        TprojectileSpeed: 200,
        TunitType: 'ground',
        TtargetType: 'ground',
        TattackType: 'splash',
        TsplashRange: 5,
        TbulletSprite: 'bullet8'
    },
    entossGiant: {
        Tsprite: 'entossgiant',
        Tcost: 250,
        Tdepth : 0,
        Tdamage: 75,
        Thealth: 300,
        TattackSpeed : 3000,
        TSpeed : 60,
        Trange: 200,
        TprojectileSpeed: 500,
        TunitType: 'ground',
        TtargetType: 'ground',
        TattackType: 'splash',
        TsplashRange: 20,
        TbulletSprite: 'bullet8'
    },
    entossBird: {
        Tsprite: 'entossbird',
        Tcost: 50,
        Tdepth : 1,
        Tdamage: 15,
        Thealth: 75,
        TattackSpeed : 600,
        TSpeed : 150,
        Trange: 150,
        TprojectileSpeed: 1000,
        TunitType: 'air',
        TtargetType: 'air',
        TattackType: 'single',
        TsplashRange: 0,
        TbulletSprite: 'bullet9'
    },
}
