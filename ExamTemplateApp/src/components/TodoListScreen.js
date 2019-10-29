import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

const TodoListScreen = props => {
    const dispatch = useDispatch()
    const todoInput = useSelector(state => state.todo.todoInput)

    return (
        <>
            <TextInput onChangeText={text => dispatch({
                type: 'TODO_INPUT',
                payload: text
            })} 
            style={{ width: '90%', borderColor: 'red', borderWidth: 1, padding: 10 }} />
            <Text>TODO HERE</Text>
            <Text>{todoInput}</Text>
        </>
    )
}

export default TodoListScreen