import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import ListenNowScreen from '../Containers/listenNow/ListenNowScreen';
import LibraryScreen from '../Containers/library/LibraryScreen';
import SearchScreen from '../Containers/search/SearchScreen';

const ListenNowStack = createStackNavigator();
const LibraryStack = createStackNavigator();
const SearchStack = createStackNavigator();

const ListenNowStackNavigator = () => {
	return (
		<ListenNowStack.Navigator>
			<ListenNowStack.Screen
				options={{
					title: 'Listen Now',
				}}
				name="ListenNow"
				component={ListenNowScreen}
			/>
		</ListenNowStack.Navigator>
	);
};

const LibraryStackNavigator = () => {
	return (
		<LibraryStack.Navigator>
			<LibraryStack.Screen name="Library" component={LibraryScreen} />
		</LibraryStack.Navigator>
	);
};

const SearchStackNavigator = () => {
	return (
		<SearchStack.Navigator>
			<SearchStack.Screen name="Search" component={SearchScreen} />
		</SearchStack.Navigator>
	);
};

const MainTab = createBottomTabNavigator();

const MainTabNavigator: React.FC = () => {
	return (
		<MainTab.Navigator>
			<MainTab.Screen
				options={{
					title: 'Listen Now',
				}}
				name="ListenNow"
				component={ListenNowStackNavigator}
			/>
			<MainTab.Screen name="Library" component={LibraryStackNavigator} />
			<MainTab.Screen name="Search" component={SearchStackNavigator} />
		</MainTab.Navigator>
	);
};

export default MainTabNavigator;
