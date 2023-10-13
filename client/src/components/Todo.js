import React, { useState } from 'react';

export default function Todo({ item, deleteItem }) {
    console.log('item : ', item);
    const { id, title, done } = item;

    const [todoItem, setTodoItem] = useState(item);
    const deleteTodo = (value) => {
        deleteItem(todoItem);
    };
    return (
        <div>
            <input
                type="checkbox"
                name={`todo${id}`}
                id={`todo${id}`}
                defaultChecked={done}
            />
            <label htmlFor={`todo${id}`}>{title}</label>
            <button onClick={deleteTodo}>DELETE</button>
        </div>
    );
}
