//definindo variáveis globais que serão utilizadas durante o jogo
var jogador;
var bolas = [];
var pontos = 0;
var placar;

//conectando cena do jogo com a cena de introdução
class TelaJogo extends Phaser.Scene {
  constructor() {
    super({ key: "TelaJogo" });
  }

  //carregando assets que serão usados durante o jogo
  preload() {
    this.load.image("bg", "assets/bg.png");
    this.load.image("chao", "assets/chao.png");
    this.load.image("plat1", "assets/plataforma_curta.png");
    this.load.image("plat2", "assets/plataforma_longa.png");
    this.load.spritesheet("jogador", "assets/baianinho.png", {
      frameWidth: 200,
      frameHeight: 280,
    });
    this.load.image("bola1", "assets/bolas_1.png");
    this.load.image("bola2", "assets/bolas_2.png");
    this.load.image("bola3", "assets/bolas_3.png");
    this.load.image("bola4", "assets/bolas_4.png");
    this.load.image("bola5", "assets/bolas_5.png");
    this.load.image("bola6", "assets/bolas_6.png");
    this.load.image("bola7", "assets/bolas_7.png"),
      this.load.image("bola8", "assets/bolas_8.png");
  }

  create() {
    //adicionando plano de fundo
    this.add.image(400, 300, "bg");

    //adicionando chão ao jogo
    var chao = this.physics.add.staticImage(400, 570, "chao");

    //adicionando jogador e sua colisão com o mundo e o chão
    jogador = this.physics.add.sprite(100, 400, "jogador").setScale(0.2);
    jogador.setCollideWorldBounds(true);
    this.physics.add.collider(jogador, chao);

    //adicionando plataformas e suas colisões com o jogador
    var plat1 = this.physics.add
      .staticImage(600, 450, "plat1")
      .setScale(1.5)
      .refreshBody();
    this.physics.add.collider(jogador, plat1);
    var plat2 = this.physics.add
      .staticImage(400, 350, "plat2")
      .setScale(1.5)
      .refreshBody();
    this.physics.add.collider(jogador, plat2);
    var plat3 = this.physics.add
      .staticImage(200, 275, "plat2")
      .setScale(1.5)
      .refreshBody();
    this.physics.add.collider(jogador, plat3);
    var plat4 = this.physics.add
      .staticImage(400, 200, "plat1")
      .setScale(1.5)
      .refreshBody();
    this.physics.add.collider(jogador, plat4);

    //adicionando as bolas de sinuca que serão coletadas durante o jogo
    bolas.push(
      this.physics.add
        .staticImage(575, 415, "bola1")
        .setScale(0.08)
        .refreshBody(),
      this.physics.add
        .staticImage(625, 415, "bola2")
        .setScale(0.08)
        .refreshBody(),
      this.physics.add
        .staticImage(450, 315, "bola3")
        .setScale(0.08)
        .refreshBody(),
      this.physics.add
        .staticImage(400, 315, "bola4")
        .setScale(0.08)
        .refreshBody(),
      this.physics.add
        .staticImage(350, 315, "bola5")
        .setScale(0.08)
        .refreshBody(),
      this.physics.add
        .staticImage(150, 240, "bola6")
        .setScale(0.08)
        .refreshBody(),
      this.physics.add
        .staticImage(250, 240, "bola7")
        .setScale(0.08)
        .refreshBody(),
      this.physics.add
        .staticImage(400, 165, "bola8")
        .setScale(0.08)
        .refreshBody()
    );

    //adicionando placar ao jogo
    placar = this.add.text(10, 550, 'Pontos:' + pontos, {fontSize:'30px', fill:'#000', fontStyle: 'bold'});

    //adicionando a funcionalidade de coletar as bolas de sinuca e adicionar pontuação ao placar
    this.physics.add.overlap(jogador, bolas[0], function () {
      bolas[0].destroy();
      pontos += 1;
      placar.setText('Pontos:' + pontos);
    });
    this.physics.add.overlap(jogador, bolas[1], function () {
      bolas[1].destroy();
      pontos += 1;
      placar.setText('Pontos:' + pontos);
    });
    this.physics.add.overlap(jogador, bolas[2], function () {
      bolas[2].destroy();
      pontos += 1;
      placar.setText('Pontos:' + pontos);
    });
    this.physics.add.overlap(jogador, bolas[3], function () {
      bolas[3].destroy();
      pontos += 1;
      placar.setText('Pontos:' + pontos);
    });
    this.physics.add.overlap(jogador, bolas[4], function () {
      bolas[4].destroy();
      pontos += 1;
      placar.setText('Pontos:' + pontos);
    });
    this.physics.add.overlap(jogador, bolas[5], function () {
      bolas[5].destroy();
      pontos += 1;
      placar.setText('Pontos:' + pontos);
    });
    this.physics.add.overlap(jogador, bolas[6], function () {
      bolas[6].destroy();
      pontos += 1;
      placar.setText('Pontos:' + pontos);
    });
    this.physics.add.overlap(jogador, bolas[7], function () {
      bolas[7].destroy();
      pontos += 1;
      placar.setText('Pontos:' + pontos);
    });

    

    //adicionando animação do personagem ao andar ou ficar parado
    this.anims.create({
      key: "andarDireita",
      frames: this.anims.generateFrameNumbers("jogador", {
        start: 5,
        end: 8,
      }), //definição de qual frame será utilizado
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "andarEsquerda",
      frames: this.anims.generateFrameNumbers("jogador", { start: 0, end: 4 }), //definição de qual frame será utilizado
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "parado",
      frames: this.anims.generateFrameNumbers("jogador", { start: 5, end: 5 }), //definição de qual frame será utilizado
      frameRate: 10,
      repeat: -1,
    });

    this.teclado = this.input.keyboard.createCursorKeys();
  }

  update() {
    // Verificar se o jogador está tocando em algum objeto estático (chão ou plataformas)
    const touchingGroundOrPlatform =
      jogador.body.touching.down ||
      jogador.body.touching.left ||
      jogador.body.touching.right;

    // Movimento para a direita
    if (this.teclado.right.isDown) {
      jogador.setVelocityX(160);
      jogador.anims.play("andarDireita", true);
    }
    // Movimento para a esquerda
    else if (this.teclado.left.isDown) {
      jogador.setVelocityX(-160);
      jogador.anims.play("andarEsquerda", true);
    }
    // Parar o movimento horizontal quando nenhuma tecla de movimento estiver pressionada
    else {
      jogador.setVelocityX(0);
      jogador.anims.play("parado", true);
    }

    // Verificar se a tecla de seta para cima está pressionada e se o jogador está tocando no chão ou em alguma plataforma
    if (this.teclado.up.isDown && touchingGroundOrPlatform) {
      jogador.setVelocityY(-250);
    }

    //verificar pontuação para que ao chegar a 8 o jogo pare e o jogador possa ler a mensagem de parabéns
    if (pontos > 7) {
      this.physics.pause();
      this.add.text(
        0,
        25,
        "                       Parabéns \n  Graças a você baianinho poderá voltar a jogar sinuca:)",
        { fontSize: "23px", fill: "#000000" }


      );
    }
  }
}
