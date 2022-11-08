import express from 'express';

import TodoContoller from '../controller/todo';
import validate from '../midleware/validators';

const { Router } = express;
const router = Router();

router.post('/', validate.TodoValidator, TodoContoller.createTodo);
router.get('/', TodoContoller.todoList);
router.get('/:id', TodoContoller.todoById);
router.put('/:id', validate.UpdateTodoValidator, TodoContoller.updateTodo);
router.delete('/:id', TodoContoller.deleteTodo);

export default router;
