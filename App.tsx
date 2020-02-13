import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from "redux";
import { Provider } from "react-redux";
import ListsScreen from "./src/screens/ListsScreen";
import AddListScreen from "./src/screens/AddListScreen";
import reducer from "./src/redux/reducers";
import ListScreen from "./src/screens/ListScreen";
import AddTodoScreen from "./src/screens/AddTodoScreen";

const Stack = createStackNavigator();
const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Lists" component={ListsScreen} />
                    <Stack.Screen name="AddList" component={AddListScreen} />
                    <Stack.Screen name="List" component={ListScreen} />
                    <Stack.Screen name="AddTodo" component={AddTodoScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;