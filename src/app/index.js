const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const useRoutes = require('../router')
const errorHandler = require('./error-handle');
const successHandler = require('./success-handle')

const app = new Koa()

// 统一错误处理
app.on('error', errorHandler)

// 解析参数
app.use(bodyParser())

// 注册路由
useRoutes(app)

app.use(successHandler)

module.exports = app