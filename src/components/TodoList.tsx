import React, {useState} from 'react';
import { connect } from 'react-redux';
import {Text, StyleSheet, TouchableOpacity, FlatList, View, LayoutAnimation, Dimensions} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {ListItem} from "react-native-elements";
import {getIncompleteTodos, getList, getTodos} from "../redux/selectors";
import {SwipeListView} from "react-native-swipe-list-view";
import {deleteTodo, toggleTodo} from "../redux/actions";

interface list {
    name: string,
    priority: number,
}
const deleteBtnWidth = 50;

const TodoList = ({ list, todos, deleteTodo, toggleTodo }) => {
    const [updating, setUpdating] = useState([]);

    const deleteRange = (Dimensions.get('window').width / 2) + deleteBtnWidth / 2;

    const onSwipeValueChange = swipeData => {
        const { key } = swipeData;

        if (Math.abs(swipeData.value) >= deleteRange && !updating.includes(key)) {
            console.log(Math.abs(swipeData.value), 'delete');
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

            setUpdating(updating.concat(key));
            deleteTodo(parseInt(key));
            setUpdating(updating.filter(item => item != key));
        } else if (Math.abs(swipeData.value) >= 100 && !updating.includes(key)) {
            console.log(Math.abs(swipeData.value), 'toggle');
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

            setUpdating(updating.concat(key));
            toggleTodo(parseInt(key));
            setUpdating(updating.filter(item => item != key));
        }
    }

    return (todos.length <= 0
        ? null
        :
        <>
            <SwipeListView
                data={todos}
                keyExtractor={(item) => item.id.toString() }
                renderItem={({ item }) => (item.completed ?
                        <ListItem
                            key={item.id.toString()}
                            title={item.name}
                            bottomDivider
                            containerStyle={styles.completed}
                            titleStyle={styles.completedTitle}
                        />
                        : <ListItem
                            key={item.id.toString()}
                            title={item.name}
                            bottomDivider
                        />
                )}
                renderHiddenItem={(data, rowMap) => (
                    <View style={styles.rowBack}>
                        <View
                            style={[
                                styles.btn,
                                styles.checkBtn,
                                styles.leftBtn
                            ]}
                        >
                            <Entypo
                                name="check"
                                size={25}
                                color="white"
                            />
                        </View>
                        <View
                            style={[
                                styles.btn,
                                styles.deleteBtn,
                            ]}
                        >
                            <Entypo
                                name="trash"
                                size={25}
                                color="white"
                            />
                        </View>
                        <View
                            style={[
                                styles.btn,
                                styles.checkBtn,
                                styles.rightBtn
                            ]}
                        >
                            <Entypo
                                name="check"
                                size={25}
                                color="white"
                            />
                        </View>
                    </View>
                )}
                // leftOpenValue={dimensions.width}
                // rightOpenValue={-dimensions.width}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onSwipeValueChange={onSwipeValueChange}
            />
        </>);
};

const styles = StyleSheet.create({
    rowBack: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    rightBtn: {
        alignItems: 'flex-end',
        paddingHorizontal: 15
    },
    leftBtn: {
        alignItems: 'flex-start',
        paddingHorizontal: 15
    },
    deleteBtn: {
        backgroundColor: 'red',
        width: deleteBtnWidth,
    },
    checkBtn: {
        backgroundColor: 'green',
        flex: 1,
    },
    completed: {
        backgroundColor: 'gray',
    },
    completedTitle: {
        color: 'white',
        textDecorationLine: 'line-through',
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo(todoId: number) {
            dispatch(deleteTodo(todoId));
        },
        toggleTodo(todoId: number) {
            dispatch(toggleTodo(todoId));
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoList);
