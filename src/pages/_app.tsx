import type { AppProps } from 'next/app';
import Layout from '@/components/layout';
import { ThemeContextProvider } from '@/context/ThemeContext';
import CssBaseline from '@mui/material/CssBaseline';
export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeContextProvider>
			<CssBaseline />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeContextProvider>
	);
}
