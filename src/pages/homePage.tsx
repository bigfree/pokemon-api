import SearchBar from "../search-bar";
import PokemonList from "../pokemon/pokemonList";
import {Box} from "@mui/joy";
import {FC, Fragment} from "react";

const HomePage: FC = (): JSX.Element => {
    return (
        <Fragment>
            <Box
                sx={{
                    display: 'flex',
                    flexFlow: 'column',
                    height: '100vh',
                }}
            >
                <SearchBar/>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'row',
                    flexWrap: 'nowrap',
                    flex: 1,
                    overflow: 'auto',
                    backgroundImage: 'url(/public/ground-background.png)',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'repeat-x',
                    backgroundSize: 'contain'
                }}
                >
                    <PokemonList/>
                </Box>
            </Box>
            {/*<Grid container spacing={0} sx={{*/}
            {/*    flex: 1,*/}
            {/*    height: '100vh'*/}
            {/*}}>*/}
            {/*    <Grid item xs={12}>*/}
            {/*        <SearchBar/>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={} sx={{*/}
            {/*        display: 'flex',*/}
            {/*        flexFlow: 'column',*/}
            {/*        overflow: 'auto'*/}
            {/*    }}>*/}
            {/*        <PokemonList/>*/}
            {/*    </Grid>*/}
            {/*    /!*<Grid item xs='auto'>*!/*/}
            {/*    /!*    <Outlet/>*!/*/}
            {/*    /!*</Grid>*!/*/}
            {/*</Grid>*/}
        </Fragment>
    )
}
export default HomePage;