const path = require('path')
const HTMLPlugin =require('html-webpack-plugin')
const webpack =require('webpack')

const isDev = process.env.NODE_ENV === "development";
const config = {
  target:'web',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
        // options: vueLoaderConfig
      },
      // {
      //   test: /\.js$/,
      //   loader: ['babel-loader']
      // },
      {
        test:/\.css$/,
        use:['style.loader','css.loader']
      }
    ]
  },
  // node: {
  //   // prevent webpack from injecting useless setImmediate polyfill because Vue
  //   // source contains it (although only uses it if it's native).
  //   setImmediate: false,
  //   // prevent webpack from injecting mocks to Node native modules
  //   // that does not make sense for the client
  //   dgram: 'empty',
  //   fs: 'empty',
  //   net: 'empty',
  //   tls: 'empty',
  //   child_process: 'empty'
  // }
plugins:[
new webpack.DefinePlugin({
  'process.env':{
    NODE_ENV: isDev ? '"development"' : '"production"'
  }
}),
new HTMLPlugin()
]
};
if(isDev){
  config.devtool = '#cheap-module-eval-source-map';
  config.devServer = {
    port:8000,
    host:'0.0.0.0',
    overlay:{
      errors:true
    }
     // hot:true
  };
 
  config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
    )
}
module.exports = config;