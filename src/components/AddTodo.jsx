import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTodo = ({ setTodos }) => {
  const [todo, setTodo] = useState(localStorage.getItem("MyTodos"));
  const [id, setId] = useState(uuidv4());

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("MyTodos")) || [];
    setTodo("");
    setTodos(storedTodos);
  }, [setTodos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      alert("Lütfen boş bırakmayınız");
    } else {
      const storedTodos = JSON.parse(localStorage.getItem("MyTodos")) || [];
      const newTodo = {
        id: uuidv4(),
        text: todo,
      };
      const updatedTodos = [...storedTodos, newTodo];
      localStorage.setItem("MyTodos", JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
      setTodo("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter new todo..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
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
