const db = require('../util/database');

module.exports = class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static find(email) {
    return db.execute('SELECT * FROM users WHERE email = ?', [email]);
  }

  static save(user) {
    return db.execute(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [user.name, user.email, user.password]
    );
  }

  static removeUser(userId) {
      // Delete user
      const deleteUserQuery = 'DELETE FROM users WHERE id = ?';
      const deleteUserParams = [userId];
  
      // Delete todos associated with the user
      const deleteTodosQuery = 'DELETE FROM todos WHERE userId = ?';
      const deleteTodosParams = [userId];
  
      // Execute queries separately
      return Promise.all([
          db.execute(deleteUserQuery, deleteUserParams),
          db.execute(deleteTodosQuery, deleteTodosParams)
      ]);
  }

};