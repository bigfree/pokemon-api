import {FC} from 'react'
import {Box} from "@mui/joy";
import {Divider} from "@mui/material";
import AsideButton from "./components/asideButton";
import asideHeaderImageUrl from './assets/aside-menu/valor.png';
import pokemonTrainerImageSrc from './assets/aside-menu/pokemon-trainer.png';
import superBallImageSrc from './assets/aside-menu/superball.png';
import pokedexImageSrc from './assets/aside-menu/pokedex.png';

type AsideMenuButtonsItems = {
    name: string;
    navigate: string;
    iconUrl: string;
}

/**
 * Header component
 * @constructor
 */
const Aside: FC = (): JSX.Element => {
    const asideMenuButtonsItems: AsideMenuButtonsItems[] = [
        {
            name: 'My',
            navigate: '/my',
            iconUrl: pokemonTrainerImageSrc,
        }, {
            name: 'Pokemons',
            navigate: '/pokemons',
            iconUrl: superBallImageSrc,
        }, {
            name: 'Pokedex',
            navigate: '/pokedex',
            iconUrl: pokedexImageSrc,
        }
    ]

    return (
        <Box component="nav" sx={{
            flex: '0 0 90px',
            width: '90px',
            p: 1,
            borderRight: '3px solid',
            borderBottomColor: 'pokemonBorder.default',
            backgroundColor: 'background.aside',
            boxShadow: '5px 5px rgba(240, 228, 115, .8)',
            display: 'flex',
            flexFlow: 'column',
            zIndex: 999,
        }}>
            <Box component='img' src={asideHeaderImageUrl} sx={{
                maxWidth: 1,
                p: 1.2,
            }}/>
            <Divider sx={{
                borderColor: 'pokemonBorder.asideDivider',
                boxShadow: '1px 1px #e4d86d',
                mt: 1,
                mb: 2
            }}/>
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexFlow: 'column',
            }}>
                {asideMenuButtonsItems.map((item: AsideMenuButtonsItems, index: number) => (
                    <AsideButton key={index} {...item}/>
                ))}
            </Box>
            {/*<Typography level='h4' component="h4" fontStyle={'sm'}>PokeAPI</Typography>*/}
        </Box>
    )
};

export default Aside
