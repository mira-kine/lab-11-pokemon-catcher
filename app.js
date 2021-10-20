// import functions and grab DOM elements
import pokemons from './pokemon.js';
// initialize global state
const captureButton = document.getElementById('capture-button');
const pokeImg1 = document.getElementById('poke-img-1');
const pokeImg2 = document.getElementById('poke-img-2');
const pokeImg3 = document.getElementById('poke-img-3');

// create generatePokemon()
const encounterPokemon = () => {
  // generate 3 random pokemon using math.floor(math.random() * pokemon.length)
    // generate 3 random from pokemon array on pokemon.js, set it equal to mutable variable
    let randPoke1 = Math.floor(Math.random() * pokemons.length);
    let randPoke2 = Math.floor(Math.random() * pokemons.length);
    let randPoke3 = Math.floor(Math.random() * pokemons.length);
  // regenerate the number of any of them match
    while (
        randPoke1 === randPoke2 || randPoke2 === randPoke3 ||
      randPoke1 === randPoke3
    ) {
      // continue to regenerate random numbers to generate randPoke to encounter 
        randPoke1 = Math.floor(Math.random() * pokemons.length);
        randPoke2 = Math.floor(Math.random() * pokemons.length);
        randPoke3 = Math.floor(Math.random() * pokemons.length); 
    }

    let poke1 = pokemons[randPoke1];
    pokeImg1.src = poke1.url_image;

    let poke2 = pokemons[randPoke2];
    pokeImg2.src = poke2.url_image;

    let poke3 = pokemons[randPoke3];
    pokeImg3.src = poke3.url_image;

};

let totalPlays = 0;
captureButton.addEventListener('click', ()=>{ 
    totalPlays ++;
    if (totalPlays <= 10){
        encounterPokemon();
    }
    else {
        window.location.href = './results/index.html';
    }
});