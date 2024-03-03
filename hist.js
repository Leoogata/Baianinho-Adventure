//Conectando cena com o menu
class Hist extends Phaser.Scene {
  constructor() {
    super({ key: "Hist" });
  }

  //carregando imagem da história do jogo
  preload() {
    this.load.image("hist", "assets/hist.png");
  }

  create() {
    //adicionando imagem da história e funcionalidade para transicionar para próxima cena
    var hist = this.add.image(400, 300, "hist").setInteractive();
    hist.on("pointerdown", function(){
    this.scene.start("TelaJogo");
    },
    this
    );
  }
}
