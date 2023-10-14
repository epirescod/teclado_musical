function tocaSom (seletorAudio) {

    const elemento = document.querySelector(seletorAudio);
    
   

    if (elemento && elemento .localName === 'audio'){
            elemento.play();
        }
    else{
        //if(elemento === null){
        //alert('Elemento Não Encontrado');
        console.log('Elemento Não Encontrado');
    };
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//condição da lista de teclas utilzada
for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//template string

    tecla.onclick = function () {   
        tocaSom(idAudio)
    };

    tecla.onkeydown = function (evento){

        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa')
        };
    };

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    };

};