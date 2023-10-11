import { useState } from 'react';
import Todo from './components/Todo';

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
    return (
        <div className="App">
            {/* todoItems를 반복, props로 데이터를 자식에게 전달 */}
            {todoItems.map((item) => (
                <Todo key={item.id} item={todoItems} />
            ))}
        </div>
    );
}

export default App;
