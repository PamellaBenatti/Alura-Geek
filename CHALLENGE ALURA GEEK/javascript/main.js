const StormTrooper = document.getElementById('StormTrooper');
const GameBoy = document.getElementById('GameBoy');

function salvar() {
    var nomeImput = document.getElementsByClassName('campo__entrada').value;

    if(nomeImput == StormTrooper) { 
        document.getElementById('StormTrooper').innerHTML =  '<img class="produtos__imagem" src="./imagens/stormtrooper.png" alt="Caneca StormTrooper" id="StormTrooper"></img>'
    }

    if(nomeImput == GameBoy) {
        document.getElementById('GameBoy').innerHTML = '<img class="produtos__imagem" src="./imagens/Game Boy Classic.png" alt="Game Boy Clássico" id="GameBoy"></img>'
    }
}

addEventListener(onclick, salvar());

function limpar() {
    var nomeImput = document.getElementsByClassName('campo__entrada').value;

    if(nomeImput == StormTrooper) { 
        document.getElementById('StormTrooper').innerHTML = StormTrooper.replace('<img class="produtos__imagem" src="./imagens/stormtrooper.png" alt="Caneca StormTrooper" id="StormTrooper"></img>', '');
    }

    if(nomeImput == GameBoy) {
        document.getElementById('GameBoy').innerHTML = GameBoy.replace('<img class="produtos__imagem" src="./imagens/Game Boy Classic.png" alt="Game Boy Clássico" id="GameBoy"></img>', '');
    }
}

addEventListener(onclick, limpar());
