import {
	Box,
	Button,
	IconButton,
	Link,
	styled,
	Toolbar,
	Tooltip,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import {
	Brightness4,
	Brightness7,
	GitHub,
	LinkedIn,
} from '@mui/icons-material/';
import NextLink from 'next/link';
import { useThemeMode } from '@/hooks/useThemeMode';
import getTextDecoration from '@mui/material/Link/getTextDecoration';

const Header = () => {
	const theme = useTheme();
	const { handleDarkMode } = useThemeMode();
	const tooltip =
		theme.palette.mode === 'dark'
			? 'Switch to light mode'
			: 'Switch to dark mode';
	const isViewportLessThan410 = useMediaQuery('(max-width: 410px)');
	return (
		<Toolbar
			sx={{
				position: 'absolute',
				backgroundColor: 'background.default',
				zIndex: 1000,
				height: 60,
				...(isViewportLessThan410
					? { width: 170, right: 0, top: 40 }
					: { top: 0, width: 210, left: 0, ml: -3 }),
				px: 0,
			}}
		>
			<Box
				sx={{
					...(isViewportLessThan410 ? { flexGrow: 1 } : { flexGrow: 0 }),
				}}
			>
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
			</Box>
		</Toolbar>
	);
};
export default Header;
