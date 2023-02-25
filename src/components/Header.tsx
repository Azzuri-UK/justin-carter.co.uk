import {
	Box,
	Button,
	IconButton,
	Toolbar,
	Tooltip,
	useTheme,
} from '@mui/material';
import {
	Brightness4,
	Brightness7,
	GitHub,
	LinkedIn,
} from '@mui/icons-material/';

import { useThemeMode } from '@/hooks/useThemeMode';

interface MenuItemsInterface {
	title: string;
	href: string;
	className?: string;
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
		<Toolbar sx={{ width: '100vw' }}>
			<Box sx={{ flexGrow: 1 }} />
			<Tooltip title={tooltip}>
				<IconButton sx={{ ml: 1 }} onClick={handleDarkMode} color='inherit'>
					{theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
				</IconButton>
			</Tooltip>
			<Tooltip title='GitHub'>
				<IconButton
					sx={{ ml: 1 }}
					href='https://github.com/Azzuri-UK'
					target='_blank'
					color='inherit'
				>
					<GitHub />
				</IconButton>
			</Tooltip>
			<Tooltip title='LinkedIn'>
				<IconButton
					sx={{ ml: 1 }}
					href='https://www.linkedin.com/in/jcarter80/'
					target='_blank'
					color='inherit'
				>
					<LinkedIn />
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
