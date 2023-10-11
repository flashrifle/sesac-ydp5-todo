import { useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

function App() {
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

    // todoItems 상태에 새로운 일을 추가하는 함수
    const addItem = (newItem) => {
        newItem.id = todoItems.length + 1;
        newItem.done = false;

        setTodoItems([...todoItems, newItem]);
    };

    const deleteItem = (value) => {
        console.log('id', value);
        setTodoItems(todoItems.filter((item, idx) => idx + 1 !== value));
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
