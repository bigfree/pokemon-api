import {FC, Fragment, lazy, Suspense, useEffect, useRef} from 'react'
import {Box, Button, Container, Grid} from "@mui/joy";
import {QueryFunctionContext, useInfiniteQuery} from '@tanstack/react-query'
import {fetchPokemonList} from "../client/pokemon";
import {NamedAPIResource, NamedAPIResourceList} from "pokenode-ts";
import {useVirtualizer, VirtualItem} from "@tanstack/react-virtual";

const PokemonCard = lazy(() => import('./pokemonCard'));

/**
 * Pokemon List component
 * @constructor
 */
const PokemonList: FC = (): JSX.Element => {
    const containerRef = useRef();
    const {
        status,
        data,
        error,
        isFetching,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery(['allPokemons'], fetchPokemonList, {
        getNextPageParam: (lastPage: NamedAPIResourceList) => {
            return lastPage.next;
        },
    });

    const allRows = data
        ? data.pages.flatMap((pokemon: NamedAPIResourceList) => pokemon.results)
        : [];

    console.log(data);

    const rowVirtualizer = useVirtualizer({
        count: hasNextPage ? allRows.length + 1 : allRows.length,
        getScrollElement: () => containerRef.current,
        estimateSize: () => 285,
        overscan: 5,
    });

    useEffect(() => {
        const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();

        if (!lastItem) {
            return
        }

        if (
            lastItem.index >= allRows.length - 1
            && hasNextPage
            && !isFetchingNextPage
        ) {
            fetchNextPage().then(r => console.log(r));
        }
    }, [
        hasNextPage,
        fetchNextPage,
        allRows.length,
        isFetchingNextPage,
        rowVirtualizer.getVirtualItems(),
    ]);

    // console.log(rowVirtualizer.getVirtualItems());

    return (
        <Fragment>
            <Suspense fallback={<div>Loading..</div>}>
                <Box sx={{width: 1, pt: 5, flex: 1, overflow: 'auto'}} ref={containerRef}>
                    <Container maxWidth={'xl'} sx={{height: `${rowVirtualizer.getTotalSize()}px`, position: 'relative'}}>
                        <Grid container spacing={4} sx={{px: 2}}>
                            {rowVirtualizer.getVirtualItems().map((virtualRow: VirtualItem<NamedAPIResource>) => {
                                const isLoaderRow = virtualRow.index > allRows.length - 1;
                                const pokemon: NamedAPIResource = allRows[virtualRow.index];

                                return (
                                    <Grid item xs={2} key={virtualRow.index}>
                                        <PokemonCard pokemon={pokemon}/>
                                    </Grid>
                                );
                            })}
                            {/*{data?.pages.map((group: NamedAPIResourceList) =>*/}
                            {/*    group.results.map((pokemon: NamedAPIResource, pokemonIndex: number) => {*/}
                            {/*        return (*/}
                            {/*            <Grid item xs={2} key={pokemonIndex}>*/}
                            {/*                <PokemonCard pokemon={pokemon}/>*/}
                            {/*            </Grid>*/}
                            {/*        );*/}
                            {/*    })*/}
                            {/*)}*/}
                            <Grid container xs={12} justifyContent="center" sx={{py: 4}}>
                                <Grid item>
                                    <Button
                                        onClick={() => fetchNextPage()}
                                        disabled={!hasNextPage || isFetchingNextPage}
                                        variant={'outlined'}
                                        sx={{
                                            borderColor: 'pokemonRed.primary.500',
                                            color: 'pokemonRed.primary.500',
                                            '& img': {
                                                transition: 'transform .3s',
                                            },
                                            '&:hover': {
                                                borderColor: 'pokemonRed.primary.500',
                                                backgroundColor: 'pokemonRed.primary.50',
                                                '& img': {
                                                    transform: 'rotate(30deg)',
                                                }
                                            }
                                        }}
                                        startIcon={<img
                                            src="data:image/png;base64,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"
                                            alt=""/>}>
                                        Load more pokemon
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Suspense>
        </Fragment>
    )
};

export default PokemonList