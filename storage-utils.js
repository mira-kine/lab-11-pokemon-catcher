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

export function encounterPokemon(id){
    const pokedex = getPokedex();
    let pokemon = findById(id, pokedex);
    if (pokemon) {
        pokemon.encountered++;
    } else {
        const newPokemon = { id: id, encountered: 0 };
        pokedex.push(newPokemon);
    }
    const stringPokedex = JSON.stringify(pokedex);
    localStorage.setItem('POKEDEX', stringPokedex);
}

export function caughtPokemon(id){
    let pokedex = getPokedex();
    let pokemon = findById(pokedex, id);
    pokemon.caught++;
    localStorage.setItem('POKEDEX', pokedex);
}