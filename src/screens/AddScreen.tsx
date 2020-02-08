import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface AddScreenProps {
    what: string
}

const AddScreen = (props: AddScreenProps) => {
    return <Text style={styles.text}>{ props.what }</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default AddScreen;
