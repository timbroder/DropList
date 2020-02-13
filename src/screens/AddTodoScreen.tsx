import React from 'react';
import { connect } from 'react-redux';
import AddScreen from "./AddScreen";
import {addTodo} from "../redux/actions";
import {getList} from "../redux/selectors";

const AddTodoScreen = ({ list, onTodoAdd, navigation}) => {
    return <AddScreen what={"todo"}
                      onAdd={onTodoAdd}
                      onAddComplete={() => navigation.goBack() }
                      />
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTodoAdd: (name: string) => {
            dispatch(addTodo(name, ownProps.route.params.listId))
            ownProps.navigation.goBack()
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const list = getList(state, ownProps.route.params.listId)

    return { list }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoScreen);