import React from 'react'

const Todo = (props) => {
    const { id, text, completed } = props.props

    return (
        <tr>
            <td>{id}</td>
            <td style={{ textDecoration: completed ? 'line-through' : "" }}>{text}</td>
            <td><p>
                <label>
                    <input type="checkbox" checked={completed} onChange={() => props.HandleComplete(id)} />
                    {completed ? <span>complete</span> : <span>Not Complete</span>}
                </label>
            </p></td>
            <td><a href="/#" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons" onClick={() => props.OnDeleteTodo(id)}>delete</i></a></td>
        </tr>
    )
}

export default Todo
