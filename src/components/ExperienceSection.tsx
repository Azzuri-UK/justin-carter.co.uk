import { Box, styled, Typography } from '@mui/material';

const ExperienceContainer = styled(Box)(({ theme }) => ({
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

const ExperienceSection = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				height: '80vh',
			}}
		>
			<ExperienceContainer>
				<Typography variant={'h4'}>I write, build and deploy code.</Typography>
			</ExperienceContainer>
		</div>
	);
};

export default ExperienceSection;
