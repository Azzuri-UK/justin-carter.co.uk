import {
	Box,
	IconButton,
	styled,
	Toolbar,
	Typography,
	Link,
} from '@mui/material';

import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import ReactFullpage from '@fullpage/react-fullpage';
import LogoSection from '@/components/LogoSection';
import AboutSection from '@/components/AboutSection';
import { useEffect, useRef, useState } from 'react';
import ExperienceSection from '@/components/ExperienceSection';
import Header from '@/components/Header';
import NextLink from 'next/link';

const StyledLink = styled(Link)(({ theme }) => ({
	'&.active': {
		textDecoration: 'underline',
	},
})) as typeof Link;

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	zIndex: 1000,
	width: '50vw',
	minWidth: 350,
	position: 'fixed',
	top: 0,
	right: 0,
}));
const IndexPage = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		function handleResize() {
			setIsMobile(window.innerWidth <= 410);
		}

		handleResize(); // set initial value
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<ReactFullpage
			licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_KEY}
			scrollingSpeed={1000}
			scrollOverflow={false}
			paddingBottom={'100px'}
			responsiveWidth={410}
			menu={'#menu'}
			anchors={['home', 'about', 'experience']}
			render={({ state, fullpageApi }) => {
				return (
					<>
						<StyledToolbar id={'menu'}>
							<Box sx={{ flexGrow: 1 }} />
							<StyledLink
								sx={{ mx: 2 }}
								component={NextLink}
								href='#home'
								underline='hover'
								color='inherit'
								data-menuanchor='home'
							>
								Home
							</StyledLink>
							<StyledLink
								sx={{ mx: 2 }}
								component={NextLink}
								href='#about'
								underline='hover'
								color='inherit'
								data-menuanchor='about'
							>
								About
							</StyledLink>
							{/*<StyledLink*/}
							{/*	data-menuanchor='experience'*/}
							{/*	sx={{ ml: 2 }}*/}
							{/*	component={NextLink}*/}
							{/*	href='/'*/}
							{/*	underline='hover'*/}
							{/*	color='inherit'*/}
							{/*>*/}
							{/*	Experience*/}
							{/*</StyledLink>*/}
						</StyledToolbar>
						<div id='fullpage-wrapper'>
							<div style={{ height: '100vh' }} className='section'>
								<LogoSection />
								{!isMobile && (
									<>
										<Typography>About Me</Typography>
										<IconButton onClick={() => fullpageApi.moveSectionDown()}>
											<KeyboardArrowDown />
										</IconButton>
									</>
								)}
							</div>
							<div
								style={{ height: '100vh', textAlign: 'center' }}
								className='section'
							>
								<AboutSection />
								{/*{!isMobile && (*/}
								{/*	<>*/}
								{/*		<Typography>My Experience</Typography>*/}
								{/*		<IconButton onClick={() => fullpageApi.moveSectionDown()}>*/}
								{/*			<KeyboardArrowDown />*/}
								{/*		</IconButton>*/}
								{/*	</>*/}
								{/*)}*/}
							</div>
							{/*<div style={{ height: '100vh' }} className='section'>*/}
							{/*	<ExperienceSection />*/}
							{/*</div>*/}
						</div>
					</>
				);
			}}
			credits={{
				enabled: false,
				label: 'Made with fullpage.js',
				position: 'right',
			}}
		/>
	);
};

export default IndexPage;
