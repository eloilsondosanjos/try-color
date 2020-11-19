const bolas = document.getElementsByClassName('ball');
const textoCor = document.getElementById('rgb-color');
const textoMensagem = document.getElementById('answer');
const botaoReiniciar = document.getElementById('reset-game')
const cores= [];

function numeroAleatorio(mul) {
  const numero = Math.floor(Math.random() * mul);

  return numero;
}

function corAleatoria() {
  const rgb = `rgb(${numeroAleatorio(256)}, ${numeroAleatorio(256)}, ${numeroAleatorio(256)})`;

  return rgb;
}

function cliqueNaBola(event) {
  const corSelecionada = event.target.style.backgroundColor;

  if (corSelecionada === textoCor.textContent) {
    textoMensagem.textContent = 'Acertou';
  } else {
    textoMensagem.textContent = 'Errou! Tente novamente!'
  }

  return corSelecionada
}

for (let bola = 0; bola < bolas.length; bola++) {
  const cor = corAleatoria()
  bolas[bola].style.backgroundColor = cor;
  cores[bola] = cor;
  bolas[bola].addEventListener('click', cliqueNaBola)
};

function adicionaCorAleatoria() {
  textoCor.textContent = cores[numeroAleatorio(6)]
}

adicionaCorAleatoria()

function reiniciarJogo() {
  window.location.reload();
}

botaoReiniciar.addEventListener('click', reiniciarJogo)