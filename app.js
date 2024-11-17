import { fetchPokemonData } from "./app/modAPI.js"
import { resetHTML } from "./app/modHTML.js"
import {pokemonSearch, getButton} from "./app/variables.js"

let currentPokemon = {}

//Button functionalities
getButton.addEventListener("click",()=>{
    if (pokemonSearch.value == ''){
        resetHTML
    } else {
        currentPokemon = fetchPokemonData(pokemonSearch.value)
        console.log(currentPokemon)
    }
})
