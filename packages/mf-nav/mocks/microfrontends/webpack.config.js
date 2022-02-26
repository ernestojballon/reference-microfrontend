
const path = require('path');
const outputDir = path.resolve(__dirname, "./buildMocks");

const createMockServer = (port,fileName)=>({
  entry: `./mocks/microfrontends/${fileName}`,
  output: {
    libraryTarget: "system",
    path:outputDir
  },
  devServer: {
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    allowedHosts: 'auto',
    static: {
      directory: outputDir,
    },
    compress: true,
    port: port,
  },
})

module.exports = (env)=>([
  createMockServer(5052, env.mockFile),
  // createMockServer(5053, "store2.js")
]);
