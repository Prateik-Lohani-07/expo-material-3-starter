import { Tabs } from 'expo-router'
import '@/src/styles/global.css';
import M3ThemeProvider, { ColorSchemeContext } from '@/src/providers/M3ThemeProvider';
import { Icon } from 'react-native-paper';
import { useContext } from 'react';


export default function RootLayout() {
	return (
		<M3ThemeProvider>
			<Tabs
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName='(home)'
			>
				<Tabs.Screen
					name='(home)' 
					options={{ 
						title: "Home",
						tabBarIcon: ({ color, size }) => <Icon source='home' color={color} size={size} />
					}}
				/>

				<Tabs.Screen 
					name='(settings)' 
					options={{ 
						title: "Home",
						tabBarIcon: ({ color, size }) => <Icon source='cog' color={color} size={size} />
					}}
				/>
			</Tabs>
		</M3ThemeProvider>
	)
}
