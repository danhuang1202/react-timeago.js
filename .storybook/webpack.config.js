const path = require('path')

module.exports = ({ config }) => {
  config.module.rules = [
    {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[folder]_[local]_[hash:base64:5]'
          }
        }
      ]
    },
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader'
        },
        {
          loader: require.resolve('react-docgen-typescript-loader')
        }
      ]
    }
  ]

  config.resolve.extensions.push('.ts', '.tsx')

  config.resolve.alias = {
    '@components': path.resolve(__dirname, '../src', 'components'),
    '@hooks': path.resolve(__dirname, '../src', 'hooks')
  }

  return config
}
