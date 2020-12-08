const { MISSING_ARGUMENTS } = require('../constants/error-type')

const verifyAgruments = (...arguments) => {
  return async (ctx, next) => {
    for (const argument of arguments) {
      if (!ctx.request.body[argument]) {
        return ctx.app.emit('error', new Error(MISSING_ARGUMENTS), ctx)
      }
    }
    await next()
  }
}

module.exports = { verifyAgruments }