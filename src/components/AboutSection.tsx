import { Box, styled, Typography } from '@mui/material';

const AboutContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	textAlign: 'justify',
	justifyContent: 'center',
	alignItems: 'center',
	width: '95vw',
	backgroundColor: theme.palette.background.default,
	position: 'relative',
	maxHeight: 750,
	maxWidth: 1000,
	padding: '1rem',
}));

const AboutSection = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				height: '80vh',
			}}
		>
			<AboutContainer>
				<Typography variant={'h4'}>I write, build and deploy code.</Typography>
			</AboutContainer>
			<AboutContainer>
				I am passionate about all aspects of the software development lifecycle,
				whether configuring build and deployment services or writing the code to
				be deployed.
			</AboutContainer>

			<AboutContainer>
				I have worked in web development for almost 10 years, on a wide range of
				projects from small personal websites to large enterprise applications.
				I have experience with both front-end and back-end development, but my
				focus lately has been primarily on front-end work.
			</AboutContainer>
			<AboutContainer>
				I have a strong appreciation for well-written documentation and I am
				always eager to learn about new technologies and apply them to my work.
			</AboutContainer>
		</div>
	);
};
export default AboutSection;
