import {FC, Fragment} from 'react'
import {Box} from "@mui/joy";
import PokemonCard from "./pokemon-card";
import useSWR, {Fetcher} from 'swr'
import PokeAPI, {INamedApiResource, INamedApiResourceList, IPokemon} from "pokeapi-typescript";

const fetcher: Fetcher<INamedApiResourceList<IPokemon>, string> = async () => await PokeAPI.Pokemon.list(60, 0)

const PokemonList: FC = (): JSX.Element => {
    // https://pokeapi.co/api/v2/pokemon?limit=60
    const {data} = useSWR('getAllPokemon', fetcher)

    return (
        <Fragment>
            <Box sx={{
                flexGrow: '1',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                px: 2
            }}>
                {data?.results.map((pokemon: INamedApiResource<IPokemon>) => <PokemonCard pokemon={pokemon}/>)}
            </Box>
        </Fragment>
    )
};

export default PokemonList
