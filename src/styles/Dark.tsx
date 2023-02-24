import { createTheme } from '@mui/material';

const Dark = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#303034',
		},
		secondary: {
			main: '#424b97',
		},
		background: {
			default: '#000',
		},
	},
});

export default Dark;
