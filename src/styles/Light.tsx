import { createTheme } from '@mui/material';

const Light = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
	palette: {
		mode: 'light',
		primary: {
			main: '#303034',
		},
		secondary: {
			main: '#424b97',
		},
	},
});

export default Light;
