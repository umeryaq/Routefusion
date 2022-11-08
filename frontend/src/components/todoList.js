import "../App.css";
import { Card } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace, faTrash } from "@fortawesome/free-solid-svg-icons";

function TodoList({ item, done, checked, handleDeleteData }) {
    return (
        <Card key={item.id} className="   todolist align-items-center ">
            <Card.Header>
                {" "}
                {item.isDone ? (
                    <input
                        type="checkbox"
                        checked={true}
                        className="me-2 check"
                        onClick={() => done(item)}
                    />
                ) : (
                    <input
                        type="checkbox"
                        className="me-2"
                        onClick={() => done(item, true)}
                    />
                )}
            </Card.Header>
            <Card.Body className="list">
                <p className={item.isDone ? "me-2 lineThrough " : "me-2 "}>
                    {item.todo}
                </p>
            </Card.Body>
            <Card.Footer>
                <FontAwesomeIcon
                    icon={faTrash}
                    className="ms-2"
                    onClick={() => handleDeleteData(item)}
                />
            </Card.Footer>
        </Card>
    );
}
export default TodoList;
