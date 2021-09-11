import React, { useState } from 'react'
import shortid from 'shortid';

const TodoForm = ({ onSubmitTodo }) => {
    const [text, setText] = useState('')

    const HandleTodo = (e) => {
        setText(e.target.value);
    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        onSubmitTodo({
            id: shortid.generate(),
            text: text,
            complete: false,
        })
        setText("")
    }
    return (
        <div className="container">
            <div className="row">
                <form className="col s12" onSubmit={HandleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="todo" required type="text" className="validate" value={text} onChange={HandleTodo} />
                            <label htmlFor="todo">Enter Your Todo Here</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TodoForm
