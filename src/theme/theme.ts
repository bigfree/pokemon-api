import {extendTheme, Theme} from "@mui/joy";

declare module '@mui/joy/styles' {
    interface Palette {
        red: {
            primary: string;
            secondary: string;
        };
    }
}


export const theme: Theme = extendTheme({
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
                primary: {

                },
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
                }
            }
        }
    }
});