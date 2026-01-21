import React, { createContext } from 'react'
import { useColorScheme } from 'nativewind'
import { PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import { m3DarkTheme, m3LightTheme } from '@/src/styles/PaperTheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';


export const ColorSchemeContext = createContext<"light" | "dark" | undefined>(undefined);
export const SetColorSchemeContext = createContext<(scheme: "light" | "dark" | "system") => void>(() => {});

interface M3ThemeProviderProps {
	children: React.ReactNode;
}

export const M3ThemeProvider = ({ children }: M3ThemeProviderProps) => {
	const { colorScheme, setColorScheme } = useColorScheme();
	
	const paperTheme = (colorScheme === 'light') ? m3LightTheme : m3DarkTheme;

	const { LightTheme: NavLightTheme } = adaptNavigationTheme({ 
		reactNavigationLight: DefaultTheme,
		materialLight: m3LightTheme, 
	});
	
	const { DarkTheme: NavDarkTheme } = adaptNavigationTheme({ 
		reactNavigationDark: DarkTheme,
		materialDark: m3DarkTheme,
	});
	
	const navTheme = {
		...((colorScheme === 'light') ? NavLightTheme : NavDarkTheme),

		// this line is added as a workaround because of a type issue in React Native Paper
		// Refer https://github.com/callstack/react-native-paper/issues/4751
		fonts: DefaultTheme.fonts, 
	};

	return (
		<ColorSchemeContext.Provider value={colorScheme}>
			<SetColorSchemeContext.Provider value={setColorScheme}>
				<PaperProvider theme={paperTheme}>
					<ThemeProvider value={navTheme}>
						{children}
					</ThemeProvider>
				</PaperProvider>
			</SetColorSchemeContext.Provider>
		</ColorSchemeContext.Provider>
	)
}

export default M3ThemeProvider