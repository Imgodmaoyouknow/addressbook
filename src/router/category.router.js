const Router = require('koa-router')

const { handleUserExists } = require('../middleware/category.middleware')
const { verifyAgruments } = require('../middleware/common.middleware')
const { create, selectById } = require('../controller/category.controller')

const categoryRouter = new Router({ prefix: '/category'})

categoryRouter.post('/', verifyAgruments('uuid', 'name'), handleUserExists, create)

categoryRouter.get('/:uuid', handleUserExists, selectById)

module.exports = categoryRouter