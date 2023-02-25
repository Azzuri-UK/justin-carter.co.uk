import { Box, styled, Typography } from '@mui/material';

const AboutContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	width: '95vw',
	backgroundColor: theme.palette.background.default,
	position: 'relative',
	// [theme.breakpoints.down('sm')]: {
	// 	height: '40vh',
	// 	maxHeight: 'none',
	// },
	// [theme.breakpoints.between('sm', 'md')]: {
	// 	height: '50vh',
	// },
	// [theme.breakpoints.between('md', 'lg')]: {
	// 	height: '60vh',
	// },
	// [theme.breakpoints.up('lg')]: {
	// 	height: '80vh',
	// },
	maxHeight: 750,
	maxWidth: 1000,
	padding: '1rem',
}));

const AboutSection = () => {
	return (
		<>
			<AboutContainer>
				<Typography variant={'h4'}>
					I write code, build it and deploy it.
				</Typography>
			</AboutContainer>
			<AboutContainer>
				That might sound like a simple statement, but it&apos;s not. I have a
				passion for all aspects of the software development lifecycle and I am
				just as happy configuring build and deployment services as I am writing
				the code to be deployed
			</AboutContainer>

			<AboutContainer>
				I have worked in web development for almost 10 years, on a wide range of
				projects from small personal websites to large enterprise applications.
				I have experience with both front-end and back-end development, but my
				focus has been primarily on front-end work.
			</AboutContainer>
			<AboutContainer>
				I have a strong appreciation for well-written documentation and I am
				always eager to learn about new technologies and apply them to my work.
			</AboutContainer>
		</>
	);
};
export default AboutSection;
