const service = require('../service/category.service')

class CategoryController {
  async create(ctx, next) {
    const result = await service.create(ctx.request.body)
    ctx.body = result
    await next()
  }

  async selectById(ctx, next) {
    ctx.body = await service.selectById(ctx.request.body)
    await next()
  }
}

module.exports = new CategoryController()