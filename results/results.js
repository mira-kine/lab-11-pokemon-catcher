import pokemons from '../pokemon.js';
import { getPokedex, findById } from '../storage-utils.js';

const pokedex = getPokedex();

const mainPage = document.getElementById('main-page');
// create loop

for (let item of pokedex){
    const caughtPokemon = findById(item.id, pokemons);
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');
    const div = document.createElement('div');
    div.classList.add('results-container');
    const img = document.createElement('img');
    img.src = caughtPokemon.url_image;
    const header = document.createElement('h2');
    header.textContent = caughtPokemon.pokemon;
    const p = document.createElement('p');
    const resultsSpan1 = document.createElement('span');
    resultsSpan1.textContent = `Encountered: ${item.encountered}`;
    const resultsSpan2 = document.createElement('span');
    resultsSpan2.textContent = `Caught: ${item.caught}`;
    p.append(resultsSpan1, resultsSpan2);
    p.classList.add('results-content');
    div.append(img, p);
    mainContainer.append(header, div);
    mainPage.append(mainContainer);
}

// const pokemonType = pokedex.map((item)=> {
//     const pokemon = findById(item.id, pokemons);
//     return pokemon.pokemonType;
// });

// let resultsChart = document.getElementById('results-chart').getContext('2d');




