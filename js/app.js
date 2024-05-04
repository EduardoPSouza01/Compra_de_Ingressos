function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);
 
    if(tipoIngresso == 'pista'){
        comprarPista(qtd, tipoIngresso);
    }
       
    if(tipoIngresso == 'superior'){
        comprarPistaSuperior(qtd, tipoIngresso);
    }

    if(tipoIngresso == 'inferior'){
        comprarPistaInferior(qtd, tipoIngresso);
    }

    document.getElementById('qtd').value = '';
}

function comprarPista(qtd, tipoIngresso){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    let verificador = qtdPista - qtd;
    let ingresso;

    qtdPista > 1 ? ingresso = 'ingressos' : ingresso = 'ingresso';

    if(verificador < 0 )
        alert(`Temos somente ${qtdPista} ${ingresso} disponível`);
    else{
        if(qtd > qtdPista){
            alert(`Quantidade indisponível para tipo ${tipoIngresso}`);
        }else{
            qtdPista -= qtd;
            document.getElementById('qtd-pista').textContent = qtdPista;
        }
    } 
}

function comprarPistaSuperior(qtd, tipoIngresso){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let verificador = qtdSuperior - qtd;
    let ingresso;

    qtdSuperior > 1 ? ingresso = 'ingressos' : ingresso = 'ingresso';

    if(verificador < 0 )
        alert(`Temos somente ${qtdSuperior} ${ingresso} disponível`);
    else{
        if(qtd > qtdSuperior){
            alert(`Quantidade indisponível para tipo ${tipoIngresso}`);
        }else{
            qtdSuperior -= qtd;
            document.getElementById('qtd-superior').textContent = qtdSuperior;
        }
    } 
}

function comprarPistaInferior(qtd, tipoIngresso){

    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    let verificador = qtdInferior - qtd;
    let ingresso;

    qtdInferior > 1 ? ingresso = 'ingressos' : ingresso = 'ingresso';

    if(verificador < 0 )
        alert(`Temos somente ${qtdInferior} ${ingresso} disponível`);
    else{
        if(qtd > qtdInferior){
            alert(`Quantidade indisponível para tipo ${tipoIngresso}`);
        }else{
            qtdInferior -= qtd;
            document.getElementById('qtd-inferior').textContent = qtdInferior;
        }
    } 
}
