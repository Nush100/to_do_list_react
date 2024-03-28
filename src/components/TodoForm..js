import React, { useState } from "react";

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="What to do next" value={value} onChange={(e) => {setValue(e.target.value)}}/>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default TodoForm;