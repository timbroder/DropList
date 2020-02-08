import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListsScreen from "./src/screens/ListsScreen";
import AddListScreen from "./src/screens/AddListScreen";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Lists" component={ListsScreen} />
                <Stack.Screen name="AddList" component={AddListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;