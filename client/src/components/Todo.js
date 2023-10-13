import React, { useState } from 'react';

export default function Todo({ item, deleteItem, updateItem }) {
    console.log('item : ', item);
    const [todoItem, setTodoItem] = useState(item);
    const [readOnly, setReadOnly] = useState(true);

    const { id, title, done } = item;
    const deleteTodo = (value) => {
        deleteItem(todoItem);
    };

    const offReadOnlyMode = () => {
        setReadOnly(false);
    };

    const editEventHandler = (e) => {
        const { title, ...rest } = todoItem;
        setTodoItem({
            title: e.target.value,
            ...rest,
        });
    };

    const editKeyEventHandler = (e) => {
        if (e.key === 'Enter') {
            setReadOnly(true);
            updateItem(todoItem);
        }
    };

    const checkboxEventHandler = (e) => {
        const { done, ...rest } = todoItem;
        const updatedItem = {
            done: e.target.checked,
            ...rest,
        };
        setTodoItem(updatedItem);
        updateItem(updatedItem);
    };

    return (
        <div>
            <input
                type="checkbox"
                name={`todo${id}`}
                id={`todo${id}`}
                defaultChecked={done}
                onChange={checkboxEventHandler}
            />
            {/* <label htmlFor={`todo${id}`}>{title}</label> */}
            <input
                type="text"
                value={todoItem.title}
                readOnly={readOnly}
                onClick={offReadOnlyMode}
                onChange={editEventHandler}
                onKeyDown={editKeyEventHandler}
            />
            <button onClick={deleteTodo}>DELETE</button>
        </div>
    );
}
