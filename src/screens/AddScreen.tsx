import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {capitalize} from "../utils/string";

interface AddScreenProps {
    what: string
}

const AddScreen = (props: AddScreenProps) => {
    return <Text style={styles.text}>{ capitalize(props.what) }</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default AddScreen;
