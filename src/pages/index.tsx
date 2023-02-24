import { Roboto } from 'next/font/google';

import Image from 'next/image';
import { useTheme } from '@mui/material';
import logoDark from '../../public/logo_fe_dark_low.webp';
import logoLight from '../../public/logo_fe_light_low.webp';

export default function Home() {
	const theme = useTheme();
	return (
		<>
			<div
				style={{
					position: 'absolute',
					left: '50%',
					top: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			>
				<Image
					priority
					src={theme.palette.mode === 'dark' ? logoDark : logoLight}
					alt={'Justin Carter logo'}
				/>
			</div>
		</>
	);
}
