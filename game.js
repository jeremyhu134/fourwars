const config = {
    type: Phaser.AUTO,
    width : 1000,
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
    scene:[MenuScene,InventoryScene],
    scale: {
        zoom: 1.3
    }
};

const game = new Phaser.Game(config);

let gameState = {
    alienDrone: {
        Tsprite: 'aliendrone',
        Tdepth : 0,
        Tdamage: 8,
        Thealth: 30,
        TattackSpeed : 1000,
        TSpeed : 100,
        Trange: 110,
        TprojectileSpeed: 1000,
        TattackType: 'single',
        TbulletSprite: 'bullet1'
    },
    alienWalker: {
        Tsprite: 'alienwalker',
        Tdepth : 0,
        Tdamage: 20,
        Thealth: 50,
        TattackSpeed : 1500,
        TSpeed : 90,
        Trange: 200,
        TprojectileSpeed: 700,
        TattackType: 'single',
        TbulletSprite: 'bullet1'
    },
    alienMegaWalker: {
        Tsprite: 'alienmegawalker',
        Tdepth : 1,
        Tdamage: 0.8,
        Thealth: 400,
        TattackSpeed : 10,
        TSpeed : 100,
        Trange: 250,
        TprojectileSpeed: 1500,
        TattackType: 'single',
        TbulletSprite: 'bullet4'
    },
    
    
   humanTrooper: {
        Tsprite: 'humantrooper',
        Tdepth : 0,
        Tdamage: 2,
        Thealth: 15,
        TattackSpeed : 250,
        TSpeed : 80,
        Trange: 175,
        TprojectileSpeed: 1500,
        TattackType: 'single',
        TbulletSprite: 'bullet2'
    },
    humanTank: {
        Tsprite: 'humantank',
        Tdepth : 0,
        Tdamage: 70,
        Thealth: 150,
        TattackSpeed : 5000,
        TSpeed : 50,
        Trange: 350,
        TprojectileSpeed: 3000,
        TattackType: 'single',
        TbulletSprite: 'bullet3'
    },
    humanBattleCruiser: {
        Tsprite: 'humanbattlecruiser',
        Tdepth : 1,
        Tdamage: 100,
        Thealth: 450,
        TattackSpeed : 3000,
        TSpeed : 30,
        Trange: 275,
        TprojectileSpeed: 3000,
        TattackType: 'single',
        TbulletSprite: 'bullet5'
    },
}
