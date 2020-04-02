module.export = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/ss-subscribe-gen/' : '/'
}
