const path = require('path')

module.exports = {
  entry: {
    a: path.resolve(__dirname, './src/a.js'),
    b: path.resolve(__dirname, './src/b.js'),
    entry: path.resolve(__dirname, './src/entry/index.js'),
  },
  // 需要将 react，react-dom，@variousjs/various 进行打包排除
  externals: [
    {
      name: 'react',
      root: 'React',
      amd: 'react',
    },
    {
      name: 'react-dom',
      root: 'ReactDOM',
      amd: 'react-dom',
    },
    {
      name: '@variousjs/various',
      root: 'Various',
      amd: '@variousjs/various',
    },
    // 教程 cdn 方式使用 antd UI 组件库，所以这里需要构建排除
    {
      name: 'antd',
      root: 'antd',
      amd: 'antd',
    },
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    // 指定打包成 amd 格式
    libraryTarget: 'amd',
  },
  targets: { esmodules: true },
  mode: 'production',
  sourceMap: false,
}
