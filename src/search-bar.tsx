import {FC, Fragment} from 'react'
import {Box, Button, Container, Grid, TextField} from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: FC = (): JSX.Element => {
    return (
        <Fragment>
            <Box sx={{
                width: 1,
                py: 5,
                borderBottom: '3px solid',
                borderBottomColor: 'pokemonBorder.default',
                flex: '0 0 auto',
                backgroundColor: 'background.search',
                boxShadow: '10px 5px rgba(33, 168, 190, .8)',
            }}>
                <Container maxWidth={'xl'}>
                    <Grid container spacing={2} justifyContent="center" direction="row" alignItems="center">
                        <Grid item xs={8}>
                            <TextField
                                placeholder="Search pokemon"
                                size="lg"
                                variant="outlined"
                                sx={{
                                    mr: 2,
                                    flex: '0 0 50%'
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Button startIcon={<SearchIcon/>} size="lg">Search</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fragment>
    )
};

export default SearchBar
