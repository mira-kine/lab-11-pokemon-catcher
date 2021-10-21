export function findById(id, pokemons){
    for (let pokemon of pokemons) {
        if (pokemon.id === id) {
            return pokemon;
        }
    }
}

export function getPokedex(){
    const pokeString = localStorage.getItem('POKEDEX') || '[]';
    const pokedex = JSON.parse(pokeString);
    return pokedex;
}

export function setPokedex(id){
    const pokedex = getPokedex();
    const chosenPokemon = findById(id, pokedex);
    if (chosenPokemon) {
        chosenPokemon.caught++;
    } else {
        const newPokemon = { id: id, caught: 1 };
        pokedex.push(newPokemon);
    }
    const stringPokedex = JSON.stringify(pokedex);
    localStorage.setItem('POKEDEX', stringPokedex);
}
