import 'react-native-gesture-handler';
import React from 'react';

import {UtilityThemeProvider} from 'react-native-design-utility';
import {NavigationContainer} from '@react-navigation/native';

import {theme} from './App/constants/theme';
import MainStackNavigator from './App/Routes/mainStackNavigator';

const App: React.FC = () => {
	return (
		<UtilityThemeProvider theme={theme}>
			<NavigationContainer>
				<MainStackNavigator />
			</NavigationContainer>
		</UtilityThemeProvider>
	);
};

export default App;
