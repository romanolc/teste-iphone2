isso contexto de áudio;

// Inicializa áudio (necessário no iPhone)
diversidade initÁudio() {
 se (!contexto de áudio) {
 contexto de áudio = novo (Janela.Contexto de áudio || Janela.webkitContexto de áudio)();
  }
}

// Som (função no iOS)
diversidade bipé() {
 const osc = contexto de áudio.criarOscilador();
 const ganho = contexto de áudio.criarGanho();

 osc.conectar(ganho);
 ganho.conectar(contexto de áudio.destino);

 osc.tipo = "seno";
 osc.frequência.definirValorAtempo(700, contexto de áudio.hora atual);
 ganho.ganho.definirValorAtempo(0,3, contexto de áudio.hora atual);

 osc.começar();
 osc.parar(contexto de áudio.hora atual + 0,12);
}

// Visual em flash
diversidade clarão() {
 documento.corpo.lista de aulas.adicionário("flash");

 definirTempo limite(() => {
 documento.corpo.lista de aulas.removedor("flash");
 }, 120);
}

// Evento sensorial
diversidade evento() {
 bip();
 clarão();
}

// iPhone precisa de toque real
const btn = documento.obterElementoPorId("btn");

btn.addEventListener("touchstart", () => {
 initÁudio();
 evento();
});

//área de trabalho alternativo
btn.addEventListener("camarilha", () => {
 initÁudio();
 evento();
});
