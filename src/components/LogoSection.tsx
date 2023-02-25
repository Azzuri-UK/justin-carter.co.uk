import { Box, styled, useTheme } from '@mui/material';
import darkLogo from '../../public/logo_fs_dark_low.webp';
import lightLogo from '../../public/logo_fs_light_low.webp';
import Image from 'next/image';

const LogoContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '80vh',
	width: '95vw',
	backgroundColor: theme.palette.background.default,
	position: 'relative',
	[theme.breakpoints.down('sm')]: {
		height: '40vh',
		maxHeight: 'none',
	},
	[theme.breakpoints.between('sm', 'md')]: {
		height: '50vh',
	},
	[theme.breakpoints.between('md', 'lg')]: {
		height: '60vh',
	},
	[theme.breakpoints.up('lg')]: {
		height: '80vh',
	},
	maxHeight: 750,
	maxWidth: 1000,
	'& img': {
		maxWidth: '100%',
		maxHeight: '100%',
	},
}));

const CenteredLogo = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '90vh',
}));

const LogoSection = () => {
	const theme = useTheme();
	let LogoImage: JSX.Element;
	if (theme.palette.mode === 'dark') {
		LogoImage = (
			<Image
				style={{ width: 'auto', height: 'auto' }}
				src={darkLogo}
				alt='Justin Carter Logo'
			/>
		);
	} else {
		LogoImage = (
			<Image
				style={{ width: 'auto', height: 'auto' }}
				src={lightLogo}
				alt='Justin Carter Logo'
			/>
		);
	}
	return (
		<CenteredLogo>
			<LogoContainer>{LogoImage}</LogoContainer>
		</CenteredLogo>
	);
};

export default LogoSection;
