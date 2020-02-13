import React from 'react';
import { connect } from 'react-redux';
import {Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {ListItem} from "react-native-elements";
import {getList, getTodos} from "../redux/selectors";

interface list {
    name: string,
    priority: number,
}

const ListScreen = ({ list, todos, navigation }) => {
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('AddTodo', {
                listId: list.id
            })}>
                <Entypo name="plus" size={32} />
            </TouchableOpacity>
        ),
        title: list.name,
    });

    return (<>
        <FlatList
            data={todos}
            renderItem={({ item }) => (
                <ListItem
                    key={item.id.toString()}
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

const mapStateToProps = (state, ownProps) => {
    const list = getList(state, ownProps.route.params.listId)
    const todos = getTodos(state, ownProps.route.params.listId);

    return { list, todos }
};

export default connect(mapStateToProps, null)(ListScreen);
