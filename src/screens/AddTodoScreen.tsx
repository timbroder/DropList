import React from 'react';
import { connect } from 'react-redux';
import AddScreen from "./AddScreen";
import {addList} from "../redux/actions";

const AddListScreen = (props) => {
    return <AddScreen what={"list"}
                      onAdd={props.onListAdd}
                      onAddComplete={() => props.navigation.goBack() }
                      />
};

const mapDispatchToProps = dispatch => {
    return {
        onListAdd: (name: string) => {
            console.log('onListAdd', name)
            dispatch(addList(name))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddListScreen);