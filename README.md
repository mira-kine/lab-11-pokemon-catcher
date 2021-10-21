# Alchemy Bootstrap Template

## Making a plan

# Goal
* Present user with 3 random different pokemon
* user will select which pokemon they want to capture
* regenerate 3 more pokemon
* after user has encountered 10 trios of pokemon, take them to results page.

# STATE
** (remember, state is data that we are representing that changes overtime as the user interacts)
* 1. Total # plays
* 2. Num times captured
* 3. Num times encountered

# Plan
* home page (root directory)
    * index.html
    * app.js
* results page (/results directory)
    * index.html
    * results.js
* storage-utils.js -- hold our localstorage functions
* pokemon.js -- holds the data (download from lab repo)

## HTML Elements
* make home page with
    * three images as radio buttons of pokemon - click to capture
    * button with an id - capture button
* make empty results page

## Local Storage Functions - Pokemon Caught (will show up on results page)
```javascript
const results = [
    { id: id, shown: number, picked: number },
]
* getPokedex -- return the results array or empty array
* encounterdPokemon -- increment the encountered key for an item
* capturedPokemon -- increment the captured key for an item
```

## app.js:
* make function called encounterPokemon()
    * generate 3 random pokemon using math.floor(math.random() * pokemon.length)
    * call encounterPokemon for each -> update what is shown on the page. Use a while loop to run until you reach 10 encounters
    * render the pokemon onto the page by setting random number to a pokemon, and rendering it with an image.

### ON PAGE LOAD
* set totalPlays to 0
* call encounterPokemon -> render items on page

### ON BUTTON CLICK (of radio button)
* increment totalPlays (<= 10)
* call capturePokemon with chosen item -> capture using capture button
* if totalPlays >= 10
    * redirect to results
* else
    * call encounterPokemon

## storage-utils.js
* findById function to find the correct pokemon
* setPokedex (use findById)
    * 
* getPokedex
``` javascript
    export function getPokedex(){
        const pokeString = localStorage.getItem('POKEDEX') || '[]';
        const pokedex = JSON.parse(pokeString);
        return pokedex;
    }
```


(bolded steps are mandatory, unbolded are for more advanced projects)

1) **Make a drawing of your app. Simple "wireframes"**
2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3) **For each HTML element ask: Why do I need this?**
4) Ask which of out HTML elements are hard coded, and which are dynamically generated?
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
6) Is there some state we need to initialize?
7) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
8) **Think about how to validate each of your steps**
9) Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
10) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
11) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass