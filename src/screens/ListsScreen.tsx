import React from 'react';
import { connect } from 'react-redux';
import {Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {ListItem} from "react-native-elements";

interface list {
    name: string,
    priority: number,
}

const ListsScreen = ({ lists, navigation }) => {
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
                    key={item.id.toString()}
                    title={item.name}
                    bottomDivider
                    onPress={() => navigation.navigate('List', {
                        listId: item.id
                    })}
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

const mapStateToProps = state => {
    const { lists } = state;

    return { lists }
};

export default connect(mapStateToProps, null)(ListsScreen);
