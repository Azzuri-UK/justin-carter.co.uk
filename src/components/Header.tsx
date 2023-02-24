import {
	Box,
	Button,
	IconButton,
	Toolbar,
	Tooltip,
	useTheme,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeMode } from '@/hooks/useThemeMode';

interface MenuItemsInterface {
	title: string;
	href: string;
}

const menuItems: MenuItemsInterface[] = [
	// {
	// 	title: 'Home',
	// 	href: '/',
	// },
	// {
	// 	title: 'CV',
	// 	href: '/cv',
	// },
	// {
	// 	title: 'Storybook',
	// 	href: '/storybook',
	// },
];
const Header = () => {
	const theme = useTheme();
	const { handleDarkMode } = useThemeMode();
	const tooltip =
		theme.palette.mode === 'dark'
			? 'Switch to light mode'
			: 'Switch to dark mode';
	return (
		<Toolbar>
			<Box sx={{ flexGrow: 1 }} />
			<Tooltip title={tooltip}>
				<IconButton sx={{ ml: 1 }} onClick={handleDarkMode} color='inherit'>
					{theme.palette.mode === 'dark' ? (
						<Brightness7Icon />
					) : (
						<Brightness4Icon />
					)}
				</IconButton>
			</Tooltip>
			{menuItems &&
				menuItems.map((item: MenuItemsInterface, index) => (
					<Button key={index} href={item.href}>
						{item.title}
					</Button>
				))}
		</Toolbar>
	);
};
export default Header;
