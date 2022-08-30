import {FC} from 'react'
import {Box, Button} from "@mui/joy";
import asideHeaderImageUrl from './assets/valor.png';
import {Divider} from "@mui/material";
import pikachuImageSrc from './assets/pikachu.png';
import {useNavigate} from "react-router-dom";

/**
 * Header component
 * @constructor
 */
const Aside: FC = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <Box component="nav" sx={{
            flex: '0 0 90px',
            width: '90px',
            p: 1,
            borderRight: '3px solid',
            borderBottomColor: 'pokemonBorder.default',
            backgroundColor: 'background.aside',
            boxShadow: '5px 5px rgba(240, 228, 115, .8)',
            display: 'flex',
            flexFlow: 'column',
            zIndex: 999,
        }}>
            <Box component='img' src={asideHeaderImageUrl} sx={{
                maxWidth: 1,
                p: 1.2,
            }}/>
            <Divider sx={{
                borderColor: 'pokemonBorder.asideDivider',
                boxShadow: '1px 1px #e4d86d',
                mt: 1,
                mb: 2
            }}/>
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexFlow: 'column',
            }}>
                <Button
                    variant={'outlined'}
                    color={'neutral'}
                    startIcon={<img src={pikachuImageSrc} alt=""/>}
                    onClick={() => navigate('/')}
                    sx={{
                        fontSize: 13,
                        borderColor: '#e6da6e',
                        backgroundColor: '#f5e975',
                        height: 'auto',
                        display: 'flex',
                        flexFlow: 'column',
                        alignItems: 'center',
                        borderRadius: 4,
                        boxShadow: '2px 2px #f5e975',
                        p: 1,
                        maxWidth: 1,
                        mb: 2,
                        '& > span': {
                            mx: 0,
                            mb: 0.5
                        },
                        '& img': {
                            maxHeight: 34
                        },
                        '&:hover': {
                            boxShadow: '2px 2px #e6da6e',
                            borderColor: '#e6da6e',
                            backgroundColor: '#f5e975',
                        }
                    }}
                >Pokemon</Button>
                <Button
                    variant={'outlined'}
                    color={'neutral'}
                    startIcon={<img src={pikachuImageSrc} alt=""/>}
                    onClick={() => navigate('/')}
                    sx={{
                        fontSize: 13,
                        borderColor: '#e6da6e',
                        backgroundColor: '#f5e975',
                        height: 'auto',
                        display: 'flex',
                        flexFlow: 'column',
                        alignItems: 'center',
                        borderRadius: 4,
                        boxShadow: '2px 2px #f5e975',
                        p: 1,
                        maxWidth: 1,
                        '& > span': {
                            mx: 0,
                            mb: 0.5
                        },
                        '& img': {
                            maxHeight: 34
                        },
                        '&:hover': {
                            boxShadow: '2px 2px #e6da6e',
                            borderColor: '#e6da6e',
                            backgroundColor: '#f5e975',
                        }
                    }}
                >Games</Button>
            </Box>
            {/*<Typography level='h4' component="h4" fontStyle={'sm'}>PokeAPI</Typography>*/}
        </Box>
    )
};

export default Aside
