const Todo = require('../models/todo');


exports.gettodos = async (req, res, next) => {
    const userId = req.query.userId;

    try{
        const todos = await Todo.findUsersTodos(userId);

        const sanitizedTodos = todos[0].map(todo => ({
            id: todo.id,
            userId: todo.userId,
            content: todo.content,
            completed: todo.completed,
            pinned: todo.pinned,
            editing: todo.editing
        }));

        // Send the todos back to the client
        res.status(201).json({ message: 'Todos retrieved', todos: sanitizedTodos });

    }  catch(err){
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
    }
}


exports.addtodos = async (req, res, next) => {
    const todo = {
        userId: req.body.userId,
        content: req.body.content,
        completed: false,
        pinned: false,
        editing: false,
    };

    try{
        const result = await Todo.addTodo(todo);

        res.status(201).json({ message: 'Todo added'});

    } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
    }
}


exports.deletetodos = async (req, res, next) => {
    const todoId = req.query.todoId;

    try{
        const result = await Todo.removeTodo(todoId);

        res.status(201).json({ message: 'Todo removed'});

    } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
    }
}


exports.updatetodos = async (req, res, next) => {
    const todoId = req.query.todoId;
    const updates = req.body;

    try{
        const result = await Todo.updateTodo(todoId, updates);

        res.status(201).json({ message: 'Todo updated'});

    } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
    }

}