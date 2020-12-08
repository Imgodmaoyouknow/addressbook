const Router = require('koa-router')

const {
  registry
} = require('../controller/user.controller')

const {
  verifyUser
} = require('../middleware/user.middleware')

const userRouter = new Router({
  prefix: '/users'
})

userRouter.post('/', verifyUser, registry)

module.exports = userRouter