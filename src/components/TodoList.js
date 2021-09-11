import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [todoToShow, setTodoToShow] = useState('all')
    const [toggleAllComplete, setToggleAllComplete] = useState(true)

    const addTodo = (todo) => {
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    const UpdateTodoToShow = (state) => {
        setTodoToShow(state);
    }

    const HandleComplete = (id) => {

        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        id: todo.id,
                        text: todo.text,
                        completed: !todo.completed
                    };
                } else {
                    return todo;
                }
            })
        )
    }

    const ToggleTodo = () => {
        setTodos(
            todos.map(todo => ({
                id: todo.id,
                text: todo.text,
                completed: toggleAllComplete
            })),
            setToggleAllComplete(!toggleAllComplete)
        )
    }
    const DeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const DeleteCompleteTodo = () => {
        setTodos(todos.filter(todo => !todo.completed))
    }

    let showTodo = [];
    if (todoToShow === 'all') {
        showTodo = todos
    } else if (todoToShow === 'active') {
        showTodo = todos.filter(todo => !todo.completed)
    } else {
        showTodo = todos.filter(todo => todo.completed)
    }
    const myTodos = todos.length > 0 ? <><table>
        <thead>
            <tr>
                <th>Todo Id</th>
                <th>Todo List</th>
                <th>Completed</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {showTodo.map(todo => (
                <Todo HandleComplete={HandleComplete} OnDeleteTodo={DeleteTodo} key={todo.id} props={todo} setTodos={setTodos} />))}
        </tbody>
    </table><div className="row">
            <div className="input-field col s4">
                <button className="btn waves-effect waves-light green" onClick={() => UpdateTodoToShow('all')}>All
                </button>
            </div>
            <div className="input-field col s4">
                <button className="btn waves-effect waves-light" onClick={() => UpdateTodoToShow('active')}>Active
                </button>
            </div>
            <div className="input-field col s4">
                <button className="btn waves-effect waves-light blue" onClick={() => UpdateTodoToShow('completed')}>Completed
                </button>
            </div>
        </div>
        <div className="row">
            {todos.some(todo => todo.completed) ? <div className="input-field col s4">
                <button className="btn waves-effect waves-light red" onClick={DeleteCompleteTodo}>Delete Completed Todos
                </button>
            </div> : null}
            <div className="input-field col s5">
                <button className="btn waves-effect waves-light black" onClick={ToggleTodo}>Toggle All Todo: {`${toggleAllComplete}`}
                </button>
            </div>

            <div className="input-field col s3">
                <button className="btn waves-effect waves-light red" onClick={DeleteCompleteTodo}>Delete All Todos
                </button>
            </div>
        </div>
    </> : <div className="row">
        <div className="col s12 m12">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">No Todo In The Database</span>
                    <p>Try Writing A New Todo And Click The Submit Button To Add New Todos</p>
                </div>
            </div>
        </div>
    </div>

    return (
        <div className="container">
            <TodoForm onSubmitTodo={addTodo} />
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        {myTodos}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12">
                    <div className="card green darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Active Todos</span>
                            <p style={{ fontSize: '20px' }}>{todos.filter(todo => !todo.completed).length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TodoList
