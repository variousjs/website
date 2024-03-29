const path = require('path')
const fs = require('fs')

const { NODE_ENV = 'development' } = process.env
const components = {}

fs
  .readdirSync(path.join(__dirname, './src/components'))
  .filter((name) => {
    const filePath = path.join(__dirname, './src/components', name)
    return name.includes('.tsx') || fs.lstatSync(filePath).isDirectory()
  })
  .forEach((name) => {
    const filePath = path.join(__dirname, './src/components', name)
    if (name.includes('.tsx')) {
      components[name.split('.tsx')[0]] = filePath
    } else {
      components[name] = path.join(filePath, 'index.tsx')
    }
  })

const config = {
  stats: 'minimal',
  entry: {
    entry: path.join(__dirname, './src/entry'),

    // 组件入口
    ...components,
  },
  output: {
    path: path.resolve(__dirname, './docs/dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    libraryTarget: 'amd',
  },
  target: ['web', 'es5'],
  externals: {
    // 内置排除
    react: {
      root: 'React',
      amd: 'react',
    },
    'react-dom/client': {
      root: 'ReactDOM',
      amd: 'react-dom',
    },
    'react-router-dom': {
      root: 'ReactRouterDOM',
      amd: 'react-router-dom',
    },
    '@variousjs/various': {
      root: 'various',
      amd: '@variousjs/various',
    },
  },
  mode: NODE_ENV,
  devtool: 'source-map',
  resolve: {
    // 必须加上 .js，不然 webpack dev server 会报错找不到模块
    extensions: ['.js', '.ts', '.tsx'],
  },
  devServer: {
    allowedHosts: 'all',
    port: 2333,
    host: '0.0.0.0',
    static: {
      directory: path.join(__dirname, './docs'),
    },
    // 监听文件构建后重新刷新页面，包括 html 文件
    watchFiles: ['docs'],
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-typescript',
              ['@babel/preset-env', {
                targets: ['defaults'],
                modules: false,
              }],
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.md$/i,
        use: [
          {
            loader: 'raw-loader',
          },
          {
            loader: path.resolve(__dirname, './md-loader.js'),
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ],
            },
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
    ],
  },
}

module.exports = config
