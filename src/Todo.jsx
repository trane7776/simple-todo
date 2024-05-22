import { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [key, setKey] = useState(0);

  const handleSubmit = () => {
    setKey(key + 1);
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: key,
      })
    );
    setInput('');
  };
  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };
  return (
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Todo"
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo">
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
