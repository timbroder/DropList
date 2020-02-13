import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {capitalize} from "../utils/string";
import {Input, Button} from "react-native-elements";

interface AddScreenProps {
    what: string
}

const AddScreen = (props: AddScreenProps) => {
    const whatDisplay = capitalize(props.what);
    const [what, setWhat] = useState('');

    return (
        <View style={styles.container}>
            <Input
                placeholder={whatDisplay}
                onChangeText={text => setWhat(text)}
                value = {what}
            />
            <View style={styles.spacer} />
            <Button style={styles.button}
                title={`Add ${whatDisplay}`}
                onPress={() => {
                    props.onAdd(what);
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
    spacer: {
        height: 20
    },
    button: {
        marginHorizontal: 10
    }
});

export default AddScreen;
