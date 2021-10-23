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

let resultsChart1 = document.getElementById('results-chart1').getContext('2d');
let resultsChart2 = document.getElementById('results-chart2').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(resultsChart1, {
    type: 'bar',
    data: {
        labels: name,
        datasets: [{
            label: '# Caught',
            data: caught,
            backgroundColor: [
                'rgba(234, 53, 70)',
            ],
            borderColor: [
                'rgba(234, 53, 70)'
            ],
            borderWidth: 1
        }, {
            label: '# Encountered',
            data: encountered,
            backgroundColor : [
                'rgba(239, 202, 8)'
            ],
            borderColor: [
                'rgba(239, 202, 8)'
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

const typeNames = [];
const typeArray = [];

for (let item of pokedex) {
    const myPokemon = findById(item.id, pokemons);
    typeNames.push(myPokemon.name);
    typeArray.push(myPokemon.type_1);
}

// const fire = pokedex.filter(item=>item.type_1 === 'fire');
// const water = pokedex.filter(item=>item.type_1 === 'water');
// const grass = pokedex.filter(item=>item.type_1 === 'grass');
// const bug = pokedex.filter(item=>item.type_1 === 'bug');
// const normal = pokedex.filter(item=>item.type_1 === 'normal');

// eslint-disable-next-line no-undef
new Chart(resultsChart2, {
    type: 'doughnut',
    data: {
        labels: typeArray,
        datasets: [{
            label: '# Types',
            data: [1, 2, 3, 4, 5],
            backgroundColor: [
                'rgba(238, 129, 48)',
                'rgba(99, 144, 240)',
                'rgba(122, 199, 76)',
                'rgba(166, 185, 26)',
                'rgba(168, 167, 122)'

            ],
            borderColor: [
                'rgba(238, 129, 48)',
                'rgba(99, 144, 240)',
                'rgba(122, 199, 76)',
                'rgba(166, 185, 26)',
                'rgba(168, 167, 122)'
            ],
            hoverOffset: 4,
            borderWidth: 1
        }],
    },
    options:{
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


