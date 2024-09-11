import React from "react";
import { MdDelete } from "react-icons/md";

const TodoList = ({ todos = [] }) => {
  return (
    <div className="container my-3">
      <h2 className="text-center">My Todos</h2>
      <table className="w-100 my-3">
        <tbody>
          {todos.map((item, index) => (
            <tr key={index}>
              <td className="p-3 m-1 bg-secondary text-light rounded-4 d-flex justify-content-between">
                {item}
                <MdDelete size={25} type="button" className="text-warning" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
