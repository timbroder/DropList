import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const ListsScreen = ({ navigation }) => {
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('AddList')}>
                <Entypo name="add-to-list" size={32} />
            </TouchableOpacity>
        ),
    });
    return <Text>Hi</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default ListsScreen;
