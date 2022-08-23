import {pokeApiInstance, pokeApiUtilityInstance} from "./instance";
import {NamedAPIResourceList, Pokemon} from "pokenode-ts";

/**
 * List of all Pokemon
 * @param offset
 */
export const fetchPokemonList = async ({
   pageParam = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=18`,
}): Promise<NamedAPIResourceList> => {
    return await pokeApiUtilityInstance.getResourceByUrl(pageParam);
}

/**
 * Get pokemon by name
 * @param name
 */
export const fetchPokemonByName = async (name: string): Promise<Pokemon> => {
    return await pokeApiInstance.pokemon.getPokemonByName(name);
}
