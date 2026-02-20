const display = document.querySelector('.pomodoro-timer');
const displayTitulo = document.querySelector('.pomodoro-titulo');
const displayCiclo = document.querySelector('.pomodoro-ciclo');
let timerInatividade;

//video
const videoAquario = document.querySelector('.aquario iframe');
const videoEstrelas = document.querySelector('.estrelas iframe');

const urlAquario = "https://www.youtube.com/embed/rHOIMgL2bcQ?autoplay=1&mute=1&loop=1&playlist=rHOIMgL2bcQ&playsinline=1";
const urlEstrelas = "https://www.youtube.com/embed/X-XZx1o_w-A?autoplay=1&mute=1&loop=1&playlist=X-XZx1o_w-A";
//video

let tempoSegundos = 10;
let intervaloId = null;

const tempos = {
    foco: 10,        // 25 min
    pausaCurta: 10,   // 5 min
    pausaLonga: 10    // 15 min
};

let modoAtual = 'Foco';
let ciclosConcluidos = 0;

// Funções:

//inatividade:
function resetarTimerInatividade() {
    document.body.classList.remove('contemplacao');
    clearTimeout(timerInatividade);
    
    if (!document.body.classList.contains('foco')) {
        timerInatividade = setTimeout(() => document.body.classList.add('contemplacao'), 5000);
    }
}

//Tipos de foco:
function proximoTempo() {
    if (modoAtual === 'Foco') {
        ciclosConcluidos++;
        const pausaLonga = ciclosConcluidos % 4 === 0;
        modoAtual = pausaLonga ? 'Pausa Longa' : 'Pausa Curta';
        tempoSegundos = pausaLonga ? tempos.pausaLonga : tempos.pausaCurta;
    } else {
        if (modoAtual === 'Pausa Longa') ciclosConcluidos = 0;
        modoAtual = 'Foco';
        tempoSegundos = tempos.foco;
    }
    atualizarInterface();
}

//Mostra na tela:
function atualizarInterface() {

    const minutos = Math.floor(tempoSegundos / 60); //(1500 / 60)
    const segundos = tempoSegundos % 60;
    const tempoFormatado = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

    display.textContent = tempoFormatado
    displayTitulo.textContent = modoAtual
    displayCiclo.textContent = `Ciclos: ${ciclosConcluidos}`

    document.title = `${tempoFormatado} - ${modoAtual}`;

}
//botão iniciar:
function iniciar() {
    if (intervaloId) return;

    document.body.classList.remove('pausado');

    // Se o aquário já estiver ativo (em uma pausa ou retomada), não precisa do delay de 2s
    if (document.body.classList.contains('foco')) {
        iniciarLogicaTimer();
    } else {
        // Primeira entrada: Carrega o vídeo e aguarda o buffer
        if (!videoAquario.src.includes('rHOIMgL2bcQ')) {
            videoAquario.src = urlAquario;
        }

        setTimeout(() => {
            document.body.classList.add('foco');
            if (videoEstrelas) videoEstrelas.src = "";
            iniciarLogicaTimer(); // O cronômetro começa após os 2s
        }, 2000); 
    }
}
function iniciarLogicaTimer() {
    atualizarInterface();
    intervaloId = setInterval(() => {
        if (tempoSegundos > 0) {
            tempoSegundos--;
            atualizarInterface();
        } else {
            pausar();
            proximoTempo();
        }
    }, 1000);
}
//botão pausar:
function pausar() {
    clearInterval(intervaloId);
    intervaloId = null;// Limpa a variável

    //verificação se esta no modo foco:
    if (modoAtual === 'Foco') {
        document.body.classList.add('pausado');
    }
}
//botão resetar:
function resetar() {

    pausar();
    modoAtual = 'Foco';
    tempoSegundos = tempos.foco
    ciclosConcluidos = 0

    document.body.classList.remove('pausado', 'foco', 'contemplacao');

    if (videoEstrelas && !videoEstrelas.src.includes('X-XZx1o_w-A')) {
        videoEstrelas.src = urlEstrelas;
    }

    setTimeout(() => {

        if (!document.body.classList.contains('foco')) {
            videoAquario.src = "";
        }

    }, 1500)


    atualizarInterface();
}


//funções de segundo plano:

// Detecta quando o usuário troca de aba

document.addEventListener("visibilitychange", () => {
    const estadoHidden = document.hidden;

    // Se estiver escondido, limpa tudo. Se voltar, checa se estava no modo foco (aquário)
    videoAquario.src = estadoHidden ? "" : (document.body.classList.contains('foco') ? urlAquario : "");

    if (videoEstrelas) {
        // Estrelas só voltam se NÃO estivermos no modo foco
        videoEstrelas.src = estadoHidden ? "" : (!document.body.classList.contains('foco') ? urlEstrelas : "");
    }
});

// Escuta movimentos do mouse e cliques

['mousemove', 'mousedown', 'touchstart', 'load'].forEach( e => 
    window.addEventListener(e, resetarTimerInatividade)
);
