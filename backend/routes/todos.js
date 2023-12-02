const express = require('express');

const { body, query } = require('express-validator');

const router = express.Router();

const todoController = require('../controllers/todo');

const auth = require('../middleware/auth');

router.post(
    '/addtodo',
    [
        auth,
        body('userId').trim().not().isEmpty(),
        body('content').not().isEmpty()
    ], 
    todoController.addtodos
);

router.get(
    '/gettodos',
    [
      auth,
      query('userId').trim().not().isEmpty() 
    ],
    todoController.gettodos
);

router.delete(
    '/deletetodo', 
    [
      auth,
      query('todoId').trim().not().isEmpty(),
    ],
    todoController.deletetodos
)

router.put(
    '/updatetodo',
    [
        auth,
        query('todoId').trim().not().isEmpty(),
        body().notEmpty(),
    ],
    todoController.updatetodos
)


module.exports = router;