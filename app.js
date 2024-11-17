import { fetchPokemonData } from "./app/modAPI.js";
import { resetHTML , printSprite} from "./app/modHTML.js";
import { pokemonSearch, getButton , pokemonNameTag } from "./app/variables.js";

//Button functionalities
getButton.addEventListener("click", async () => {
  if (pokemonSearch.value == "") {
    resetHTML;
  } else
    {
        const currentPokemon = await fetchPokemonData(pokemonSearch.value.toLowerCase());
        printSprite(currentPokemon.sprites.front_default)
        pokemonNameTag.innerHTML = currentPokemon.name[0].toUpperCase()+currentPokemon.name.slice(1)
    }
  }
);