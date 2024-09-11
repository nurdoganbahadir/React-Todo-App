import React from "react";
import { MdDelete } from "react-icons/md";

const TodoList = ({ todos = [], setTodos }) => {
  const handleDelete = (id) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("MyTodos", JSON.stringify(updateTodos));
    setTodos(updateTodos);
  };

  return (
    <div className="container my-3">
      <h2 className="text-center">My Todos</h2>
      <table className="w-100 my-3">
        <tbody>
          {todos.map((item) => (
            <tr key={item.id}>
              <td className="p-3 m-1 bg-secondary text-light rounded-4 d-flex justify-content-between">
                {item.text}
                <MdDelete
                  size={25}
                  type="button"
                  className="text-warning"
                  onClick={() => handleDelete(item.id)}
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
