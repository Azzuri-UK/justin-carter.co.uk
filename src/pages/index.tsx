import { Box, useTheme } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import lightLogo from '../../public/logo_fe_light_low.webp';
import darkLogo from '../../public/logo_fe_dark_low.webp';

const LogoContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '80vh',
	width: '90%',
	backgroundColor: theme.palette.background.paper,
	position: 'relative',
	[theme.breakpoints.down('sm')]: {
		height: '40vh',
	},
	maxHeight: 750,
	maxWidth: 1000,
}));

const CenteredLogo = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '90vh',
}));

const IndexPage = () => {
	const theme = useTheme();
	let LogoImage: JSX.Element;
	if (theme.palette.mode === 'dark') {
		LogoImage = <Image src={darkLogo} alt='Justin Carter Logo' fill priority />;
	} else {
		LogoImage = (
			<Image src={lightLogo} alt='Justin Carter Logo' fill priority />
		);
	}
	return (
		<CenteredLogo>
			<LogoContainer>{LogoImage}</LogoContainer>
		</CenteredLogo>
	);
};

export default IndexPage;
