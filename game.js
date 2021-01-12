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
    scene:[MenuScene, SkirmishScene, GameScene],
    scale: {
        zoom: 1.3
    }
};

const game = new Phaser.Game(config);

let gameState = {
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
        TbulletSprite: 'bullet1'
    },
    alienMegaWalker: {
        Tsprite: 'alienmegawalker',
        Tcost: 300,
        Tdepth : 1,
        Tdamage: 0.8,
        Thealth: 400,
        TattackSpeed : 10,
        TSpeed : 100,
        Trange: 250,
        TprojectileSpeed: 1500,
        TunitType: 'ground',
        TtargetType: 'ground',
        TattackType: 'single',
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
        TbulletSprite: 'bullet2'
    },
    humanTank: {
        Tsprite: 'humantank',
        Tcost: 100,
        Tdepth : 0,
        Tdamage: 70,
        Thealth: 150,
        TattackSpeed : 5000,
        TSpeed : 50,
        Trange: 350,
        TprojectileSpeed: 3000,
        TunitType: 'ground',
        TtargetType: 'ground',
        TattackType: 'splash',
        TbulletSprite: 'bullet3'
    },
    humanBattleCruiser: {
        Tsprite: 'humanbattlecruiser',
        Tcost: 400,
        Tdepth : 1,
        Tdamage: 65,
        Thealth: 450,
        TattackSpeed : 3000,
        TSpeed : 30,
        Trange: 275,
        TprojectileSpeed: 3000,
        TunitType: 'air',
        TtargetType: 'ground&air',
        TattackType: 'single',
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
        TbulletSprite: 'bullet6'
    },
    demonFlarer: {
        Tsprite: 'demonflarer',
        Tcost: 25,
        Tdepth : 0,
        Tdamage: 10,
        Thealth: 50,
        TattackSpeed : 750,
        TSpeed : 130,
        Trange: 150,
        TprojectileSpeed: 1000,
        TunitType: 'ground',
        TtargetType: 'ground&air',
        TattackType: 'single',
        TbulletSprite: 'bullet7'
    },
    demonFly: {
        Tsprite: 'demonfly',
        Tcost: 75,
        Tdepth : 0,
        Tdamage: 40,
        Thealth: 125,
        TattackSpeed : 1000,
        TSpeed : 175,
        Trange: 125,
        TprojectileSpeed: 1000,
        TunitType: 'air',
        TtargetType: 'ground&air',
        TattackType: 'single',
        TbulletSprite: 'bullet7'
    },
}
