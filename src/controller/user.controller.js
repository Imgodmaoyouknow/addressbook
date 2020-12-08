const service = require('../service/user.service')

class UserController {
  async registry(ctx, next) {
    const user = ctx.request.body
    if (await service.isExists(user.uuid)) {
      ctx.body = await service.update(user)
    } else {
      ctx.body = await service.create(user)
    }
    await next()
  }
}

module.exports = new UserController()