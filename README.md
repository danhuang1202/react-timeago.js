# react-timeago.js
[![Build Status](https://travis-ci.org/danhuang1202/react-timeago.js.svg?branch=master)](https://travis-ci.org/danhuang1202/react-timeago.js)
[![codecov](https://codecov.io/gh/danhuang1202/react-timeago.js/branch/master/graph/badge.svg)](https://codecov.io/gh/danhuang1202/react-timeago.js)
[![NPM version](https://img.shields.io/npm/v/react-timeago.js.svg)](https://www.npmjs.com/package/react-timeago.js)

react component and hooks for [timeago.js](https://github.com/hustcc/timeago.js),
for more information, please see: <a href="https://danhuang1202.github.io/react-timeago.js/">Document</a>


## Installation
```
npm i react-timeago.js
```

## Components
- TimeAgo

  Display `timeago` information inside `elementType` tag base on `dateTime` props

  | props | type | required | default | description |
  | --- | --- | --- | --- | --- |
  | elementType | string | false | div | html tag name for the wrap component |
  | className	| string |	false | undefined | Custom class name |
  | dateTime | Date / number / string | true | undefined | start date |
  | options | object | false | undefined | options |

  | options | type | default | description |
  | --- | --- | --- | --- | --- |
  | locale | string | en_US | locale |
  | localeRegister	| function | custom local register function |
  | interval | number | 1000 | update interval duration in milliseconds |

## Hooks
- useTimeAgo

  return `timeago` string base on `dateTime` props

  | props | type | required | default | description |
  | --- | --- | --- | --- | --- |
  | dateTime | Date / number / string | true | undefined | start date |
  | options | object | false | undefined | options |

  | options | type | default | description |
  | --- | --- | --- | --- | --- |
  | locale | string | en_US | locale |
  | localeRegister	| function | custom local register function |
  | interval | number | 1000 | update interval duration in milliseconds |

## Way to Ride
- Common jS
```js
// import from package entry point
const timeago = require('react-timeago.js')

  <timeago.TimeAgo {...props} />
```
```js
// only import specific component
const TimeAgo = require('react-timeago.js/lib/components/TimeAgo')

  <TimeAgo {...props} />
```

- ESM
```js
// import from package entry point
import TimeAgo, { useTimeAgo } from 'react-timeago.js'
  
  const timeAgo = useTimeAgo(dateTime, options)

  <TimeAgo {...props} />
```
```js
// only import specific component
import TimeAgo from 'react-timeago.js/es/components/TimeAgo'

  <TimeAgo {...props} />
```

## Development by storybook
```
npm install
npm start storybook
```
- configuration files list in `.storybook` directory
- story files list in `.stories` directory


## Test with Jest and Puppeteer
```
npm run test
```
- `__tests__`
  - unit test running by `jest`
  - use `test:update` to update jest `snapshot`

## Reference
- [timeago.js](https://github.com/hustcc/timeago.js)