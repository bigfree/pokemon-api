import {FC, Fragment} from 'react'
import {Box, Button, Container, Grid, TextField} from "@mui/joy";
import SearchIconUrl from 'pokemon-assets/assets/svg/search-button.svg';

const SearchBar: FC = (): JSX.Element => {
    return (
        <Fragment>
            <Box sx={{
                width: 1,
                py: 3,
                borderBottom: '3px solid',
                borderBottomColor: 'pokemonBorder.default',
                flex: '0 0 auto',
                backgroundColor: 'background.search',
                boxShadow: '10px 5px rgba(33, 168, 190, .8)',
            }}>
                <Container maxWidth={'xl'}>
                    <Grid
                        container
                        spacing={2}
                        justifyContent="flex-start"
                        direction="row"
                        alignItems="center"
                    >
                        <Grid item xs={4}>
                            <TextField
                                placeholder="Search pokemon"
                                size="lg"
                                variant="plain"
                                autoComplete="false"
                                sx={{
                                    '& > div': {
                                        borderRadius: 0,
                                        border: '3px solid',
                                        borderColor: 'pokemonBorder.default',
                                        boxShadow: '3px 3px #e84848'
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                startIcon={
                                    <Box
                                        component={'img'}
                                        src={SearchIconUrl}
                                        sx={{maxHeight: 34}}
                                    />
                                }
                                size="lg"
                                sx={{
                                    borderRadius: 0,
                                    backgroundColor: 'background.cardContent',
                                    boxShadow: '3px 3px #4d4d4d',
                                    '&:hover': {
                                        backgroundColor: '#e84848'
                                    }
                                }}
                            >Search</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fragment>
    )
};

export default SearchBar
