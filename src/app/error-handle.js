const errorTypes = require('../constants/error-type')

const errorHandler = (error, ctx) => {
  const body = { code: 400 }
  ctx.status = 400
  switch (error.message) {
    case errorTypes.NAME_OR_UUID_IS_REQUIRED:
      body.msg = '用户名和UUID不能为空'
      break
    case errorTypes.MISSING_ARGUMENTS:
      body.msg = '缺少参数'
      break
    case errorTypes.USER_DOES_NOT_EXISTS:
      body.msg = '用户不存在'
      break
    default:
      ctx.status = 404
  }
  ctx.body = body
}

module.exports = errorHandler
