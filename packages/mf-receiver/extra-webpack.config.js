const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const {merge} =require('webpack-merge');

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Feel free to modify this webpack config however you'd like to
  return merge(singleSpaWebpackConfig,
    {externals: [
      '@ess:single-spa:mf-store',
      '@ess:single-spa:mf-emitter',
      ]
  });
};
