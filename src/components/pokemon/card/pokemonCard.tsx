import {FC, memo} from 'react'
import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import {Box, Grid, Typography} from "@mui/joy";
import {NamedAPIResource, PokemonType} from "pokenode-ts";
import {useQuery} from "@tanstack/react-query";
import {fetchPokemonByName} from "../../../client/pokemon";
import {useNavigate} from "react-router-dom";
import PokemonCardTypes from "./pokemonCardTypes";
import pokeBallSvgImageUrl from './../../../assets/moves/pokeball.svg';

type PokemonCardProps = {
    pokemon: NamedAPIResource;
}

const PokemonCard: FC<PokemonCardProps> = ({pokemon}: PokemonCardProps): JSX.Element => {
    const navigate = useNavigate();
    const {isLoading, data} = useQuery(['pokemon', 'detail', pokemon.name], () => {
        return fetchPokemonByName(pokemon.name);
    }, {
        enabled: !!pokemon,
        refetchInterval: false,
        refetchOnWindowFocus: false,
    });

    return (
        <Card
            variant="outlined"
            sx={{
                p: 1,
                borderRadius: 6,
                borderTopLeftRadius: 0,
                boxShadow: '4px 4px',
                // '&:hover': {boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder'},
                borderColor: 'pokemonBorder.default',
                backgroundColor: 'background.body',
                cursor: 'pointer',
            }}
            onClick={() => navigate(data?.name ?? '')}
        >
            <Grid
                container
                spacing={0}
                padding={0}
                marginBottom={1}
                alignItems={'center'}
            >
                <Grid xs px={0.5} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& > img': {
                        maxHeight: 13,
                        mr: 0.6
                    }
                }}>
                    <img src={pokeBallSvgImageUrl} alt={''}/>
                    <Typography
                        textColor={'#461616'}
                        fontSize={13}
                        fontWeight={'bold'}
                        lineHeight={0}
                        pt={0.4}
                    >
                        {data?.order.toLocaleString('cs-CS', {
                            minimumIntegerDigits: 4,
                            useGrouping: false
                        })}
                    </Typography>
                </Grid>
                {data?.types.map((type: PokemonType, index: number) => {
                    return (
                        <Grid xs={'auto'} key={index}>
                            <PokemonCardTypes pokemonType={type}/>
                        </Grid>
                    );
                })}
            </Grid>
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
                        fontSize: 16,
                        fontWeight: 'normal',
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
