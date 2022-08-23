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
    colorSchemes: {
        light: {
            palette: {
                primary: {

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