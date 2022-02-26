const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const StandalonePlugin = require('standalone-single-spa-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {merge} =require('webpack-merge');

module.exports = (config, options) => {
  console.log({config,options,mode:config.mode})
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Feel free to modify this webpack config however you'd like to
  return merge(singleSpaWebpackConfig,
    {
      externals: [
      '@ess:single-spa:mf-store'
    ],
    plugins: [
      // StandalonePlugin is required to make the application work in SPA mode
      new HtmlWebpackPlugin({
        filename: 'standalone.html'
      }),
      new StandalonePlugin({
        appOrParcelName: "mf-nav",
        // If any other MF is required for this MF to work on standalone mode, the mock can be added here
        importMap: {
          imports: {
            "mf-nav": "/main.js",
            "@ess:single-spa:mf-store": "http://localhost:5052/main.js"
          }
        },
        // activeWhen: ['/standalone.html'],
      }),

    ],
  }
  );
};

