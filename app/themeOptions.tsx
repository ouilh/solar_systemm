import { Palette, ThemeOptions } from '@mui/material';

const spacings = [0, '4px', '8px', '16px', '32px', '64px', '128px', '256px'];

const themeOptions: ThemeOptions = {
    spacing: spacings,
    palette: {
        primary: {
            main: '#6100f0',
            dark: '#310078',
            light: '#c099f9'
        },
        secondary: {
            main: '#16b200',
            dark: '#0b5900',
            light: '#a2e099',
            contrastText: "#fff",
        },
        error: {
            main: '#dc143c',
            dark: '#ea728a',
            light: '#a50f2d',
            contrastText: "#f8d0d8",
        },
        background: {
            default: '#ffffff',
            paper: '#f4f4f4',
        },
    },
    typography: {
        fontFamily: 'Roboto, Montserrat, sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '2rem',
        },
        h2: {
            fontWeight: 300,
            fontSize: '2.8rem',
        },
        h3: {
            fontWeight: 300,
            fontSize: '2.8rem',
        },
        h4: {
            fontFamily: 'Open Sans',
            fontWeight: 400,
            fontSize: '2.0rem',
        },
        // ... Other typography options
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h2: {
                    margin: '32px 0',
                },
                h4: {
                    margin: '32px 0',
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    padding: spacings[2],
                    backgroundColor: '#f4f4f4',
                    minHeight: '100vh',
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: '#f4f4f4',
                    height: 1,
                    margin: '100px 0 100px 0',
                },
            },
        },
        MuiModal: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(255, 255, 255, 1.0)',
                    padding: '50px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '50%',
                    width: '50%',
                    margin: 'auto',
                    boxShadow: '0px 6px 15px 2px rgba(0, 0, 0, 0.5)',
                },
            },
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backdropFilter: 'brightness(100%)',
                    backgroundColor: 'rgba(97, 0, 240, 0.9)',
                    mixBlendMode: 'overlay',
                },
            },
        },

        // ... Other component overrides

    },
};

export default themeOptions;
