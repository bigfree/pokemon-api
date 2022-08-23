import {FC} from 'react'
import {Box, Typography} from "@mui/joy";

const Header: FC = (): JSX.Element => {
    return (
        <Box component="nav" sx={{
            borderBottom: '1px solid',
            borderBottomColor: 'pokemonRed.primary.100',
            px: 2,
            py: 2,
            backgroundColor: 'pokemonRed.primary.50'
        }}>
            <Typography level='h4' component="h4" fontStyle={'sm'}>PokeAPI</Typography>
        </Box>
    )
};

export default Header
