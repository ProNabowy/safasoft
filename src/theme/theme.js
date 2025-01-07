import { createTheme } from '@mui/material';
import components from './components';
let theme = createTheme({
    palette: {
        primary: {
            main: '#1777fb'
        },
        danger: {
            main: '#ff5f59'
        },
        gray: {
            main: '#acacac',
            light: '#eae8e9'
        },
        dark: {
            main: "#324356"
        }
    },
    spacing: 4
});


theme.components = components(theme);


export default theme;