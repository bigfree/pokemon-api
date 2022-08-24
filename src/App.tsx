import {FC, Fragment} from 'react'
import {CssVarsProvider} from '@mui/joy/styles';
import Header from "./header";
import './reset.css';
import SearchBar from "./search-bar";
import PokemonList from "./pokemon/pokemonList";
import {Box} from "@mui/joy";
import {Persister, removeOldestQuery} from "@tanstack/react-query-persist-client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {createSyncStoragePersister} from "@tanstack/query-sync-storage-persister";
import {theme} from "./theme/theme";
import {compress, decompress} from "lz-string";

const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 1000 * 60 * 60 * 24, // 24 hours
        },
    },
});

// const localStoragePersister: Persister = createIDBPersister('pokeapi');
const localStoragePersister: Persister = createSyncStoragePersister({
    storage: window.localStorage,
    retry: removeOldestQuery,
    key: 'pokeapi-main',
    serialize: data => compress(JSON.stringify(data)),
    deserialize: data => JSON.parse(decompress(data) as string),
});

const App: FC = (): JSX.Element => {
    return (
        <QueryClientProvider client={queryClient}>
            <CssVarsProvider theme={theme}>
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
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
};

export default App
