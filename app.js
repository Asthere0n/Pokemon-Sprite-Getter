//variables
const apiURL = "https://pokeapi.co/api/v2/pokemon/"
const spriteBox = document.getElementById('spriteBox')
const pokemonSearch = document.getElementById('pokemonSearch')
const getButton = document.getElementById('submitButton')
const resetButton = document.getElementById('resetButton')


//Generating the API URL
function generateURL(name){
    return apiURL + name
}

//Reset the HTML
function resetHTML(){
    pokemonSearch.value = ''
}


//Obtaining the Pokemon Object from API
function fetchPokemonData (name){
    const URLtoFetch = generateURL(name)
    fetch(URLtoFetch)
        .then(response =>{
            if (!response.ok){
                throw new Error ("Pokemon not found")
            }
            return response.json()
        })
        .catch(error => console.error(error))

}


//Button functionalities
getButton.addEventListener("click",()=>{
    console.log(generateURL(pokemonSearch.value))
    resetHTML()
})

resetButton.addEventListener('click', ()=> resetHTML())