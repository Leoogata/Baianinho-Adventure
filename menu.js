//Inciando primeira cena do jogo
class Menu extends Phaser.Scene {
  constructor() {
    super({ key: "Menu" });
  }

  //carregando imagens usadas no menu
  preload() {
    this.load.image("menu", "assets/baianinho_menu.png");
    this.load.image("start", "assets/start.png");
  }

  //adicionando plano de fundo do menu
  create() {
    var menu = this.add.image(
      gameState.larguraJogo / 2,
      gameState.alturaJogo / 2,
      "menu"
    );

    //adicionando botão de start e funcionalidade para ao cliclar transicionar para próxima cena
    var start = this.add.image(400, 400, "start").setInteractive();
    start.on("pointerdown", function () {
      this.scene.start("Hist");
    },
    this
    );
  }
}
