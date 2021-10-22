import pokemons from '../pokemon.js';
import { getPokedex, findById } from '../storage-utils.js';
//grab DOM elements
const newJourney = document.getElementById('new-journey');
const mainPage = document.getElementById('main-page');
const catchMore = document.getElementById('catch-page-button');

//create buttons with event listeners
catchMore.addEventListener('click', ()=>{
    window.location.href = '../';
});

newJourney.addEventListener('click', ()=>{
    localStorage.removeItem('POKEDEX');
    window.location.href = '../';
});

// create loop
const pokedex = getPokedex();
for (let item of pokedex){
    const caughtPokemon = findById(item.id, pokemons);
    
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');

    const img = document.createElement('img');
    img.src = caughtPokemon.url_image;

    const header = document.createElement('h3');
    header.textContent = caughtPokemon.pokemon;

    const div = document.createElement('div');
    div.classList.add('results-container');

    const p = document.createElement('p');

    const resultsSpan1 = document.createElement('span');
    resultsSpan1.textContent = `Encountered: ${item.encountered}`;

    const resultsSpan2 = document.createElement('span');
    resultsSpan2.textContent = `Caught: ${item.caught}`;

    p.append(resultsSpan1, resultsSpan2);
    p.classList.add('results-content');

    div.append(header, img, p);

    mainContainer.append(div);
    mainPage.append(mainContainer);
}

const name = pokedex.map((item)=> {
    const caughtPokemon = findById(item.id, pokemons);
    return caughtPokemon.pokemon;
});

const encountered = pokedex.map(item=>item.encountered);
const caught = pokedex.map(item=>item.caught);

let resultsChart = document.getElementById('results-chart').getContext('2d');

// eslint-disable-next-line no-undef
new Chart(resultsChart, {
    type: 'bar',
    data: {
        labels: name,
        datasets: [{
            label: '# Caught',
            data: caught,
            backgroundColor: [
                'rgba(234, 53, 70)',
                'rgba(239, 202, 8)',
                'rgba(234, 53, 70)',
                'rgba(239, 202, 8)'
            ],
            borderColor: [
                'rgba(234, 53, 70)',
                'rgba(239, 202, 8)',
                'rgba(234, 53, 70)',
                'rgba(239, 202, 8)'
            ],
            borderWidth: 1
        }, {
            label: '# Encountered',
            data: encountered,
            backgroundColor : [
                'rgba(37, 110, 255)',
                'rgba(188, 211, 156)',
            ],
            borderColor: [
                'rgba(37, 110, 255)',
                'rgba(188, 211, 156)',
            ],
            borderWidth: 1
        }]
    },
    options:{
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



