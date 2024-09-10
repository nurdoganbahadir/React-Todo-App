import React from "react";
import { MdDelete } from "react-icons/md";

const TodoList = ({ todos }) => {
  return (
    <div className="container my-3">
      <h2 className="text-center">My Todos</h2>
      <table className="w-100 my-3">
        <div className="p-3 bg-secondary text-light rounded-4 d-flex justify-content-between">
          <tr>{todos}</tr>
          <MdDelete size={25} type="button" className="text-warning" />
        </div>
      </table>
    </div>
  );
};

export default TodoList;
