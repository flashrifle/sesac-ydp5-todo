import React, { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    padding: 10px;
`;

const StyledTextBox = styled.input`
    width: 300px;
    height: 60px;
    border: none;
    border-bottom: 1px solid black;
`;

const StyledButton = styled.button`
    background-color: #82d6f8;
    margin-left: 30px;
    border: 0;
    border-radius: 30%;
    cursor: pointer;
`;

const StyledCheckBox = styled.input`
    border-radius: 50%;
    margin-right: 30px;
`;

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
        <StyledContainer>
            <StyledCheckBox
                type="checkbox"
                name={`todo${id}`}
                id={`todo${id}`}
                defaultChecked={done}
                onChange={checkboxEventHandler}
            />
            {/* <label htmlFor={`todo${id}`}>{title}</label> */}
            <StyledTextBox
                type="text"
                value={todoItem.title}
                readOnly={readOnly}
                onClick={offReadOnlyMode}
                onChange={editEventHandler}
                onKeyDown={editKeyEventHandler}
            />
            <StyledButton onClick={deleteTodo}>DELETE</StyledButton>
        </StyledContainer>
    );
}
