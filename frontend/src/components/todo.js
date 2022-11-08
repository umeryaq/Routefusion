import { Container, Row, Col, Form, Button, Card } from "../index"
import { useEffect, useState } from "react"
import TodoList from "./todoList"
import TodoForm from "./todoForm"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { handleGetTodo, handlePostTodo, handlePutTodo, handleDeleteTodo } from "../state/actionCreators/todoCreator"

function Todo() {
	const [todo, setTodo] = useState("")
	const [todoList, setTodoList] = useState([])
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)

	const handleChange = e => {
		setTodo(e.target.value)
		setError(false)
	}

	const handleGetData = async () => {
		try {
			const data = await handleGetTodo()
			setTodoList(data)
			setLoading(false)
		} catch (e) {
			console.log(e)
		}
	}

	const handlePostData = async () => {
		try {
			if (todo) {
				const info = {
					title: todo,
					todo: todo,
				}
				setLoading(true)
				const data = await handlePostTodo(info)
				setTodo("")
				handleGetData()
				toast.success("Todo added")
			} else setError(true)
		} catch (e) {
			console.log(e)
		}
	}

	const handlePutData = async (item, query = false) => {
		try {
			const data = await handlePutTodo(item._id, query)
			handleGetData()
			{
				query ? toast.success("Todo Completed") : toast.warning("Todo Uncompleted")
			}
		} catch (e) {
			console.log(e)
		}
	}

	const handleDeleteData = async item => {
		try {
			await handleDeleteTodo(item._id)
			handleGetData()
			toast.error("Todo Deleted")
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div>
			<Container>
				<ToastContainer />

				<TodoForm
					handleChange={handleChange}
					handlePostData={handlePostData}
					loading={loading}
					todo={todo}
					error={error}
				/>

				<Row className='mt-5'>
					<Col className='col-md-4 col-12 mt-4 text-center'>
						<h6> To-Do</h6>

						{todoList.length ? (
							todoList.map(item => (
								<div>
									{!item.isDone && <TodoList item={item} done={handlePutData} handleDeleteData={handleDeleteData} />}
								</div>
							))
						) : (
							<h6 className=''>Add a todo!!</h6>
						)}
					</Col>

					<Col className='col-md-4 col-12 offset-md-4 mt-4 text-center'>
						<h6>Completed</h6>

						{todoList.length ? (
							todoList.map(item => (
								<div>
									{item.isDone && <TodoList item={item} done={handlePutData} handleDeleteData={handleDeleteData} />}
								</div>
							))
						) : (
							<h6 className=''>Empty!!</h6>
						)}
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Todo
