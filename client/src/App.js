import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import axios from 'axios';

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
    const addItem = (newItem) => {
        newItem.id = todoItems.length + 1;
        newItem.done = false;

        setTodoItems([...todoItems, newItem]);
    };

    const deleteItem = (value) => {
        console.log('id', value);
        setTodoItems(todoItems.filter((item) => item.id !== value.id));
    };

    return (
        <div className="App">
            <AddTodo addItem={addItem} />
            {/* todoItems를 반복, props로 데이터를 자식에게 전달 */}
            {todoItems.map((item) => (
                <Todo key={item.id} item={item} deleteItem={deleteItem} />
            ))}
        </div>
    );
}

export default App;
