const errorTypes = require('../constants/error-type')

const verifyUser = async (ctx, next) => {
  // 1. 获取用户名和uuid
  const { uuid, name } = ctx.request.body
  
  // 2. 判断用户名或者uuid不能为空
  if (!(name && uuid)) {
    const error = new Error(errorTypes.NAME_OR_UUID_IS_REQUIRED, ctx)
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}

module.exports = {
  verifyUser
}