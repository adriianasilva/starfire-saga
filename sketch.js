

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  frameRate(40);
  somDoJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
  px = 0;
  py = height-135;
  retangleWidth = 110;
  retangleHeigth = 135;
  hipstaWidth = 220;
  hipstaHeight = 275;
}

function keyPressed(){
  jogo.keyPressed(key);
  }

function draw() {
 cenas[cenaAtual].draw();
}
