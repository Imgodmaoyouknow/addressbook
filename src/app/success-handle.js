const successHandler = (ctx, next) => {
  if (!ctx.body) {
    ctx.status = 404
    ctx.body = 'NOT FOUND'
  } else {
    ctx.body = {
      code: 200,
      result: ctx.body
    }
  }
}

module.exports = successHandler