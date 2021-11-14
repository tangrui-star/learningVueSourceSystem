// CommonJS语法

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // 模式：mode？这个有什么作用？
  mode:'development',
  // 入口：__dirname :webpack.config.js的目录,src:src文件的index.js 文件开始打包
  entry: path.join(__dirname,'src','index.js'),
  // 出口：path，输出到那个目录下，filename：输出文件的名字!
  output:{
    path:path.join(__dirname,'dist'),
    filename:'index.js'
  },
  plugins:[
      new HtmlWebpackPlugin({
        // 指定生成文件的路径
        template:path.join(__dirname,'src','index.html'),
        // 指定生成文件的名字
        filename: 'index.html'
      }),
      // 清除上一打包 dist
      new CleanWebpackPlugin()
  ],
  module:{
    rules:[
      {
        test:/.png$/,
        // use: 'file-loader'
        // 保持图片名打包前后一致
        use:{
          loader:'url-loader',
          options:{
            // 占位符： placeholder [name]  & [hash]
            name:`[name]_[hash].[ext]`,
            // 指定 图片的存放位置
            outputPath:'images/',
            // 单位：2 kb = 2048
            limit: 52000
          }
        }
      },
      {
        test: /.scss$/,
        use: [
            'style-loader',
            // 'css-loader',
             {
               loader:'css-loader',
               options:{
                 modules:true
               }
             },
            'postcss-loader',
            'sass-loader'
        ]
      },
      {
        test: /.(eot|svg|ttf|woff)/,
        use: 'file-loader'
      }
    ]
  },
  devServer:{
    port: 8000,
    static: path.join(__dirname,'dist'),
  }
}
