const db = require('../util/database');

module.exports = class Todo {
  constructor(userId, content, completed, pinned, editing) {
    this.userId = userId;
    this.content = content;
    this.completed = completed;
    this.pinned = pinned;
    this.editing = editing;
  }

  static findUsersTodos(userId) {
    return db.execute('SELECT * FROM todos WHERE userId = ? AND id > 0', [userId]);
  }

  static addTodo(todo) {
    console.log("Tullaa serveriinki");
    console.log(todo);
    return db.execute(
      'INSERT INTO todos (userId, content, completed, pinned, editing) VALUES (?, ?, ?, ?, ?)',
      [todo.userId, todo.content, todo.completed, todo.pinned, todo.editing]
    );
  }

  static updateTodo(todoId, updates) {
    const setClause = Object.keys(updates).map(key => `${key} = ?`).join(', ');
    const sql = `UPDATE todos SET ${setClause} WHERE id = ?`;
    const values = [...Object.values(updates), todoId];
  
    return db.execute(sql, values);
  }

  static removeTodo(todoId) {
    return db.execute(
      'DELETE FROM todos WHERE id = ?',
      [todoId]
    );
  }

};