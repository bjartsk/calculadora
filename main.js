const listaTeclas = document.querySelectorAll('.tecla');
const tela = document.querySelector('#tela');
const operadores = ['+', '-', '*', '/'];

for(let i=0; i<listaTeclas.length; i++){
    const tecla = listaTeclas[i];
    
    if(tecla.innerHTML == '='){
        tecla.onclick = apertouIgual;
    } else if(tecla.innerHTML == 'C'){
        tecla.onclick = limpaTela;
    } else if(tecla.innerHTML == 'APAGAR'){
        tecla.onclick = apagarUltimo;
    } else {
        tecla.onclick = function() {
            escreve(tecla.innerHTML);
        }
    }
}

function apertouIgual () {
    tela.value = eval(tela.value);
}

function apagarUltimo (){
    tela.value = tela.value.slice(0, tela.value.length -1);
}

function escreve (valor){
    if(operadores.indexOf(valor) > -1 && tela.value.length > 0){
        let ultimoDigitado = tela.value[tela.value.length -1];
        if(operadores.indexOf(ultimoDigitado) > -1){
            apagarUltimo();
        }

    }
    tela.value += valor;
}

function limpaTela(){
    tela.value = '';
}
