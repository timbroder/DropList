import React, {useState} from 'react';
import { connect } from 'react-redux';
import {Text, StyleSheet, TouchableOpacity, FlatList, View, Animated, LayoutAnimation} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {ListItem} from "react-native-elements";
import {SwipeListView} from "react-native-swipe-list-view";
import {addTodo, deleteList, deleteTodos} from "../redux/actions";

interface list {
    name: string,
    priority: number,
}

const ListsScreen = ({ lists, deleteList, deleteTodos, navigation }) => {
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('AddList')}>
                <Entypo name="add-to-list" size={32} />
            </TouchableOpacity>
        ),
    });

    const [deleting, setDeleting] = useState([]);

    const onSwipeValueChange = swipeData => {
        const { key } = swipeData;
        if (Math.abs(swipeData.value) >= 250 && !deleting.includes(key)) {
            deleteTodos(parseInt(key));
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

            setDeleting(deleting.concat(key))
            deleteList(parseInt(key));
            setDeleting(deleting.filter(item => item != key));
        }
    };

    return lists.length <= 0
        ? null
        : (<>
        <SwipeListView
            data={lists}
            keyExtractor={(item) => item.id.toString() }
            renderItem={({ item }) => (
                <ListItem
                    title={item.name}
                    bottomDivider
                    onPress={() => navigation.navigate('List', {
                        listId: item.id
                    })}
                />
            )}
            renderHiddenItem={(data, rowMap) => (
                <View style={styles.rowBack}>
                    <View
                        style={[
                            styles.btn,
                            styles.leftBtn
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
                            styles.rightBtn
                        ]}
                    >
                        <Entypo
                            name="trash"
                            size={25}
                            color="white"
                        />
                    </View>
                </View>
            )}
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
        backgroundColor: 'red',
        flex: 1,
    },
    rightBtn: {
        alignItems: 'flex-end',
        paddingHorizontal: 15
    },
    leftBtn: {
        alignItems: 'flex-start',
        paddingHorizontal: 15
    },
});

const mapStateToProps = state => {
    const { lists } = state;

    return { lists }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteList: (id: number) => {
            dispatch(deleteList(id));
        },
        deleteTodos: (listId: number) => {
            dispatch(deleteTodos(listId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsScreen);
