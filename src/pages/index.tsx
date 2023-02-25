import { IconButton, Typography } from '@mui/material';

import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import ReactFullpage from '@fullpage/react-fullpage';
import LogoSection from '@/components/LogoSection';
import AboutSection from '@/components/AboutSection';
import { useEffect, useState } from 'react';

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
			render={({ state, fullpageApi }) => {
				return (
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
						<div style={{ height: '100vh' }} className='section'>
							<AboutSection />
						</div>
					</div>
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
