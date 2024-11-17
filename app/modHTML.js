import { pokemonSearch , spriteImage } from "./variables.js"

//Reset the HTML
function resetHTML(){
    pokemonSearch.value = ''
}

//Print the sprite into the HTML
function printSprite(pokemonSprite){
    const currentSprite = pokemonSprite
    console.log(currentSprite)
    spriteImage.src = currentSprite
    spriteImage.classList.remove('hidden')
}


export {resetHTML , printSprite}