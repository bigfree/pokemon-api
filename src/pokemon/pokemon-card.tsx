import {FC, Fragment} from 'react'
import PokeAPI, {INamedApiResource, IPokemon, IPokemonType} from "pokeapi-typescript";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from "@mui/joy/IconButton";
import {Chip, Link, Typography} from "@mui/joy";
import useSWR from "swr";

type PokemonCardProps = {
    pokemon: INamedApiResource<IPokemon>;
}

const fetcher: (name: string) => Promise<IPokemon> = async (name: string) => await PokeAPI.Pokemon.resolve(name);

const PokemonCard: FC<PokemonCardProps> = ({pokemon}: PokemonCardProps): JSX.Element => {
    const {data} = useSWR(pokemon.name, fetcher)

    return (
        <Fragment>
            <Card variant="outlined" sx={{
                width: 'calc(100% / 6)',
                mx: 1,
                mb: 2
            }}>
                <CardOverflow>
                    <AspectRatio ratio="1">
                        <img
                            src={data?.sprites.front_default}
                            alt={data?.name}
                        />
                    </AspectRatio>
                    <IconButton
                        aria-label="Like minimal photography"
                        size="md"
                        variant="solid"
                        color="danger"
                        sx={{
                            position: 'absolute',
                            zIndex: 2,
                            borderRadius: '50%',
                            right: '1rem',
                            bottom: 0,
                            transform: 'translateY(50%)',
                        }}
                    >
                        <FavoriteIcon/>
                    </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{fontSize: 'md', my: 2}}>
                    <Link overlay underline="none">
                        {pokemon.name.toLocaleUpperCase()}
                    </Link>
                </Typography>
                <CardOverflow
                    variant="soft"
                    sx={{
                        display: 'flex',
                        gap: 1.5,
                        py: 1.5,
                        px: 'var(--Card-padding)',
                        borderTop: '1px solid',
                        borderColor: 'neutral.outlinedBorder',
                        bgcolor: 'background.level1',
                    }}
                >
                    {data?.types.map((type: IPokemonType) => (<Chip size="sm">{type.type.name}</Chip>))}
                    {/*<Typography level="body3" sx={{fontWeight: 'md', color: 'text.secondary'}}>*/}
                    {/*    */}
                    {/*</Typography>*/}
                    {/*<Box sx={{width: 2, bgcolor: 'divider'}}/>*/}
                    {/*<Typography level="body3" sx={{fontWeight: 'md', color: 'text.secondary'}}>*/}
                    {/*    1 hour ago*/}
                    {/*</Typography>*/}
                </CardOverflow>
            </Card>
            {/*<Box>*/}
            {/*    {pokemon.name}*/}
            {/*</Box>*/}
        </Fragment>
    )
};

export default PokemonCard
