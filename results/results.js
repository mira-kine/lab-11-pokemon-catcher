import pokemons from '../pokemon.js';
import { getPokedex, findById } from '../storage-utils.js';

const pokedex = getPokedex();

const mainPage = document.getElementById('main-page');
// create loop

for (let item of pokedex){
    const caughtPokemon = findById(item.id, pokemons);
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = caughtPokemon.url_image;
    const header = document.createElement('h2');
    header.textContent = caughtPokemon.pokemon;
    const resultsSpan1 = document.createElement('span');
    resultsSpan1.textContent = `Encountered: ${item.encountered}`;
    const resultsSpan2 = document.createElement('span');
    resultsSpan2.textContent = `Caught: ${item.caught}`;

    div.append(header, img, resultsSpan1, resultsSpan2);
    mainPage.append(div);
}


