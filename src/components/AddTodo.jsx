import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddTodo = () => {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Enter new todo..."
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <Button
        variant="outline-secondary"
        id="button-addon2"
        className="bg-success text-light"
      >
        Add Todo
      </Button>
    </InputGroup>
  );
};

export default AddTodo;
