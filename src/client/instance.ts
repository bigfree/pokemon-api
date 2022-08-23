import {MainClient, UtilityClient} from "pokenode-ts";

export const pokeApiUtilityInstance: UtilityClient = new UtilityClient({
    cacheOptions: {
        maxAge: 15
    }
});

export const pokeApiInstance: MainClient = new MainClient({
    cacheOptions: {
        maxAge: 15
    }
});