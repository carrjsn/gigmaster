// const path = require('path');

module.exports = {
  mode: 'development',
  entry: __dirname + '/client/index.jsx',
  // {
  //   main: __dirname + '/client/index.jsx'
  // },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },

}

// module.exports = {
//   entry: __dirname + '/client/index.jsx',
//   mode: 'development',
//   module: {
//     rules: [
//       {
//         test: [/\.jsx$/],
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-react', '@babel/preset-env']
//           }
//         }
//       }
//     ]
//   },
//   output: {
//     filename: 'bundle.js',
//     path: __dirname + '/public'
//   }

// };