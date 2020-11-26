import React from 'react';
import { connect } from 'react-redux';
import { toggleToDo } from '../actions';

const ToDo = ({ id, todo, completed, toggleToDo }) => {
    return(
        <li 
            className={completed ? 'completed' : 'incomplete'}
            onClick={() => toggleToDo(id)}
        >
            {todo}
        </li>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleToDo: id => dispatch( toggleToDo(id) )
})

export default connect(null, mapDispatchToProps)(ToDo);