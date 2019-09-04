import React from 'react'
import {render} from '@testing-library/react'
import TimeAgo from '@components/TimeAgo'

const mockDate = (now, millisecondsLater) => {
  const originDate = Date
  const mockDateAfterOneMins = new originDate(now + millisecondsLater)
  // @ts-ignore
  global.Date = class extends Date {
    // @ts-ignore
    constructor(date) {
      if (date ) {
        new originDate(date)
      }
      
      return date ? new originDate(date) : mockDateAfterOneMins
    }
  }
}

describe('components: TimeAgo', () => {
  it('[snapshot] TimeAgo', () => {
    const props = {
      elementType: 'p',
      dateTime: Date.now()
    }

    const {container} = render(
      <TimeAgo {...props} />
    )
    expect(container).toMatchSnapshot()
  })

  it('[snapshot] TimeAgo with timer update', () => {
    jest.useFakeTimers()
    const dateTime = Date.now()

    const props = {
      elementType: 'p',
      dateTime,
      options: {
        interval: 60000
      }
    }

    const {container} = render(
      <TimeAgo {...props} />
    )
    
    mockDate(dateTime, 60000)
    jest.runOnlyPendingTimers()

    expect(container).toMatchSnapshot()

    jest.useRealTimers()
  })

  it('[snapshot] TimeAgo with custom locale register', () => {
    jest.useFakeTimers()
    const dateTime = Date.now()

    const props = {
      elementType: 'p',
      dateTime,
      options: {
        interval: 60000,
        locale: 'zh_TW',
        localeRegister: function(number, index) {
          return [
            ['剛剛', '片刻後'],
            ['%s 秒前', '%s 秒後'],
            ['1 分鐘前', '1 分鐘後'],
            ['%s 分鐘前', '%s 分鐘後'],
            ['1 小時前', '1 小時後'],
            ['%s 小時前', '%s 小時後'],
            ['1 天前', '1 天後'],
            ['%s 天前', '%s 天後'],
            ['1 週前', '1 週後'],
            ['%s 週前', '%s 週後'],
            ['1 個月前', '1 個月後'],
            ['%s 個月前', '%s 個月後'],
            ['1 年前', '1 年後'],
            ['%s 年前', '%s 年後']
          ][index]
        }
      }
    }

    const {container} = render(
      <TimeAgo {...props} />
    )

    mockDate(dateTime, 60000)
    jest.runOnlyPendingTimers()

    expect(container).toMatchSnapshot()

    jest.useRealTimers()
  })
})
