const path = require('path')

module.exports = {
  stories: ['../stories/*.stories.tsx'],
  addons: [
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register'
  ],
  webpackFinal: config => {
    config.module.rules = [
      {
        test: /\.css$/,
        exclude: /(statics\/css\/[^/]+|node_modules\/.+)\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          }
        ]
      },
      {
        test: /(statics\/css\/[^/]+|node_modules\/.+)\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
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
}
