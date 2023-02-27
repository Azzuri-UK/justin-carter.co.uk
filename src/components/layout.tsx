import Header from '@/components/Header';
import {
	Brightness4,
	Brightness7,
	GitHub,
	LinkedIn,
} from '@mui/icons-material/';
import { IconButton, Toolbar, Tooltip, useTheme } from '@mui/material';
import { useThemeMode } from '@/hooks/useThemeMode';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	const theme = useTheme();
	const { handleDarkMode } = useThemeMode();
	const tooltip =
		theme.palette.mode === 'dark'
			? 'Switch to light mode'
			: 'Switch to dark mode';

	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
}
