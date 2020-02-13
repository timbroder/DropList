import React from 'react';
import {AsyncStorage} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import hardSet from "redux-persist/es/stateReconciler/hardSet";

import ListsScreen from "./src/screens/ListsScreen";
import AddListScreen from "./src/screens/AddListScreen";
import reducer from "./src/redux/reducers";
import ListScreen from "./src/screens/ListScreen";
import AddTodoScreen from "./src/screens/AddTodoScreen";

const Stack = createStackNavigator();

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: hardSet
}
const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer);
const persistor = persistStore(store);

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Lists" component={ListsScreen} />
                        <Stack.Screen name="AddList" component={AddListScreen} />
                        <Stack.Screen name="List" component={ListScreen} />
                        <Stack.Screen name="AddTodo" component={AddTodoScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

export default App;