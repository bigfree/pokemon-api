import {FC, Fragment} from 'react'
import {CssVarsProvider} from '@mui/joy/styles';
import Header from "./header";
import './reset.css';
import SearchBar from "./search-bar";
import PokemonList from "./pokemon/pokemonList";
import {Box} from "@mui/joy";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {theme} from "./theme/theme";

const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 1000 * 60 * 60 * 24, // 24 hours
        },
    },
});

// const localStoragePersister: Persister = createIDBPersister('pokeapi');
// const localStoragePersister: Persister = createSyncStoragePersister({
//     storage: window.localStorage,
//     retry: removeOldestQuery,
//     key: 'pokeapi-main',
//     serialize: data => compress(JSON.stringify(data)),
//     deserialize: data => JSON.parse(decompress(data) as string),
// });

const App: FC = (): JSX.Element => {
    return (
        <QueryClientProvider client={queryClient}>
            <CssVarsProvider theme={theme}>
                <Fragment>
                    <Box sx={{
                        display: 'flex',
                        flexFlow: 'column',
                        height: '100vh',
                    }}>
                        <Header/>
                        <SearchBar/>
                        <PokemonList/>
                    </Box>
                </Fragment>
            </CssVarsProvider>
        </QueryClientProvider>
    )
};

export default App
