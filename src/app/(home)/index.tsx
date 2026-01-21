import { Button, View } from 'react-native'
import { useContext } from 'react';
import { ColorSchemeContext, SetColorSchemeContext } from '@/src/providers/M3ThemeProvider';
import { nativeWindTheme } from '@/src/styles/Theme';
import { IconButton, Text } from 'react-native-paper';

export default function Index() {

	const colorScheme = useContext(ColorSchemeContext) ?? "light";
	const setColorScheme = useContext(SetColorSchemeContext);

	return (
        <View
            style={nativeWindTheme[colorScheme]}
			className='bg-surface-container-lowest flex-1'
        >
            <Text variant='titleLarge'>Edit app/index.tsx to edit this screen</Text>
			<Button 
				title='Theme Switch' 
				onPress={() => {
					setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
				}}/>

			<IconButton onPress={() => {}} icon={'home'} mode='contained' size={48}></IconButton>
			<View className='size-10 bg-primary'></View>
        </View>
    )
}
