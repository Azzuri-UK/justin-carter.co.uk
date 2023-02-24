import { ThemeProvider, useMediaQuery } from '@mui/material';
import { createContext, useEffect, useState, ReactNode } from 'react';
import Light from '@/styles/Light';
import Dark from '@/styles/Dark';
export interface ThemeContextValue {
	darkMode: boolean | undefined;
	handleDarkMode: () => void;
}

interface ThemeContextProviderProps {
	children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextValue>({
	darkMode: false,
	handleDarkMode: () => {},
});

export function ThemeContextProvider({
	children,
}: ThemeContextProviderProps): JSX.Element {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

	useEffect(() => {
		if (localStorage.getItem('theme') === 'dark') {
			setDarkMode(true);
		} else if (localStorage.getItem('theme') === 'light') {
			setDarkMode(false);
		} else {
			setDarkMode(prefersDarkMode);
		}
	}, [prefersDarkMode]);

	const handleDarkMode = () => {
		if (darkMode) {
			localStorage.setItem('theme', 'light');
			setDarkMode(false);
		} else {
			localStorage.setItem('theme', 'dark');
			setDarkMode(true);
		}
	};
	return (
		<ThemeContext.Provider value={{ darkMode, handleDarkMode }}>
			<ThemeProvider theme={darkMode ? Dark : Light}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
}
