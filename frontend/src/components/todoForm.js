import { Form, Button } from "../index";

function TodoForm({ handleChange, handlePostData, loading, todo, error }) {
    return (
        <Form className=" form">
            <Form.Label className="text-center">
                {" "}
                <h4>TODO LIST</h4>
            </Form.Label>
            <Form.Group className="d-flex">
                <Form.Control
                    type="text"
                    className="me-2"
                    placeholder="enter todo..."
                    value={todo}
                    onChange={handleChange}
                />
                <Button variant="dark" onClick={handlePostData}>
                    {loading ? "Loading..." : "ADD"}
                </Button>
            </Form.Group>
            {error ? <p className="error"> Invalid Input</p> : null}
        </Form>
    );
}

export default TodoForm;
