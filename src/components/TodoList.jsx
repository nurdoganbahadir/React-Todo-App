import React from "react";
import { MdDelete } from "react-icons/md";

const TodoList = ({ todos = [], setTodos }) => {
  const handleCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    localStorage.setItem("MyTodos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("MyTodos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  return (
    <div className="container my-3">
      <h2 className="text-center">My Todos</h2>
      <table className="w-100 my-3">
        <tbody>
          {todos.map((item) => (
            <tr
              key={item.id}
              onClick={() => handleCompleted(item.id)}
              className={item.completed ? "completed" : ""}
            >
              <td className="p-3 m-1 bg-secondary text-light rounded-4 d-flex justify-content-between">
                {item.text}
                <MdDelete
                  size={25}
                  type="button"
                  className="text-warning"
                  onClick={(e) => {
                    e.stopPropagation(); // Bu satır tıklamanın `tr`'ye yayılmasını engeller
                    handleDelete(item.id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
