import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const AddTodo = ({ setTodos }) => {
  const [todo, setTodo] = useState(localStorage.getItem("MyTodos"));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      alert("Lütfen boş bırakmayınız");
    } else {
      // Get the current todos from localStorage or create an empty array if none exist
      const storedTodos = JSON.parse(localStorage.getItem("MyTodos")) || [];

      // Add the new todo to the list
      const updatedTodos = [...storedTodos, todo];

      // Save the updated todos list in localStorage
      localStorage.setItem("MyTodos", JSON.stringify(updatedTodos));

      // Call setTodos to update the state (if necessary in the parent component)
      setTodos(updatedTodos);

      // Clear input after adding
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
