const connection = require('../app/database')

class UserService {
  async create(user) { 
    const { name, uuid } = user
    const statement = 'INSERT INTO user (name, uuid) VALUES (?, ?);'
    const [result] = await connection.execute(statement, [ name, uuid ])
    return result
  }

  async isExists(uuid) {
    const statement = 'SELECT id FROM user WHERE uuid = ?'
    const [result] = await connection.execute(statement, [uuid])
    return result.length > 0
  }

  async update({ name, uuid }) {
    const statement = 'UPDATE user SET name = ? WHERE uuid = ?'
    const [result] = await connection.execute(statement, [name, uuid])
    return result
  }

  async getByUuid(uuid) {
    const statement = `SELECT * FROM user WHERE uuid = ?`
    const [result] = await connection.execute(statement, [uuid])
    return result[0]
  }
}

module.exports = new UserService() 