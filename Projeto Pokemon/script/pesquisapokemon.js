const input = document.getElementById('input-pokemon');
const button = document.getElementById('btn');

console.log(button);
console.log(input);


button.addEventListener('click', () => {
    let pokemon = input.value;
    console.log(pokemon);

    escolhaPokemon();

    async function escolhaPokemon() {
        let nome = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        let pokemonNome = await nome.json();
        console.log(pokemonNome.name)
    }
})

// input.addEventListener('keydown', event => {
//     const isUppercase = event.shiftKey;
//     let key = event.key;
//     if (isUppercase) {
//       key = key.toLowerCase();
//     }
//     input.value += key;
//   });


    // alert('oi')
    // if(document.getElementById("input-pokemon").style.textTransform == 'uppercase') {
    //     document.getElementById("input-pokemon").style.textTransform = 'lowercase';
    //     alert('otario')
    // }

// if(document.getElementById("input-pokemon").style.textTransform == 'capitalize'){
//     input.style.textTransform = 'lowercase';
//     console.log(input.value)
// }


