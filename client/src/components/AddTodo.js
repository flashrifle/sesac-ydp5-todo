import React, { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    padding: 10px;
`;

const StyledTextBox = styled.input`
    width: 340px;
    height: 60px;
    border: none;
    border-bottom: 1px solid black;
`;

const StyledButton = styled.button`
    width: 65px;
    background-color: #82d6f8;
    margin-left: 30px;
    border: 0;
    border-radius: 30%;
`;

export default function AddTodo({ addItem }) {
    const [todoItem, setTodoItem] = useState({
        title: '',
    });

    const onButtonClick = () => {
        addItem(todoItem);
        setTodoItem({
            title: '',
        });
    };

    return (
        <StyledContainer className="AddTodo">
            <StyledTextBox
                type="text"
                placeholder="할 일을 입력하세요!"
                value={todoItem.title}
                onChange={(e) => setTodoItem({ title: e.target.value })}
            />
            <StyledButton onClick={onButtonClick}>ADD</StyledButton>
        </StyledContainer>
    );
}
