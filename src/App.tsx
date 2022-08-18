import {FC, Fragment} from 'react'
import {CssVarsProvider} from '@mui/joy/styles';
import Header from "./header";
import './reset.css';
import SearchBar from "./search-bar";
import PokemonList from "./pokemon/pokemon-list";
import {Box} from "@mui/joy";

const App: FC = (): JSX.Element => {
    return (
        <CssVarsProvider>
            <Fragment>
                <Box sx={{
                    display: 'flex',
                    flexFlow: 'column',
                    minHeight: '100vh',
                }}>
                    <Header/>
                    <SearchBar/>
                    <PokemonList/>
                </Box>
            </Fragment>
        </CssVarsProvider>
    )
};

export default App
