import {FC, memo} from 'react'
import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import {Box, Typography} from "@mui/joy";
import {NamedAPIResource} from "pokenode-ts";
import {useQuery} from "@tanstack/react-query";
import {fetchPokemonByName} from "../client/pokemon";
import {useNavigate} from "react-router-dom";

type PokemonCardProps = {
    pokemon: NamedAPIResource;
}

const PokemonCard: FC<PokemonCardProps> = ({pokemon}: PokemonCardProps): JSX.Element => {
    const navigate = useNavigate();
    const {isLoading, data} = useQuery(['pokemon', 'detail', pokemon.name], () => {
        return fetchPokemonByName(pokemon.name);
    }, {
        enabled: !!pokemon,
    });

    return (
        <Card
            variant="outlined"
            sx={{
                p: 1,
                borderRadius: 6,
                boxShadow: '4px 4px',
                // '&:hover': {boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder'},
                borderColor: 'pokemonBorder.default',
                backgroundColor: 'background.body',
                cursor: 'pointer'
            }}
            onClick={() => navigate(data?.name ?? '')}
        >
            {/*Create memoize*/}
            <AspectRatio
                variant='plain'
                ratio="1"
                objectFit='contain'
                sx={{
                    p: 1,
                    borderRadius: 6,
                    border: '2px solid',
                    borderColor: 'pokemonBorder.default',
                    backgroundColor: 'white',
                    mb: 1,
                }}
            >
                {!isLoading && <img
                    src={data?.sprites.other?.['official-artwork'].front_default ?? ''}
                    // src={data?.sprites.front_default ?? ''}
                    alt={data?.name}
                    loading="lazy"
                />}
            </AspectRatio>
            <Box
                sx={{
                    backgroundColor: 'background.cardContent',
                    border: '1px solid',
                    borderColor: 'pokemonBorder.cardContent',
                    borderRadius: 4,
                    p: 1,
                }}
            >
                <Typography
                    level="h2"
                    sx={{
                        fontSize: 'md',
                        textTransform: 'capitalize',
                        color: 'white'
                    }}
                >
                    {pokemon.name}
                </Typography>
            </Box>
        </Card>
    )
};

export default memo(PokemonCard)
