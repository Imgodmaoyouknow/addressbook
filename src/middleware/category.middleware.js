const { USER_DOES_NOT_EXISTS } = require("../constants/error-type")
const { getByUuid } = require("../service/user.service")

const handleUserExists = async (ctx, next) => {
  const user = await getByUuid(ctx.request.body.uuid || ctx.params.uuid)

  if (!user) {
    return ctx.app.emit('error', new Error(USER_DOES_NOT_EXISTS), ctx)
  }
  
  ctx.request.body.userId = user.id
  await next()
}

module.exports = {
  handleUserExists
}