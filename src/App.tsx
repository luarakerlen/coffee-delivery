import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { darkTheme } from './styles/themes/dark';
import { defaultTheme } from './styles/themes/default';

export function App() {
	const [theme, setTheme] = useState(defaultTheme);

	function handleChangeTheme() {
		if (theme === defaultTheme) setTheme(darkTheme);
		else setTheme(defaultTheme);
	}

	return (
		<ThemeProvider theme={theme}>
			<button onClick={handleChangeTheme}>Trocar tema</button>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	);
}
