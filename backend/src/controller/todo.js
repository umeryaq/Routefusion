/* eslint-disable comma-dangle */
import Todo from '../model/todo';

export default {
  createTodo: async (req, res) => {
    try {
      const { body } = req;
      const todo = await Todo.create(body);
      return res.status(201).json(todo);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  todoList: async (req, res) => {
    try {
      const lists = await Todo.find({});
      return res.status(200).json(lists);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  todoById: async (req, res) => {
    try {
      const todo = await Todo.findById({ _id: req.params.id });
      if (!todo) {
        return res.status(409).json({ msg: 'Todo not found' });
      }
      return res.status(200).json(todo);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  updateTodo: async (req, res) => {
    try {
      const { body } = req;
      const todo = await Todo.findByIdAndUpdate({ _id: req.params.id }, body, {
        new: true,
      });
      return res.status(200).json(todo);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  deleteTodo: async (req, res) => {
    try {
      const todo = await Todo.findByIdAndDelete({ _id: req.params.id });
      return res.status(204).json(todo);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
