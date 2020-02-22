import React from 'react';
import { connect } from 'react-redux';
import Add from "../components/Add";
import {addList} from "../redux/actions";

const AddListScreen = ({ onListAdd, navigation}) => {
    return <Add what={"list"}
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