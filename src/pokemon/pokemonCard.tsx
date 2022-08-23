import {FC, Fragment} from 'react'
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import {Link, Typography} from "@mui/joy";
import {NamedAPIResource} from "pokenode-ts";
import {useQuery} from "@tanstack/react-query";
import {fetchPokemonByName} from "../client/pokemon";

type PokemonCardProps = {
    pokemon: NamedAPIResource;
}

const PokemonCard: FC<PokemonCardProps> = ({pokemon}: PokemonCardProps): JSX.Element => {
    const {
        isLoading,
        data,
    } = useQuery(['pokemon', 'detail', pokemon.name], () => {
        return fetchPokemonByName(pokemon.name);
    }, {
        enabled: !!pokemon,
        refetchInterval: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
        refetchOnReconnect: false,
        _optimisticResults: 'optimistic',
        retryOnMount: false,
        retry: false
    });

    return (
        <Fragment>
            <Card variant="outlined" sx={{
                '&:hover': {boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder'},
                borderColor: 'primary.200'
            }}>
                <CardOverflow>
                    <AspectRatio ratio="1">
                        {!isLoading && <img
                            src={data?.sprites.other?.['official-artwork'].front_default ?? ''}
                            // src={data?.sprites.front_default ?? ''}
                            alt={data?.name}
                            loading="lazy"
                        />}
                    </AspectRatio>
                </CardOverflow>
                <Typography level="h2" sx={{fontSize: 'md', mt: 2, textTransform: 'capitalize'}}>
                    <Link overlay underline="none">
                        {pokemon.name}
                    </Link>
                </Typography>
            </Card>
        </Fragment>
    )
};

export default PokemonCard
