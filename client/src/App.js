import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import axios from 'axios';
import styled from 'styled-components';

const StyledContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    border: 1px solid black;
`;

const StyledTodoCount = styled.div`
    width: 38%;
    padding: 10px;
    /* border: 1px solid black; */
`;

function App() {
    console.log(process.env.REACT_APP_DB_HOST);
    const [todoItems, setTodoItems] = useState([
        {
            id: 1,
            title: 'my todo1',
            done: false,
        },
        {
            id: 2,
            title: 'my todo2',
            done: false,
        },
        {
            id: 3,
            title: 'my todo3',
            done: true,
        },
    ]);

    useEffect(() => {
        const getTodos = async () => {
            const res = await axios.get(
                `${process.env.REACT_APP_DB_HOST}/todos`
            );
            setTodoItems(res.data);
        };
        getTodos();
    }, []);

    // todoItems 상태에 새로운 일을 추가하는 함수
    const addItem = async (newItem) => {
        // before
        //     newItem.id = todoItems.length + 1;
        //     newItem.done = false;
        // setTodoItems([...todoItems, newItem]);

        // after
        const res = await axios.post(
            `${process.env.REACT_APP_DB_HOST}/todo`,
            newItem
        );
        setTodoItems([...todoItems, res.data]);
    };

    const deleteItem = async (value) => {
        // before
        // setTodoItems(todoItems.filter((item) => item.id !== value.id));

        // after
        await axios.delete(`${process.env.REACT_APP_DB_HOST}/todo/${value.id}`);
        setTodoItems(todoItems.filter((item) => item.id !== value.id));
    };

    const updateItem = async (value) => {
        await axios.patch(
            `${process.env.REACT_APP_DB_HOST}/todo/${value.id}`,
            value
        ); // axios.path('url', {})
    };

    return (
        <div>
            <StyledContainer className="App">
                <h1>My Todo App</h1>
                <AddTodo addItem={addItem} />{' '}
                <StyledTodoCount>
                    Todo:{todoItems.length} &#x1F602;
                </StyledTodoCount>
                {/* todoItems를 반복, props로 데이터를 자식에게 전달 */}
                {todoItems.map((item) => (
                    <Todo
                        key={item.id}
                        item={item}
                        deleteItem={deleteItem}
                        updateItem={updateItem}
                    />
                ))}
            </StyledContainer>
        </div>
    );
}

export default App;
