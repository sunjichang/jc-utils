import path from 'path'

export default [
  {
    input: "./src/index.js",
    output: [
      //打包esModule
      {
        file: path.resolve(__dirname, './dist/index.esm.js'),
        format: "es"
      },
      //打包common js
      {
        file: path.resolve(__dirname, './dist/index.cjs.js'),
        format: "cjs"
      },
      //打包 AMD CMD UMD
      {
        input: "./src/core/index.ts",
        file: path.resolve(__dirname, './dist/index.js'),
        format: "umd",
        name: "jcUtils"
      }
    ],
    plugins: []
  }
]