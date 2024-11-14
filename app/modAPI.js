import {apiURL} from "./variables.js"

//Generating the API URL
function generateURL(name){
    return apiURL + name
}

//Obtaining the Pokemon Object from API
function fetchPokemonData (name){
    const URLtoFetch = generateURL(name)
    console.log(URLtoFetch)
    let pokemonFetched = fetch(URLtoFetch)
        .then(response =>{
            if (!response.ok){
                throw new Error ("Pokemon not found")
            }
            return response.json()
        })
        .catch(error => console.error(error))

    return pokemonFetched
}

export {generateURL, fetchPokemonData}