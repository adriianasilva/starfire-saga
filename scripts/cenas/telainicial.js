class TelaInicial{
  constructor(){
  
  }
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  _texto(){
    textAlign(CENTER);
    textSize(100);
    textFont(fonteTelaInicial);
    text('Starfire', width/2, height/3);
    textSize(50);
    text('Uma Aventura na Floresta Lunar', width/2, height/5*2);
  }
  _botao(){
    botaoGerenciador.y= height / 7*5;
    botaoGerenciador.draw();
  
  }
}