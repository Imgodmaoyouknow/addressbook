const connection = require('../app/database')

class CategoryService {
  async create({userId, name}) {
    const statement = `INSERT INTO category (user_id, name) VALUES (?, ?)`
    const [result] = await connection.execute(statement, [userId, name])
    return result
  }
  
  async selectById({userId}) {
    const statement = `SELECT id, name FROM category WHERE user_id = ?`
    const [result] = await connection.execute(statement, [userId])
    return result
  }
}

module.exports = new CategoryService()