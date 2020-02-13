import React from 'react';
import { connect } from 'react-redux';
import AddScreen from "./AddScreen";
import {addList} from "../redux/actions";

const AddListScreen = ({ onListAdd, navigation}) => {
    return <AddScreen what={"list"}
                      onAdd={onListAdd}
                      />
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onListAdd: (name: string) => {
            dispatch(addList(name))
            ownProps.navigation.goBack()
        }
    }
}

export default connect(null, mapDispatchToProps)(AddListScreen);