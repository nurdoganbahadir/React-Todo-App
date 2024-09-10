import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const AddTodo = ({ setTodos }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos(todo);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter new todo..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          className="bg-success text-light"
          type="submit"
        >
          Add Todo
        </Button>
      </InputGroup>
    </Form>
  );
};

export default AddTodo;
