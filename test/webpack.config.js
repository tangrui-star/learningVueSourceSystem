// CommonJS语法

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 模式：mode？这个有什么作用？
  mode:'development',
  // 入口：__dirname :webpack.config.js的目录,src:src文件的index.js 文件开始打包
  entry: path.join(__dirname,'src','index.js'),
  // 出口：path，输出到那个目录下，filename：输出文件的名字!
  output:{
    path:path.join(__dirname,'dist'),
    filename:'bundle.js'
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        loader: 'babel-loader',
        // 需要转换的文件目录
        include:path.join(__dirname,'src'),
        // 除去 不需要转换的文件
        exclude:/node_modules/
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:path.join(__dirname,'src','index.html'),
      filename: 'index.html'
    })
  ],
  devServer:{
    port: 8000,
    static: path.join(__dirname,'dist')
  }
}
