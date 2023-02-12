
const lista = document.getElementById('lista');
var fundo = document.querySelector('.cor');
buscaDados();

async function buscaDados() {
    let resp = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=100')
    let dados = await resp.json();

    // variavel para controlar a quantidade gerada de pokemons
    let qtdPokemons = dados.results.length;

    // aqui e feito o loop que incrementa os pokemons no container
    for(i=1; i<qtdPokemons; i++) {

        // aqui gera a cor
        let cor = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`);
        let corPokemon = await cor.json();

        // aqui gera os nomes 
        let nome = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let nomePokemon = await nome.json();

        // aqui e gerado o sprit pelo index 
        let sprites = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`);

        if(corPokemon.color.name == 'white') {
            corPokemon.color.name = 'beige'
        }

        //aqui é listado os pokemons
        lista.innerHTML += `
        <a href="#" class="col-md-3 col-sm-4 col-lg-2 col-6 ">
        <div class="card mt-4" id="card" style="background:${corPokemon.color.name};">
            <img src="${sprites.url}" class="img-fluid";>
            <div class="card-body">
                <h5 class="card-title text-center text-dark">${nomePokemon.name}</h5>
            </div>
        </div>
        </a>`
    }

}




