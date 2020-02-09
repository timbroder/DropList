import React from 'react';
import {StyleSheet, View} from 'react-native';
import {capitalize} from "../utils/string";
import {Input, Button} from "react-native-elements";

interface AddScreenProps {
    what: string
}

const AddScreen = (props: AddScreenProps) => {
    const whatDisplay = capitalize(props.what);

    return (
        <View style={styles.container}>
            <Input placeholder={whatDisplay}/>
            <View style={styles.spacer} />
            <Button style={styles.button}
                title={`Add ${whatDisplay}`}
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
