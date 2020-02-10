import React from 'react';
import {Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {ListItem} from "react-native-elements";

interface list {
    name: string,
    priority: number,
}

const ListsScreen = ({ navigation }) => {
    const lists: Array<list> = [
        {
            name: 'Tim Packing',
            priority: 1
        },
        {
            name: 'Laura  Packing',
            priority: 2
        }
    ];

    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('AddList')}>
                <Entypo name="add-to-list" size={32} />
            </TouchableOpacity>
        ),
    });

    return (<>
        <FlatList
            data={lists}
            renderItem={({ item }) => (
                <ListItem
                    key={item.priority}
                    title={item.name}
                    bottomDivider
                />
            )}
        />
    </>);
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default ListsScreen;
