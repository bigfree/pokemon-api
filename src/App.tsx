import {FC} from 'react'
import {CssVarsProvider} from '@mui/joy/styles';
import './reset.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {theme} from "./theme/theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import AppLayout from "./layouts/appLayout";
import PokemonDetailPage from "./pages/pokemonDetailPage";

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
                <BrowserRouter>
                    <Routes>
                        <Route element={<AppLayout/>}>
                            <Route path='/' element={<HomePage/>}>
                                <Route path=':pokemonName' element={<PokemonDetailPage/>}/>
                                <Route path='*' element={<p>404 page</p>}/>
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </CssVarsProvider>
        </QueryClientProvider>
    )
};

export default App
