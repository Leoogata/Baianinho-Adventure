//definindo dimensões do jogo
var gameState = {
  larguraJogo: 800,
  alturaJogo: 600,
};

//definindo configurações do jogo
var config = {
  type: Phaser.AUTO,
  width: gameState.larguraJogo,
  height: gameState.alturaJogo,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [Menu, Hist, TelaJogo],
};


var game = new Phaser.Game(config);
