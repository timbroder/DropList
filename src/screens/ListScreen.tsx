import React, {useState} from 'react';
import { connect } from 'react-redux';
import {Text, StyleSheet, TouchableOpacity, FlatList, View, LayoutAnimation, Dimensions} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {ListItem} from "react-native-elements";
import {getCompleteTodos, getIncompleteTodos, getList, getTodos} from "../redux/selectors";
import {SwipeListView} from "react-native-swipe-list-view";
import {deleteTodo, toggleTodo} from "../redux/actions";
import TodoList from "../components/TodoList";

interface list {
    name: string,
    priority: number,
}
const deleteBtnWidth = 50;

const ListScreen = ({ list, incompleteTodos, completeTodos, navigation }) => {
    navigation.setOptions(!list
        ? null
        : {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('AddTodo', {
                listId: list.id
            })}>
                <Entypo name="plus" size={32} />
            </TouchableOpacity>
        ),
        title: list.name,
    });

    return (<View>
        <TodoList
            list
            todos={incompleteTodos}
        />
        <TodoList
            list
            todos={completeTodos}
        />
        </View>);
};

const mapStateToProps = (state, ownProps) => {
    const list = getList(state, ownProps.route.params.listId)
    const completeTodos = getCompleteTodos(state, ownProps.route.params.listId);
    const incompleteTodos = getIncompleteTodos(state, ownProps.route.params.listId);

    return { list, incompleteTodos, completeTodos }
};

export default connect(mapStateToProps, null)(ListScreen);
