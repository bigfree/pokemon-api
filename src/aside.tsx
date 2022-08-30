import {FC} from 'react'
import {Box, Typography} from "@mui/joy";

/**
 * Header component
 * @constructor
 */
const Aside: FC = (): JSX.Element => {
    return (
        <Box component="nav" sx={{
            flex: '0 0 90px',
            p: 1,
            borderRight: '3px solid',
            borderBottomColor: 'pokemonBorder.default',
            backgroundColor: 'background.aside',
            boxShadow: '5px 5px rgba(240, 228, 115, .8)',
            display: 'flex',
            flexFlow: 'column',
            zIndex: 999,
        }}>
            <Box component='img' src="/public/gaming.png" sx={{
                maxWidth: 1,
            }}/>
            {/*<Typography level='h4' component="h4" fontStyle={'sm'}>PokeAPI</Typography>*/}
        </Box>
    )
};

export default Aside
