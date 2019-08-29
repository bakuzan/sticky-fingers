module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/sticky-fingers' : '/',
  chainWebpack: (config) => {
    config.resolve.symlinks(false);
  }
};
