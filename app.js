import { fetchPokemonData } from "./app/modAPI.js"
import { resetHTML } from "./app/modHTML.js"
import {pokemonSearch, getButton, resetButton} from "./app/variables.js"

let currentPokemon = {}

//Button functionalities
getButton.addEventListener("click",()=>{
    currentPokemon = fetchPokemonData(pokemonSearch.value)
    console.log(currentPokemon)
})

resetButton.addEventListener('click', ()=> resetHTML())