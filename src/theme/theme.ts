import {extendTheme, Theme} from "@mui/joy";
import {PaletteRange} from "@mui/joy/styles/types/colorSystem";

interface pokemonBorderInterface {
    default: string | undefined;
    cardContent: string | undefined;
    asideDivider: string | undefined;
}

declare module '@mui/joy/styles' {
    interface PaletteBackground {
        aside: string;
        search: string;
        cardContent: string | undefined;
    }
}

declare module '@mui/joy/styles' {
    interface Palette {
        pokemonBorder: pokemonBorderInterface,
        pokemonRed: {
            primary: PaletteRange | undefined,
            secondary: string,
        }
    }
}


export const theme: Theme = extendTheme({
    fontFamily: {
        body: '"Courier Prime", var(--joy-fontFamily-fallback)',
        display: '"Courier Prime", var(--joy-fontFamily-fallback)'
    },
    components: {
        JoyTextField: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                }
            }
        }
    },
    colorSchemes: {
        light: {
            palette: {
                primary: {},
                background: {
                    body: '#e84848',
                    aside: '#FDF079',
                    search: '#44BDD0',
                    cardContent: '#BA3A3A',
                },
                pokemonBorder: {
                    default: "#4d4d4d",
                    cardContent: "#A23232",
                    asideDivider: '#fdf180',
                },
                pokemonRed: {
                    primary: {
                        "50": "#ffede8",
                        "100": "#ffcab9",
                        "200": "#ffa78b",
                        "300": "#ff845d",
                        "400": "#ff602e",
                        "500": "#ff3d00",
                        "600": "#d13200",
                    },
                    secondary: 'green',
                },
                types: {
                    bug: {
                        background: '#F4F9EA',
                        border: '#5E7D1D',
                        shadow: '#D8E9B5',
                    },
                    dark: {
                        background: '#EFEEF0',
                        border: '#3B3642',
                        shadow: '#C5C3C9',
                    },
                    dragon: {
                        background: '#E7F0F9',
                        border: '#07477F',
                        shadow: '#A9CCEA',
                    },
                    electric: {
                        background: '#FEFBEB',
                        border: '#9E8926',
                        shadow: '#FBEFBA',
                    },
                    fairy: {
                        background: '#FDF4FD',
                        border: '#995D96',
                        shadow: '#F8D8F6',
                    },
                    fighting: {
                        background: '#FAECF0',
                        border: '#862A44',
                        shadow: '#EEBCCB',
                    },
                    fire: {
                        background: '#FFF5EE',
                        border: '#A66537',
                        shadow: '#FFDCC3',
                    },
                    flying: {
                        background: '#F4F6FC',
                        border: '#5D6D90',
                        shadow: '#D8E1F3',
                    },
                    ghost: {
                        background: '#EEF0F7',
                        border: '#354470',
                        shadow: '#C2CBE2',
                    },
                    grass: {
                        background: '#EFF8EF',
                        border: '#407A3B',
                        shadow: '#C8E7C6',
                    },
                    ground: {
                        background: '#FBF1ED',
                        border: '#8D4D2E',
                        shadow: '#F2CFBE',
                    },
                    ice: {
                        background: '#F1FAF9',
                        border: '#4B867D',
                        shadow: '#CEEEE9',
                    },
                    normal: {
                        background: '#F4F5F6',
                        border: '#5E6369',
                        shadow: '#D8DBDE',
                    },
                    poison: {
                        background: '#F7F0FA',
                        border: '#6F4582',
                        shadow: '#E2CBEC',
                    },
                    psychic: {
                        background: '#FEF1F1',
                        border: '#A2494D',
                        shadow: '#FDCDCF',
                    },
                    rock: {
                        background: '#F9F8F3',
                        border: '#81775A',
                        shadow: '#EBE6D6',
                    },
                    steel: {
                        background: '#EFF4F6',
                        border: '#3B5C69',
                        shadow: '#C5D7DE',
                    },
                    water: {
                        background: '#EDF4FB',
                        border: '#325E8A',
                        shadow: '#C1D8F0',
                    },
                }
            }
        }
    }
});